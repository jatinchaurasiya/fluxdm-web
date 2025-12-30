import DodoPayments from 'dodopayments';
import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

const client = new DodoPayments({
    bearerToken: process.env.DODO_PAYMENTS_API_KEY as string,
    environment: 'live_mode',
});

// Deterministic mock license key generator
// Uses HMAC-SHA256 to generate a consistent key based on the user's email and a secret
const generateLicenseKey = (email: string): string => {
    const secret = process.env.LICENSE_SECRET || 'default_secret_fallback_do_not_use_in_production';
    if (!process.env.LICENSE_SECRET) {
        console.warn('LICENSE_SECRET is not set. Using insecure default.');
    }

    const hash = crypto.createHmac('sha256', secret)
        .update(email.toLowerCase().trim())
        .digest('hex')
        .toUpperCase();

    // Format: FLUX-XXXX-XXXX-XXXX
    const segment1 = hash.substring(0, 4);
    const segment2 = hash.substring(4, 8);
    const segment3 = hash.substring(8, 12);

    return `FLUX-${segment1}-${segment2}-${segment3}`;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { session_id } = req.query;

    if (!session_id || Array.isArray(session_id)) {
        return res.status(400).json({ error: 'Session ID is required' });
    }

    try {
        // Verify payment session
        const session = await client.checkoutSessions.retrieve(session_id);

        // Fix: Dodo Payments SDK types might not have 'status' on the top level or it might be optional?
        // Relying on 'payment_status' which is standard.
        if (session.payment_status !== 'succeeded') {
            // Log the actual status for debugging
            console.error(`Payment not successful. Status: ${session.payment_status}`);
            return res.status(400).json({ error: 'Payment not successful', status: session.payment_status });
        }

        const customerEmail = session.customer_email;
        if (!customerEmail) {
            return res.status(400).json({ error: 'No customer email found in session' });
        }

        const licenseKey = generateLicenseKey(customerEmail);

        return res.status(200).json({
            success: true,
            licenseKey,
            customer_email: customerEmail
        });

    } catch (error: any) {
        console.error('Validation failed:', error);
        return res.status(500).json({ error: 'Failed to verify session' });
    }
}

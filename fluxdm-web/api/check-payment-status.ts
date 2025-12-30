import DodoPayments from 'dodopayments';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const client = new DodoPayments({
    bearerToken: process.env.DODO_PAYMENTS_API_KEY as string,
    environment: 'live_mode',
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { session_id } = req.query;

    if (!session_id || Array.isArray(session_id)) {
        return res.status(400).json({ error: 'Session ID is required' });
    }

    try {
        // 1. CHECK INTERNAL DATABASE FIRST
        // The webhook might have already processed this payment.
        // Example:
        // const dbPayment = await db.payments.findUnique({ where: { sessionId: session_id } });
        // if (dbPayment) {
        //     return res.status(200).json({ status: dbPayment.status }); // 'succeeded' or 'failed'
        // }

        // Fallback: Check Dodo Payments API
        const session = await client.checkoutSessions.retrieve(session_id);

        const status = session.payment_status === 'succeeded' ? 'succeeded' : 'pending';

        // If it's failed, we might want to return that explicitly
        if (session.payment_status === 'failed') {
            return res.status(200).json({ status: 'failed' });
        }

        return res.status(200).json({ status });

    } catch (error: any) {
        console.error('Payment check failed:', error);
        return res.status(500).json({ error: 'Failed to check payment status' });
    }
}

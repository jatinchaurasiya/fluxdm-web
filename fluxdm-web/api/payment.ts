import DodoPayments from 'dodopayments';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// Initialize DodoPayments Client outside the handler (cold start optimization)
const client = new DodoPayments({
    bearerToken: process.env.DODO_PAYMENTS_API_KEY as string,
    environment: 'test_mode',
});

// Vercel Serverless Function (Node.js Runtime)
export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS if needed (though usually handled by Vercel for same-origin)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required' });
        }

        const session = await client.checkoutSessions.create({
            billing_address: {
                city: 'San Francisco',
                country: 'US',
                state: 'CA',
                street: '123 Market St',
                zipcode: '94105'
            },
            customer: {
                email: 'customer@example.com',
                name: 'FluxDM Customer'
            },
            product_cart: [
                {
                    product_id: productId,
                    quantity: 1
                }
            ],
            return_url: `https://fluxdm.space/download-success?session_id={CHECKOUT_SESSION_ID}`,
            metadata: {
                license_type: productId
            }
        });

        return res.status(200).json({ url: session.checkout_url });
    } catch (error: any) {
        console.error('Payment Session Creation Failed:', error);
        return res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}

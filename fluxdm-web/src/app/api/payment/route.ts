import DodoPayments from 'dodopayments';

// NOTE: This file is a Server-Side Route Handler intended for Next.js App Router or compatible server.
// It will NOT execute in a client-side Vite application without a backend proxy.

const client = new DodoPayments({
    bearerToken: process.env.DODO_PAYMENTS_API_KEY as string, // Ensure this env var is set
    environment: 'test_mode', // Switch to 'live_mode' in production
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { productId } = body;

        if (!productId) {
            return Response.json({ error: 'Product ID is required' }, { status: 400 });
        }

        const session = await client.checkoutSessions.create({
            billing_address: {
                city: 'San Francisco', // Default placeholder or fetch from user inputs
                country: 'US',
                state: 'CA',
                street: '123 Market St',
                zipcode: '94105'
            },
            customer: {
                email: 'customer@example.com', // In a real app, retrieve from authenticated user session
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

        return Response.json({ url: session.checkout_url });
    } catch (error: any) {
        console.error('Payment Session Creation Failed:', error);
        return Response.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}

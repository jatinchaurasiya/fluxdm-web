/**
 * NOTE: This is a Next.js App Router API Route Handler.
 * Since this current project appears to be a client-side Vite application,
 * this code will not run here directly. You must deploy this file 
 * in a Next.js application at the path: app/api/webhooks/dodo/route.ts
 */

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Verify the event type from Dodo Payments
        if (body.type === 'payment.succeeded') {
            const { customer_email, total_amount } = body.data;

            console.log(`💰 Payment Received from ${customer_email}`);
            console.log(`   Amount: ${total_amount}`);

            // TODO: Add your logic here (e.g., database update, send email, etc.)
        }

        // Return 200 OK to acknowledge receipt
        return Response.json({ received: true }, { status: 200 });

    } catch (error) {
        console.error('Webhook Error:', error);
        return Response.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        );
    }
}

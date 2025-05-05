// import { NextResponse } from "next/server"

// export async function POST(request: Request) {
//   try {
//     const data = await request.json()

//     // Validate required fields
//     if (!data.name || !data.email || !data.amount || !data.paymentMethod) {
//       return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
//     }

//     // In a real implementation, you would:
//     // 1. Process the payment through a payment gateway
//     // 2. Store the donation record in a database
//     // 3. Send a confirmation email to the donor
//     // 4. Generate a receipt/acknowledgment

//     // For now, we'll just simulate a successful response
//     return NextResponse.json(
//       {
//         success: true,
//         message: "Donation processed successfully",
//         transactionId: `DON-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
//       },
//       { status: 200 },
//     )
//   } catch (error) {
//     console.error("Error processing donation:", error)
//     return NextResponse.json({ error: "Failed to process donation" }, { status: 500 })
//   }
// }


import Razorpay from 'razorpay'
import { NextRequest, NextResponse } from 'next/server'

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { amount } = body

  const payment_capture = 1
  const currency = 'INR'

  const options = {
    amount: amount * 100, // amount in paisa
    currency,
    receipt: `receipt_order_${Date.now()}`,
    payment_capture,
  }

  try {
    const order = await razorpay.orders.create(options)
    return NextResponse.json({ orderId: order.id, amount: order.amount, currency: order.currency })
  } catch (err) {
    console.error('Razorpay Error:', err)
    return new NextResponse('Razorpay order creation failed', { status: 500 })
  }
}

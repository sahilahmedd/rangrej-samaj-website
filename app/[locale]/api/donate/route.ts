import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  const body = await req.json();

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: parseInt(body.amount) * 100, // amount in paise
    currency: "INR",
    receipt: "receipt_" + new Date().getTime(),
    notes: {
      name: body.name,
      email: body.email,
      phone: body.phone,
      donationType: body.donationType,
      message: body.message,
    },
  };

  try {
    const order = await instance.orders.create(options);

    // OPTIONAL: Save order info + donor info to DB here (status: "pending")

    return NextResponse.json({
      success: true,
      orderId: order.id,
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

// app/api/capture-full-payment/route.ts

import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📨 full-payment API called with: ", body);
    const { paymentId, amount, userData, event } = body;

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    // 1. Fetch full payment data from Razorpay
    const fullPaymentData = await razorpay.payments.fetch(paymentId);

    console.log("Payment data: ", fullPaymentData);
    
    // 2. Construct your payload
    const capturePayload = {
      paymentId,
      amount: parseFloat(amount) * 100,
      ENVIT_ID: event.eventID || "",
      PR_FULL_NAME: userData?.PR_FULL_NAME || "",
      entity: fullPaymentData.entity || "payment",
      currency: fullPaymentData.currency || "INR",
      status: fullPaymentData.status || "captured",
      order_id: fullPaymentData.order_id || null,
      invoice_id: fullPaymentData.invoice_id || null,
      international: fullPaymentData.international ? 1 : 0,
      method: fullPaymentData.method || "",
      amount_refunded: fullPaymentData.amount_refunded || 0,
      refund_status: fullPaymentData.refund_status ? 1 : 0,
      captured: fullPaymentData.captured || false,
      description: fullPaymentData.description || `Payment for ${event.name}`,
      bank: fullPaymentData.bank ? 1 : 0,
      wallet: fullPaymentData.wallet ? 1 : 0,
      vpa: fullPaymentData.vpa ? 1 : 0,
      email: fullPaymentData.email || "",
      contact: fullPaymentData.contact || userData.PR_MOBILE_NO || "",
      fee: fullPaymentData.fee || 0,
      tax: fullPaymentData.tax || 0,
      error_code: fullPaymentData.error_code || "",
      error_description: fullPaymentData.error_description || "",
      error_source: fullPaymentData.error_source || "",
      error_step: fullPaymentData.error_step || "",
      error_reason: fullPaymentData.error_reason || "",
      JSON_LOG: JSON.stringify(fullPaymentData),
      cate_id: event.id,
    };

    console.log('Sending capture payload:', JSON.stringify(capturePayload));

    // 3. Send it to your actual backend for saving
    const db = await fetch("https://node2-plum.vercel.app/api/user/capture-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(capturePayload),
    });

    console.log("DB: ", db);
    

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error fetching Razorpay payment:", err);
    return NextResponse.json(
      { success: false, message: "Failed to fetch Razorpay payment" },
      { status: 500 }
    );
  }
}

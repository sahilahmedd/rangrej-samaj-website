"use client";

import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

interface types {
  lable: string;
}

export default function DonationModal({ lable }: types) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentFrame, setShowPaymentFrame] = useState(false);

  const formContainerRef = useRef<HTMLDivElement>(null);

  const predefinedAmounts = [500, 1000, 2000];

  const getFinalAmount = () => {
    return selectedAmount ?? parseInt(customAmount);
  };

  const handleSubmit = async () => {
    const amount = getFinalAmount();

    if (!amount || amount <= 0 || !name || !phone) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/en/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
        amount: amount * 100,
        currency: "INR",
        name: "Rangrej Foundation",
        description: "Donation",
        image: "/images/logo1.png",
        order_id: data.orderId,
        handler: async (response: any) => {
          await fetch("/en/api/full-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              paymentId: response.razorpay_payment_id,
              amount,
              userData: {
                PR_FULL_NAME: name,
                PR_MOBILE_NO: phone,
              },
              event: {
                id: "", // pass if applicable
                eventID: "", // pass if applicable
              },
            }),
          });

          toast({
            title: "Thank You!",
            description: "Your donation was successful.",
          });

          setShowPaymentFrame(false);
          setSelectedAmount(null);
          setCustomAmount("");
          setName("");
          setPhone("");
        },
        modal: {
          ondismiss: () => setShowPaymentFrame(false),
        },
        method: {
          netbanking: false,
          card: false,
          upi: true,
          wallet: false,
          emi: false,
          paylater: false,
        },
        theme: { color: "#0C2340" },
      };
      console.log("Razorpay Options:", options);
      setShowPaymentFrame(true);

      // const rzp = new (window as any).Razorpay(options);
      // rzp.open();

      if (typeof window !== "undefined" && (window as any).Razorpay) {
        const rzp = new (window as any).Razorpay(options);
        rzp.open();
      } else {
        toast({
          title: "Payment Error",
          description: "Razorpay is not ready. Try refreshing the page.",
          variant: "destructive",
        });
      }

      setTimeout(() => {
        const modal = document.querySelector(
          ".razorpay-container"
        ) as HTMLElement;
        if (modal && formContainerRef.current) {
          const { width } = formContainerRef.current.getBoundingClientRect();

          modal.style.width = `${width}px`;
          modal.style.maxWidth = "672px";
          modal.style.position = "fixed";
          modal.style.top = "50%";
          modal.style.left = "50%";
          modal.style.transform = "translate(-50%, -50%)";
          modal.style.borderRadius = "20px";
          modal.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
          modal.style.backgroundColor = "#fff"; // Optional: in case Razorpay sets transparent
          modal.style.zIndex = "9999"; // Ensure it sits above other content
        }
      }, 100);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white">
          {lable}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="max-w-sm bg-rangrez-sand"
        ref={formContainerRef}
      >
        <DialogHeader>
          <DialogTitle>Support the Cause</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-rangrez-indigo"
          />
          <Input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-rangrez-indigo"
          />

          <div className="flex flex-wrap gap-2">
            {predefinedAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
                className="hover:bg-rangrez-gold border border-rangrez-indigo"
              >
                ₹{amount}
              </Button>
            ))}
          </div>

          <Input
            type="number"
            placeholder="Or enter custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            className="border border-rangrez-indigo"
          />

          <Button
            className="w-full bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Donate Now"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

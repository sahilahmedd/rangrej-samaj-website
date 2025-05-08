"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { useTranslations } from "next-intl";




export default function DonationForm() {
  const t = useTranslations("Donation");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    donationType: "general",
    paymentMethod: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, donationType: value }))
  }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()
  
  //   if (!formData.name || !formData.email || !formData.amount || !formData.paymentMethod) {
  //     toast({
  //       title: "Error",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     })
  //     return
  //   }
  
  //   setIsSubmitting(true)
  
  //   try {
  //     // 1. Call backend to create Razorpay order
  //     const res = await fetch("/en/api/donate", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ amount: formData.amount }),
  //     })
  
  //     const data = await res.json()
  //     const { order } = data
  
  //     // 2. Open Razorpay payment modal
  //     const options = {
  //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string, // must be public
  //       amount: order.amount,
  //       currency: "INR",
  //       name: "Rangrej Foundation",
  //       description: "Donation",
  //       image: "/images/logo1.png",
  //       order_id: order.id,
  //       handler: async function (response: any) {
  //         console.log("✅ Razorpay Payment Response:", response)
  
  //         // Optional: Send to backend for saving
  //         await fetch("https://node2-plum.vercel.app/api/user/capture-payment", {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify({
  //             ...formData,
  //             razorpay_payment_id: response.razorpay_payment_id,
  //             razorpay_order_id: response.razorpay_order_id,
  //             razorpay_signature: response.razorpay_signature,
  //           }),
  //         })
  
  //         toast({
  //           title: "Thank You!",
  //           description: "Your donation has been received.",
  //         })
  
  //         setFormData({
  //           name: "",
  //           email: "",
  //           phone: "",
  //           amount: "",
  //           donationType: "general",
  //           paymentMethod: "",
  //           message: "",
  //         })
  //       },
  //       prefill: {
  //         name: formData.name,
  //         email: formData.email,
  //         contact: formData.phone,
  //       },
  //       theme: {
  //         color: "#B7410E",
  //       },
  //     }
  
  //     const rzp = new (window as any).Razorpay(options)
  //     rzp.open()
  //   } catch (error) {
  //     console.error("❌ Payment Error:", error)
  //     toast({
  //       title: "Error",
  //       description: "Failed to process donation. Please try again later.",
  //       variant: "destructive",
  //     })
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!formData.name || !formData.email || !formData.amount || !formData.paymentMethod) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
  
    setIsSubmitting(true)
  
    try {
      // 1. Create Razorpay order from your backend
      const res = await fetch("/en/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: formData.amount }),
      })
  
      const data = await res.json()
      const { order } = data
      console.log("Dataaa: ", data);
      
  
      // 2. Setup Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
        amount: Number(formData.amount) * 100,
        currency: "INR",
        name: "Rangrej Foundation",
        description: "Donation",
        image: "/images/logo1.png",
        order_id: data.orderId,
        handler: async function (response: any) {
          const campaignMap: Record<string, string> = {
            zakat: "1",
            sadaqah: "2",
            general: "3",
          };
        
          const ENVIT_ID = campaignMap[formData.donationType];
        
          const userData = {
            PR_FULL_NAME: formData.name,
            PR_MOBILE_NO: formData.phone,
          };
        
          const event = {
            id: ENVIT_ID,
            name: formData.donationType,
          };
        
          await fetch("/en/api/full-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              paymentId: response.razorpay_payment_id,
              amount: formData.amount,
              userData,
              event,
            }),
          });
        
          toast({
            title: "Thank You!",
            description: "Your donation has been received.",
          });
        
          setFormData({
            name: "",
            email: "",
            phone: "",
            amount: "",
            donationType: "general",
            paymentMethod: "",
            message: "",
          });
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: "#B7410E",
        },
      }
  
      const rzp = new (window as any).Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error("❌ Payment Error:", error)
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  
  //   if (!formData.name || !formData.email || !formData.amount || !formData.paymentMethod) {
  //     toast({
  //       title: "Error",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     });
  //     return;
  //   }
  
  //   setIsSubmitting(true);
  
  //   try {
  //     // 1. Create Razorpay order from your backend
  //     const res = await fetch("/en/api/donate", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ amount: formData.amount }),
  //     });
  
  //     const data = await res.json();
  //     const { orderId } = data;
  
  //     if (!orderId) {
  //       throw new Error("Order ID not returned from backend");
  //     }
  
  //     console.log("✅ Razorpay Order Created: ", orderId);
  
  //     // 2. Configure Razorpay options
  //     const options = {
  //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
  //       amount: Number(formData.amount) * 100,
  //       currency: "INR",
  //       name: "Rangrej Foundation",
  //       description: "Donation",
  //       image: "/images/logo1.png",
  //       order_id: orderId,
  //       handler: async function (response: any) {
  //         console.log("✅ Razorpay Payment Success Response:", response);
  
  //         const campaignMap: Record<string, string> = {
  //           zakat: "CAMPAIGN_ID_ZAKAT",
  //           sadaqah: "CAMPAIGN_ID_SADAQAH",
  //           general: "CAMPAIGN_ID_GENERAL",
  //         };
  
  //         const ENVIT_ID = campaignMap[formData.donationType];
  
  //         const userData = {
  //           PR_FULL_NAME: formData.name,
  //           PR_MOBILE_NO: formData.phone,
  //         };
  
  //         const event = {
  //           id: ENVIT_ID,
  //           name: formData.donationType,
  //         };
  
  //         try {
  //           const capture = await fetch("/en/api/full-payment", {
  //             method: "POST",
  //             headers: { "Content-Type": "application/json" },
  //             body: JSON.stringify({
  //               paymentId: response.razorpay_payment_id,
  //               amount: formData.amount,
  //               userData,
  //               event,
  //             }),
  //           });
  
  //           const result = await capture.json();
  //           console.log("📦 full-payment API response:", result);
  
  //           toast({
  //             title: "Thank You!",
  //             description: "Your donation has been received.",
  //           });
  
  //           // Reset form
  //           setFormData({
  //             name: "",
  //             email: "",
  //             phone: "",
  //             amount: "",
  //             donationType: "general",
  //             paymentMethod: "",
  //             message: "",
  //           });
  
  //         } catch (err) {
  //           console.error("❌ Error saving full-payment:", err);
  //           toast({
  //             title: "Error",
  //             description: "Donation received, but could not store details.",
  //             variant: "destructive",
  //           });
  //         }
  //       },
  //       modal: {
  //         ondismiss: () => {
  //           console.warn("🔴 Razorpay popup closed by user");
  //           toast({
  //             title: "Payment Cancelled",
  //             description: "You cancelled the donation.",
  //             variant: "destructive",
  //           });
  //         },
  //       },
  //       prefill: {
  //         name: formData.name,
  //         email: formData.email,
  //         contact: formData.phone,
  //       },
  //       theme: {
  //         color: "#B7410E",
  //       },
  //     };
  
  //     const rzp = new (window as any).Razorpay(options);
  //     toast({
  //       title: "Redirecting to Razorpay...",
  //       description: "Please complete your payment in the popup.",
  //     });
  //     rzp.open();
  
  //   } catch (error) {
  //     console.error("❌ Payment Error:", error);
  //     toast({
  //       title: "Error",
  //       description: "Failed to process donation. Please try again later.",
  //       variant: "destructive",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            {/* Name */}
            {t("donation-form-name")} <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder={t("donation-form-name-placeholder")}
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {/* Email */}
            {t("donation-form-email")} <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder={t("donation-form-email-placeholder")}
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            {/* Phone Number */}
            {t("donation-form-phone")}
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder={t("donation-form-phone-placeholder")}
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium">
            {/* Donation Amount (₹) */}
            {t("donation-form-amount")} <span className="text-red-500">*</span>
          </label>
          <Input
            id="amount"
            name="amount"
            type="number"
            placeholder={t("donation-form-amount-placeholder")}
            min="1"
            value={formData.amount}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-sm font-medium">
          {/* Donation Type */}
          {t("donation-form-donation-type")} <span className="text-red-500">*</span>
        </label>
        <RadioGroup value={formData.donationType} onValueChange={handleRadioChange} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="zakat" id="zakat" />
            <Label htmlFor="zakat">{t("donation-form-zakat")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sadaqah" id="sadaqah" />
            <Label htmlFor="sadaqah">{t("donation-form-sadaqah")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="general" id="general" />
            <Label htmlFor="general">{t("donation-form-general-donation")}</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          {/* Payment Method */}
          {t("donation-form-payment-method")} <span className="text-red-500">*</span>
        </label>
        <Select
          value={formData.paymentMethod}
          onValueChange={(value) => handleSelectChange("paymentMethod", value)}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Payment Method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="upi">{t("donation-form-upi")}</SelectItem>
            <SelectItem value="card">{t("donation-form-card")}</SelectItem>
            <SelectItem value="netbanking">{t("donation-form-netbanking")}</SelectItem>
            <SelectItem value="wallet">{t("donation-form-wallet")}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          {/* Message (Optional) */}
          {t("donation-form-message")}
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder={t("donation-form-message-placeholder")}
          rows={3}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full bg-[#B7410E] hover:bg-[#8B3103] text-white" disabled={isSubmitting}>
        {isSubmitting ? t("donation-form-processing") : t("donation-form-make-donation")}
      </Button>
    </form>
  )
}

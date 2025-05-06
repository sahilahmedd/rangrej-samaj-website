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
<<<<<<< HEAD

declare global {
  interface Window {
    Razorpay: any
  }
}


export default function DonationForm() {
=======
import { useTranslations } from "next-intl";
export default function DonationForm() {
  const t = useTranslations("Donation");
>>>>>>> lang
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

<<<<<<< HEAD
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   // Basic validation
  //   if (!formData.name || !formData.email || !formData.amount || !formData.paymentMethod) {
  //     toast({
  //       title: "Error",
  //       description: "Please fill in all required fields.",
  //       variant: "destructive",
  //     })
  //     return
  //   }

  //   setIsSubmitting(true)

  //   // Simulate API call
  //   try {
  //     // In a real implementation, this would be an API call to /api/donate
  //     await new Promise((resolve) => setTimeout(resolve, 1000))

  //     toast({
  //       title: "Thank You!",
  //       description: "Your donation has been processed successfully.",
  //     })

  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       amount: "",
  //       donationType: "general",
  //       paymentMethod: "",
  //       message: "",
  //     })
  //   } catch (error) {
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
  
=======
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
>>>>>>> lang
    if (!formData.name || !formData.email || !formData.amount || !formData.paymentMethod) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }
<<<<<<< HEAD
  
    setIsSubmitting(true)
  
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: formData.amount }),
      })
  
      const order = await res.json()
  
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: "Your Foundation Name",
        description: "Donation",
        order_id: order.id,
        handler: function (response: any) {
          toast({
            title: "Thank You!",
            description: `Payment successful. Payment ID: ${response.razorpay_payment_id}`,
          })
  
          setFormData({
            name: "",
            email: "",
            phone: "",
            amount: "",
            donationType: "general",
            paymentMethod: "",
            message: "",
          })
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          donation_type: formData.donationType,
          message: formData.message,
        },
        theme: {
          color: "#B7410E",
        },
      }
  
      const rzp = new window.Razorpay(options)
      rzp.open()
    } catch (error) {
      console.error(error)
      toast({
        title: "Error",
        description: "Failed to initiate payment. Please try again later.",
=======

    setIsSubmitting(true)

    // Simulate API call
    try {
      // In a real implementation, this would be an API call to /api/donate
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Thank You!",
        description: "Your donation has been processed successfully.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        amount: "",
        donationType: "general",
        paymentMethod: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process donation. Please try again later.",
>>>>>>> lang
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
<<<<<<< HEAD
  
=======
>>>>>>> lang

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
<<<<<<< HEAD
            Name <span className="text-red-500">*</span>
=======
            {/* Name */}
            {t("donation-form-name")} <span className="text-red-500">*</span>
>>>>>>> lang
          </label>
          <Input
            id="name"
            name="name"
<<<<<<< HEAD
            placeholder="Your Name"
=======
            placeholder={t("donation-form-name-placeholder")}
>>>>>>> lang
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
<<<<<<< HEAD
            Email <span className="text-red-500">*</span>
=======
            {/* Email */}
            {t("donation-form-email")} <span className="text-red-500">*</span>
>>>>>>> lang
          </label>
          <Input
            id="email"
            name="email"
            type="email"
<<<<<<< HEAD
            placeholder="Your Email"
=======
            placeholder={t("donation-form-email-placeholder")}
>>>>>>> lang
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
<<<<<<< HEAD
            Phone Number
=======
            {/* Phone Number */}
            {t("donation-form-phone")}
>>>>>>> lang
          </label>
          <Input
            id="phone"
            name="phone"
<<<<<<< HEAD
            placeholder="Your Phone Number"
=======
            placeholder={t("donation-form-phone-placeholder")}
>>>>>>> lang
            value={formData.phone}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium">
<<<<<<< HEAD
            Donation Amount (₹) <span className="text-red-500">*</span>
=======
            {/* Donation Amount (₹) */}
            {t("donation-form-amount")} <span className="text-red-500">*</span>
>>>>>>> lang
          </label>
          <Input
            id="amount"
            name="amount"
            type="number"
<<<<<<< HEAD
            placeholder="Amount"
=======
            placeholder={t("donation-form-amount-placeholder")}
>>>>>>> lang
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
<<<<<<< HEAD
          Donation Type <span className="text-red-500">*</span>
=======
          {/* Donation Type */}
          {t("donation-form-donation-type")} <span className="text-red-500">*</span>
>>>>>>> lang
        </label>
        <RadioGroup value={formData.donationType} onValueChange={handleRadioChange} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="zakat" id="zakat" />
<<<<<<< HEAD
            <Label htmlFor="zakat">Zakat</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sadaqah" id="sadaqah" />
            <Label htmlFor="sadaqah">Sadaqah</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="general" id="general" />
            <Label htmlFor="general">General Donation</Label>
=======
            <Label htmlFor="zakat">{t("donation-form-zakat")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="sadaqah" id="sadaqah" />
            <Label htmlFor="sadaqah">{t("donation-form-sadaqah")}</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="general" id="general" />
            <Label htmlFor="general">{t("donation-form-general-donation")}</Label>
>>>>>>> lang
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
<<<<<<< HEAD
          Payment Method <span className="text-red-500">*</span>
=======
          {/* Payment Method */}
          {t("donation-form-payment-method")} <span className="text-red-500">*</span>
>>>>>>> lang
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
<<<<<<< HEAD
            <SelectItem value="upi">UPI</SelectItem>
            <SelectItem value="card">Credit/Debit Card</SelectItem>
            <SelectItem value="netbanking">Net Banking</SelectItem>
            <SelectItem value="wallet">Digital Wallet</SelectItem>
=======
            <SelectItem value="upi">{t("donation-form-upi")}</SelectItem>
            <SelectItem value="card">{t("donation-form-card")}</SelectItem>
            <SelectItem value="netbanking">{t("donation-form-netbanking")}</SelectItem>
            <SelectItem value="wallet">{t("donation-form-wallet")}</SelectItem>
>>>>>>> lang
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
<<<<<<< HEAD
          Message (Optional)
=======
          {/* Message (Optional) */}
          {t("donation-form-message")}
>>>>>>> lang
        </label>
        <Textarea
          id="message"
          name="message"
<<<<<<< HEAD
          placeholder="Any specific instructions or notes"
=======
          placeholder={t("donation-form-message-placeholder")}
>>>>>>> lang
          rows={3}
          value={formData.message}
          onChange={handleChange}
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full bg-[#B7410E] hover:bg-[#8B3103] text-white" disabled={isSubmitting}>
<<<<<<< HEAD
        {isSubmitting ? "Processing..." : "Make Donation"}
      </Button>
    </form>
  )
}
=======
        {isSubmitting ? t("donation-form-processing") : t("donation-form-make-donation")}
      </Button>
    </form>
  )
}
>>>>>>> lang

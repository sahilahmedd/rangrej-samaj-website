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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.amount || !formData.paymentMethod) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

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
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

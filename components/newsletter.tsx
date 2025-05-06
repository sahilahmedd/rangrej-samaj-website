"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
<<<<<<< HEAD
=======
import { useTranslations } from "next-intl"
>>>>>>> lang

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
<<<<<<< HEAD
=======
  const t = useTranslations("Homepage")
>>>>>>> lang

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "Please enter your email address.",
=======
        title: t("home-newsletter-email-error-title"),
        description: t("home-newsletter-email-error-description"),
>>>>>>> lang
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      // In a real implementation, this would be an API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
<<<<<<< HEAD
        title: "Success!",
        description: "You have been subscribed to our newsletter.",
=======
        title: t("home-newsletter-success-title"),
        description: t("home-newsletter-success-description"),
>>>>>>> lang
      })

      setEmail("")
    } catch (error) {
      toast({
<<<<<<< HEAD
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
=======
        title: t("home-newsletter-error-title"),
        description: t("home-newsletter-error-description"),
>>>>>>> lang
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="text-center">
<<<<<<< HEAD
      <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
      <p className="text-white/90 max-w-[600px] mx-auto mb-6">
        Subscribe to our newsletter to receive updates about our events, initiatives, and community news.
=======
      <h2 className="text-3xl font-bold text-white mb-4">
        {/* Stay Updated */}
        {t("home-newsletter-title-h2")}
        </h2>
      <p className="text-white/90 max-w-[600px] mx-auto mb-6">
        {/* Subscribe to our newsletter to receive updates about our events, initiatives, and community news. */}
        {t("home-newsletter-description-p")}
>>>>>>> lang
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <Input
<<<<<<< HEAD
            type="email"
            placeholder="Enter your email"
=======
            type={t("home-newsletter-input-email")}
            placeholder={t("home-newsletter-placeholder")}
>>>>>>> lang
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <Button type="submit" className="bg-white text-[#B7410E] hover:bg-white/90" disabled={isSubmitting}>
<<<<<<< HEAD
            {isSubmitting ? "Subscribing..." : "Subscribe"}
=======
            {isSubmitting ? t("home-newsletter-button-subscribing") : t("home-newsletter-button")}
>>>>>>> lang
          </Button>
        </div>
      </form>
    </div>
  )
}

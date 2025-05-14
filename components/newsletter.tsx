"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useTranslations } from "next-intl"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const t = useTranslations("Homepage")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: t("home-newsletter-email-error-title"),
        description: t("home-newsletter-email-error-description"),
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
        title: t("home-newsletter-success-title"),
        description: t("home-newsletter-success-description"),
      })

      setEmail("")
    } catch (error) {
      toast({
        title: t("home-newsletter-error-title"),
        description: t("home-newsletter-error-description"),
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        {/* Stay Updated */}
        {t("home-newsletter-title-h2")}
        </h2>
      <p className="text-white/90 max-w-[600px] mx-auto mb-6">
        {/* Subscribe to our newsletter to receive updates about our events, initiatives, and community news. */}
        {t("home-newsletter-description-p")}
      </p>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="flex gap-2">
          <Input
            type={t("home-newsletter-input-email")}
            placeholder={t("home-newsletter-placeholder")}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <Button type="submit" className="bg-white text-[#0C2340] hover:bg-white/90" disabled={isSubmitting}>
            {isSubmitting ? t("home-newsletter-button-subscribing") : t("home-newsletter-button")}
          </Button>
        </div>
      </form>
    </div>
  )
}

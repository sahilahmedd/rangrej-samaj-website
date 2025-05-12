"use client";

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Category = {
  CATE_ID: string;
  CATE_DESC: string;
};

export default function DonationForm() {
  const t = useTranslations("Donation");
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    donationType: "1",
    categoryId: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [category, setCategory] = useState<Category[]>([]);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showPaymentFrame, setShowPaymentFrame] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const getCategory = async () => {
      const res = await fetch("https://node2-plum.vercel.app/api/admin/categories");
      const data = await res.json();


      console.log("This is Data: ", data);
    
      const apiData = {CATE_CATE_ID: 1};

      const matchID = data.categories.filter((cate: { CATE_CATE_ID: number; }) => cate.CATE_CATE_ID === apiData.CATE_CATE_ID)

      console.log("CATE_ID: ", matchID);
      

      setCategory(matchID);
    };
    getCategory();
  }, []);

  console.log("Category: ", category);
  

  const validateStep1 = () => {
    if (!formData.name || !formData.amount || !formData.categoryId) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleStepNavigation = (direction: "next" | "prev") => {
    if (direction === "next" && !validateStep1()) return;
    setCurrentStep(direction === "next" ? 2 : 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/en/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: formData.amount }),
      });

      const data = await res.json();
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
        amount: Number(formData.amount) * 100,
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
              amount: formData.amount,
              userData: {
                PR_FULL_NAME: formData.name,
                PR_MOBILE_NO: formData.phone,
              },
              event: {
                id: formData.categoryId,
                eventID: formData.donationType || "",
              },
            }),
          });

          setShowThankYouModal(true);
          setShowPaymentFrame(false);
          setFormData({
            name: "",
            phone: "",
            amount: "",
            donationType: "",
            categoryId: "",
            message: "",
          });
        },
        modal: {
          ondismiss: () => setShowPaymentFrame(false),
        },
        theme: { color: "#B7410E" },
      };

      setShowPaymentFrame(true);
      const rzp = new (window as any).Razorpay(options);
      rzp.open();

      // Adjust payment modal styling
      setTimeout(() => {
        const modal = document.querySelector('.razorpay-container') as HTMLElement;
        if (modal && formContainerRef.current) {
          const { width } = formContainerRef.current.getBoundingClientRect();
          modal.style.width = `${width}px`;
          modal.style.maxWidth = '672px';
          modal.style.margin = '20px auto';
          modal.style.borderRadius = '8px';
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

  const selectedCategory = category.find(
    (cat) => cat.CATE_ID === formData.categoryId
  )?.CATE_DESC || "";

  return (
    <div className="max-w-2xl mx-auto p-6" ref={formContainerRef}>
      {/* Step 1 - Donation Details */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>
                {t("donation-form-name")} <span className="text-red-500">*</span>
              </Label>
              <Input
                name="name"
                placeholder={t("donation-form-name-placeholder")}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>{t("donation-form-phone")}</Label>
              <Input
                name="phone"
                placeholder={t("donation-form-phone-placeholder")}
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>
                {t("donation-form-amount")} <span className="text-red-500">*</span>
              </Label>
              <Input
                name="amount"
                type="number"
                placeholder={t("donation-form-amount-placeholder")}
                min="1"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>
                {t("donation-form-donation-type")} <span className="text-red-500">*</span>
              </Label>
              <select
                className="border p-2 rounded-lg w-full"
                value={formData.categoryId}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  categoryId: e.target.value
                }))}
                required
              >
                <option value="">{t("donation-form-select-category")}</option>
                {category.map((cat) => (
                  <option key={cat.CATE_ID} value={cat.CATE_ID}>
                    {cat.CATE_DESC}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>{t("donation-form-message")}</Label>
            <Textarea
              name="message"
              placeholder={t("donation-form-message-placeholder")}
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <Button
              onClick={() => handleStepNavigation("next")}
              className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
            >
              {t("donation-form-next")}
            </Button>
          </div>
        </div>
      )}

      {/* Step 2 - Summary */}
      {currentStep === 2 && (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">
              {t("donation-form-summary")}
            </h3>
            <dl className="space-y-4">
              <div className="flex justify-between">
                <dt>{t("donation-form-name")}</dt>
                <dd className="font-medium">{formData.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{t("donation-form-phone")}</dt>
                <dd className="font-medium">{formData.phone || "-"}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{t("donation-form-amount")}</dt>
                <dd className="font-medium">₹{formData.amount}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{t("donation-form-category")}</dt>
                <dd className="font-medium">{selectedCategory}</dd>
              </div>
              <div className="flex justify-between">
                <dt>{t("donation-form-message")}</dt>
                <dd className="font-medium">{formData.message || "-"}</dd>
              </div>
            </dl>
          </div>

          <div className="flex justify-between">
            <Button
              type="button"
              onClick={() => handleStepNavigation("prev")}
              variant="outline"
            >
              {t("donation-form-previous")}
            </Button>
            <Button
              type="submit"
              className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? t("donation-form-processing")
                : t("donation-form-checkout")}
            </Button>
          </div>
        </form>
      )}

      {/* Payment Frame Overlay */}
      {showPaymentFrame && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-full max-w-2xl">
            <div className="razorpay-container" />
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      <Dialog open={showThankYouModal} onOpenChange={() => {
        setShowThankYouModal(false);
        setCurrentStep(1);
      }}>
        <DialogContent className="text-center">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#B7410E]">
              {t("donation-form-thank-you")}
            </DialogTitle>
          </DialogHeader>
          <div className="py-6 space-y-4">
            <p className="text-lg font-medium">
              {t("donation-form-donation-received")}
            </p>
          </div>
          <Button
            className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
            onClick={() => {
              setShowThankYouModal(false);
              setCurrentStep(1);
            }}
          >
            {t("donation-form-close")}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
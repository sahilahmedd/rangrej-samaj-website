// "use client";

// import type React from "react";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Label } from "@/components/ui/label";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
// import { useTranslations } from "next-intl";

// type Category = {
//   CATE_ID: string;
//   CATE_DESC: string;
// };

// export default function DonationForm() {
//   const t = useTranslations("Donation");
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     amount: "",
//     donationType: "1",
//     categoryId: "",
//     // paymentMethod: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [category, setCategory] = useState<Category[]>([]);
//   const [selectedCate, setSelectedCate] = useState();

//   const { toast } = useToast();

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   useEffect(() => {
//     const getCategory = async () => {
//       const res = await fetch(
//         "https://node2-plum.vercel.app/api/admin/categories"
//       );
//       const data = await res.json();

//       console.log("Data: ", data.categories);
//       setCategory(data.categories);
//     };
//     getCategory();
//   }, []);

//   console.log("Printed: ", category);

//   // const handleSelectChange = (name: string, value: string) => {
//   //   setFormData((prev) => ({ ...prev, [name]: value }));
//   // };

//   // const handleRadioChange = (value: string) => {
//   //   setFormData((prev) => ({ ...prev, donationType: value }));
//   // };

// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();

//   if (!formData.name || !formData.amount || !formData.categoryId) {
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
//     const { order } = data;
//     console.log("Dataaa: ", data);

//     // 2. Setup Razorpay options
//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
//       amount: Number(formData.amount) * 100,
//       currency: "INR",
//       name: "Rangrej Foundation",
//       description: "Donation",
//       image: "/images/logo1.png",
//       order_id: data.orderId,
//       handler: async function (response: any) {
//         // const campaignMap: Record<string, string> = {
//         //   zakat: "1",
//         //   sadaqah: "2",
//         //   general: "3",
//         // };

//         // const CATE_ID = campaignMap[formData.categoryId];

//         const userData = {
//           PR_FULL_NAME: formData.name,
//           PR_MOBILE_NO: formData.phone,
//         };

//         // const event = {
//         //   id: ENVIT_ID,
//         //   name: formData.donationType,
//         // };

//         const event = {
//           id: formData.categoryId, // ✅ send selected CATE_ID
//           eventID: formData.donationType || "",
//           // name: formData.donationType, // optional, if you're also using donationType
//         };

//         await fetch("/en/api/full-payment", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             paymentId: response.razorpay_payment_id,
//             amount: formData.amount,
//             userData,
//             event,
//           }),
//         });

//         toast({
//           title: "Thank You!",
//           description: "Your donation has been received.",
//         });

//         setFormData({
//           name: "",
//           phone: "",
//           amount: "",
//           donationType: "",
//           categoryId: "",
//           // paymentMethod: "",
//           message: "",
//         });
//       },
//       prefill: {
//         name: formData.name,
//         contact: formData.phone,
//       },
//       theme: {
//         color: "#B7410E",
//       },
//     };

//     const rzp = new (window as any).Razorpay(options);
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

// console.log("Form DATA: ", formData);

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <label htmlFor="name" className="text-sm font-medium">
//             {/* Name */}
//             {t("donation-form-name")} <span className="text-red-500">*</span>
//           </label>
//           <Input
//             id="name"
//             name="name"
//             placeholder={t("donation-form-name-placeholder")}
//             value={formData.name}
//             onChange={handleChange}
//             disabled={isSubmitting}
//             required
//           />
//         </div>
//         {/* <div className="space-y-2">
//           <label htmlFor="email" className="text-sm font-medium">
//             Email
//             {t("donation-form-email")} <span className="text-red-500">*</span>
//           </label>
//           <Input
//             id="email"
//             name="email"
//             type="email"
//             placeholder={t("donation-form-email-placeholder")}
//             value={formData.email}
//             onChange={handleChange}
//             disabled={isSubmitting}
//             required
//           />
//         </div> */}
//         <div className="space-y-2">
//           <label htmlFor="phone" className="text-sm font-medium">
//             {/* Phone Number */}
//             {t("donation-form-phone")}
//           </label>
//           <Input
//             id="phone"
//             name="phone"
//             placeholder={t("donation-form-phone-placeholder")}
//             value={formData.phone}
//             onChange={handleChange}
//             disabled={isSubmitting}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="space-y-2">
//           <label htmlFor="amount" className="text-sm font-medium">
//             {/* Donation Amount (₹) */}
//             {t("donation-form-amount")} <span className="text-red-500">*</span>
//           </label>
//           <Input
//             id="amount"
//             name="amount"
//             type="number"
//             placeholder={t("donation-form-amount-placeholder")}
//             min="1"
//             value={formData.amount}
//             onChange={handleChange}
//             disabled={isSubmitting}
//             required
//           />
//         </div>
//         <div className="space-y-3 flex flex-col">
//           <label className="text-sm font-medium">
//             {/* Donation Type */}
//             {t("donation-form-donation-type")}{" "}
//             <span className="text-red-500">*</span>
//           </label>
//           {/* <RadioGroup
//             value={formData.donationType}
//             onValueChange={handleRadioChange}
//             className="flex justify-start"
//           >
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem value="zakat" id="zakat" />
//               <Label htmlFor="zakat">{t("donation-form-zakat")}</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem value="sadaqah" id="sadaqah" />
//               <Label htmlFor="sadaqah">{t("donation-form-sadaqah")}</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//               <RadioGroupItem value="general" id="general" />
//               <Label htmlFor="general">
//                 {t("donation-form-general-donation")}
//               </Label>
//             </div>
//           </RadioGroup> */}
//           <select
//             className="border p-2 rounded-lg"
//             name="category"
//             id="category"
//             value={formData.categoryId}
//             onChange={(e) =>
//               setFormData((prev) => ({ ...prev, categoryId: e.target.value }))
//             }
//           >
//             <option value="">Select category</option>
//             {category.map((cat) => (
//               <option key={cat.CATE_ID} value={cat.CATE_ID}>
//                 {cat.CATE_DESC}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/*   <div className="space-y-2">
//         <label className="text-sm font-medium">
//            Payment Method
//           {t("donation-form-payment-method")}{" "}
//           <span className="text-red-500">*</span>
//         </label>
//         <Select
//           value={formData.paymentMethod}
//           onValueChange={(value) => handleSelectChange("paymentMethod", value)}
//           required
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Select Payment Method" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="upi">{t("donation-form-upi")}</SelectItem>
//             <SelectItem value="card">{t("donation-form-card")}</SelectItem>
//             <SelectItem value="netbanking">
//               {t("donation-form-netbanking")}
//             </SelectItem>
//             <SelectItem value="wallet">{t("donation-form-wallet")}</SelectItem>
//           </SelectContent>
//         </Select>
//       </div> */}

//       <div className="space-y-2">
//         <label htmlFor="message" className="text-sm font-medium">
//           {/* Message (Optional) */}
//           {t("donation-form-message")}
//         </label>
//         <Textarea
//           id="message"
//           name="message"
//           placeholder={t("donation-form-message-placeholder")}
//           rows={3}
//           value={formData.message}
//           onChange={handleChange}
//           disabled={isSubmitting}
//         />
//       </div>

//       <Button
//         type="submit"
//         className="w-full bg-[#B7410E] hover:bg-[#8B3103] text-white"
//         disabled={isSubmitting}
//       >
//         {isSubmitting
//           ? t("donation-form-processing")
//           : t("donation-form-make-donation")}
//       </Button>
//     </form>
//   );
// }


// <=====================================>

// "use client";

// import type React from "react";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { useTranslations } from "next-intl";

// type Category = {
//   CATE_ID: string;
//   CATE_DESC: string;
// };

// export default function DonationForm() {
//   const t = useTranslations("Donation");
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     amount: "",
//     donationType: "1",
//     categoryId: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [category, setCategory] = useState<Category[]>([]);
//   const { toast } = useToast();

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   useEffect(() => {
//     const getCategory = async () => {
//       const res = await fetch("https://node2-plum.vercel.app/api/admin/categories");
//       const data = await res.json();
//       setCategory(data.categories);
//     };
//     getCategory();
//   }, []);

//   const validateStep1 = () => {
//     if (!formData.name || !formData.amount || !formData.categoryId) {
//       toast({
//         title: "Error",
//         description: "Please fill in all required fields.",
//         variant: "destructive",
//       });
//       return false;
//     }
//     return true;
//   };

//   const handleStepNavigation = (direction: "next" | "prev") => {
//     if (direction === "next" && !validateStep1()) return;
//     setCurrentStep(direction === "next" ? 2 : 1);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateStep1()) return;

//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/en/api/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: formData.amount }),
//       });

//       const data = await res.json();
//       const { order } = data;

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
//         amount: Number(formData.amount) * 100,
//         currency: "INR",
//         name: "Rangrej Foundation",
//         description: "Donation",
//         image: "/images/logo1.png",
//         order_id: data.orderId,
//         handler: async function (response: any) {
//           const userData = {
//             PR_FULL_NAME: formData.name,
//             PR_MOBILE_NO: formData.phone,
//           };

//           const event = {
//             id: formData.categoryId,
//             eventID: formData.donationType || "",
//           };

//           await fetch("/en/api/full-payment", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               paymentId: response.razorpay_payment_id,
//               amount: formData.amount,
//               userData,
//               event,
//             }),
//           });

//           toast({
//             title: "Thank You!",
//             description: "Your donation has been received.",
//           });

//           setFormData({
//             name: "",
//             phone: "",
//             amount: "",
//             donationType: "",
//             categoryId: "",
//             message: "",
//           });
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//         },
//         theme: {
//           color: "#B7410E",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment Error:", error);
//       toast({
//         title: "Error",
//         description: "Failed to process donation. Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const selectedCategory = category.find(
//     (cat) => cat.CATE_ID === formData.categoryId
//   )?.CATE_DESC || "";

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       {currentStep === 1 && (
//         <div className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="name">
//                 {t("donation-form-name")} <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 placeholder={t("donation-form-name-placeholder")}
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="phone">{t("donation-form-phone")}</Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 placeholder={t("donation-form-phone-placeholder")}
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="amount">
//                 {t("donation-form-amount")} <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 id="amount"
//                 name="amount"
//                 type="number"
//                 placeholder={t("donation-form-amount-placeholder")}
//                 min="1"
//                 value={formData.amount}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label>
//                 {t("donation-form-donation-type")} <span className="text-red-500">*</span>
//               </Label>
//               <select
//                 className="border p-2 rounded-lg w-full"
//                 name="category"
//                 id="category"
//                 value={formData.categoryId}
//                 onChange={(e) =>
//                   setFormData((prev) => ({ ...prev, categoryId: e.target.value }))
//                 }
//                 required
//               >
//                 <option value="">{t("donation-form-select-category")}</option>
//                 {category.map((cat) => (
//                   <option key={cat.CATE_ID} value={cat.CATE_ID}>
//                     {cat.CATE_DESC}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="message">{t("donation-form-message")}</Label>
//             <Textarea
//               id="message"
//               name="message"
//               placeholder={t("donation-form-message-placeholder")}
//               rows={3}
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex justify-end">
//             <Button
//               type="button"
//               onClick={() => handleStepNavigation("next")}
//               className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
//             >
//               {t("donation-form-next")}
//             </Button>
//           </div>
//         </div>
//       )}

//       {currentStep === 2 && (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">{t("donation-form-summary")}</h3>
//             <dl className="space-y-4">
//               <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-name")}</dt>
//                 <dd className="font-medium">{formData.name}</dd>
//               </div>
//               <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-phone")}</dt>
//                 <dd className="font-medium">{formData.phone || "-"}</dd>
//               </div>
//               <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-amount")}</dt>
//                 <dd className="font-medium">₹{formData.amount}</dd>
//               </div>
//               {/* <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-category")}</dt>
//                 <dd className="font-medium">{selectedCategory}</dd>
//               </div> */}
//               <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-message")}</dt>
//                 <dd className="font-medium">{formData.message || "-"}</dd>
//               </div>
//             </dl>
//           </div>

//           <div className="flex justify-between">
//             <Button
//               type="button"
//               onClick={() => handleStepNavigation("prev")}
//               variant="outline"
//             >
//               {t("donation-form-previous")}
//             </Button>
//             <Button
//               type="submit"
//               className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
//               disabled={isSubmitting}
//             >
//               {isSubmitting
//                 ? t("donation-form-processing")
//                 : t("donation-form-checkout")}
//             </Button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }


// "use client";

// import type React from "react";
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { useTranslations } from "next-intl";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// type Category = {
//   CATE_ID: string;
//   CATE_DESC: string;
// };

// export default function DonationForm() {
//   const t = useTranslations("Donation");
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     amount: "",
//     donationType: "1",
//     categoryId: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [category, setCategory] = useState<Category[]>([]);
//   const [showThankYouModal, setShowThankYouModal] = useState(false);
//   const { toast } = useToast();

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   useEffect(() => {
//     const getCategory = async () => {
//       const res = await fetch("https://node2-plum.vercel.app/api/admin/categories");
//       const data = await res.json();
//       setCategory(data.categories);
//     };
//     getCategory();
//   }, []);

//   const validateStep1 = () => {
//     if (!formData.name || !formData.amount || !formData.categoryId) {
//       toast({
//         title: "Error",
//         description: "Please fill in all required fields.",
//         variant: "destructive",
//       });
//       return false;
//     }
//     return true;
//   };

//   const handleStepNavigation = (direction: "next" | "prev") => {
//     if (direction === "next" && !validateStep1()) return;
//     setCurrentStep(direction === "next" ? 2 : 1);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateStep1()) return;

//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/en/api/donate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: formData.amount }),
//       });

//       const data = await res.json();

//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
//         amount: Number(formData.amount) * 100,
//         currency: "INR",
//         name: "Rangrej Foundation",
//         description: "Donation",
//         image: "/images/logo1.png",
//         order_id: data.orderId,
//         handler: async function (response: any) {
//           const userData = {
//             PR_FULL_NAME: formData.name,
//             PR_MOBILE_NO: formData.phone,
//           };

//           const event = {
//             id: formData.categoryId,
//             eventID: formData.donationType || "",
//           };

//           await fetch("/en/api/full-payment", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               paymentId: response.razorpay_payment_id,
//               amount: formData.amount,
//               userData,
//               event,
//             }),
//           });

//           setShowThankYouModal(true);
//           setFormData({
//             name: "",
//             phone: "",
//             amount: "",
//             donationType: "",
//             categoryId: "",
//             message: "",
//           });
//         },
//         prefill: {
//           name: formData.name,
//           contact: formData.phone,
//         },
//         theme: {
//           color: "#B7410E",
//         },
//       };

//       const rzp = new (window as any).Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment Error:", error);
//       toast({
//         title: "Error",
//         description: "Failed to process donation. Please try again later.",
//         variant: "destructive",
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleModalClose = () => {
//     setShowThankYouModal(false);
//     setCurrentStep(1);
//   };

//   const selectedCategory = category.find(
//     (cat) => cat.CATE_ID === formData.categoryId
//   )?.CATE_DESC || "";

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       {currentStep === 1 && (
//         <div className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="name">
//                 {t("donation-form-name")} <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 id="name"
//                 name="name"
//                 placeholder={t("donation-form-name-placeholder")}
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="phone">{t("donation-form-phone")}</Label>
//               <Input
//                 id="phone"
//                 name="phone"
//                 placeholder={t("donation-form-phone-placeholder")}
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="amount">
//                 {t("donation-form-amount")} <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 id="amount"
//                 name="amount"
//                 type="number"
//                 placeholder={t("donation-form-amount-placeholder")}
//                 min="1"
//                 value={formData.amount}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label>
//                 {t("donation-form-donation-type")} <span className="text-red-500">*</span>
//               </Label>
//               <select
//                 className="border p-2 rounded-lg w-full"
//                 name="category"
//                 id="category"
//                 value={formData.categoryId}
//                 onChange={(e) =>
//                   setFormData((prev) => ({ ...prev, categoryId: e.target.value }))
//                 }
//                 required
//               >
//                 <option value="">{t("donation-form-select-category")}</option>
//                 {category.map((cat) => (
//                   <option key={cat.CATE_ID} value={cat.CATE_ID}>
//                     {cat.CATE_DESC}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="message">{t("donation-form-message")}</Label>
//             <Textarea
//               id="message"
//               name="message"
//               placeholder={t("donation-form-message-placeholder")}
//               rows={3}
//               value={formData.message}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="flex justify-end">
//             <Button
//               type="button"
//               onClick={() => handleStepNavigation("next")}
//               className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
//             >
//               {t("donation-form-next")}
//             </Button>
//           </div>
//         </div>
//       )}

//       {currentStep === 2 && (
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h3 className="text-lg font-semibold mb-4">{t("donation-form-summary")}</h3>
//             <dl className="space-y-4">
//               <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-name")}</dt>
//                 <dd className="font-medium">{formData.name}</dd>
//               </div>
//               <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-phone")}</dt>
//                 <dd className="font-medium">{formData.phone || "-"}</dd>
//               </div>
//               <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-amount")}</dt>
//                 <dd className="font-medium">₹{formData.amount}</dd>
//               </div>
//               {/* <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-category")}</dt>
//                 <dd className="font-medium">{selectedCategory}</dd>
//               </div> */}
//               <div className="flex justify-between">
//                 <dt className="text-gray-600">{t("donation-form-message")}</dt>
//                 <dd className="font-medium">{formData.message || "-"}</dd>
//               </div>
//             </dl>
//           </div>

//           <div className="flex justify-between">
//             <Button
//               type="button"
//               onClick={() => handleStepNavigation("prev")}
//               variant="outline"
//             >
//               {t("donation-form-previous")}
//             </Button>
//             <Button
//               type="submit"
//               className="bg-[#B7410E] hover:bg-[#8B3103] text-white"
//               disabled={isSubmitting}
//             >
//               {isSubmitting
//                 ? t("donation-form-processing")
//                 : t("donation-form-checkout")}
//             </Button>
//           </div>
//         </form>
//       )}

//       <Dialog open={showThankYouModal} onOpenChange={handleModalClose}>
//         <DialogContent className="sm:max-w-[425px] text-center">
//           <DialogHeader>
//             <DialogTitle className="text-2xl text-[#B7410E]">
//               {t("donation-form-thank-you")}
//             </DialogTitle>
//           </DialogHeader>
//           <div className="py-6 space-y-4">
//             <p className="text-lg font-medium">
//               {t("donation-form-donation-received")}
//             </p>
//             <p className="text-gray-600">
//               {t("donation-form-redirect-message")}
//             </p>
//           </div>
//           <div className="flex justify-center">
//             <Button
//               onClick={handleModalClose}
//               className="bg-[#B7410E] hover:bg-[#8B3103] text-white px-8"
//             >
//               {t("donation-form-close")}
//             </Button>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

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
      setCategory(data.categories);
    };
    getCategory();
  }, []);

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
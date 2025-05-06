import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react"
import ContactForm from "@/components/contact-form"
<<<<<<< HEAD

export default function ContactPage() {
=======
import { useTranslations } from "next-intl";
export default function ContactPage() {
  const t = useTranslations("Contact");
>>>>>>> lang
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#B7410E] py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4">
              {/* Contact Us */}
              {t("contact-us-title")}
            </h1>
            <p className="text-xl text-white/90 max-w-[700px] mx-auto">
              {/* We're here to help and answer any questions you might have. Reach out to us and we'll respond as soon as
              we can. */}
              {t("contact-us-description")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#8B3103]">
                {/* Get in Touch */}
                {t("contact-us-get-in-touch")}
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F2C94C]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#B7410E]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        {/* Phone */}
                        {t("contact-us-phone")}
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        {/* Call us directly at: */}
                        {t("contact-us-phone-call")}
                      </p>
                      <p className="font-medium">+91 98765 43210</p>
                      <p className="font-medium">+91 12345 67890 ({t("contact-us-whatsapp")})</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F2C94C]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#B7410E]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        {/* Email */}
                        {t("contact-us-email")}
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        {/* Send us an email at: */}
                        {t("contact-us-email-send-us-an-email-at")}
                      </p>
                      <p className="font-medium">info@rangrajsamaj.org</p>
                      <p className="font-medium">support@rangrajsamaj.org</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F2C94C]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#B7410E]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        {/* Office Location */}
                        {t("contact-us-office-location")}
                      </h3>
                      <p className="text-muted-foreground mb-1">
                        {/* Visit us at: */}
                        {t("contact-us-visit-us-at")}
                      </p>
                      <p className="font-medium">
                        {/* Rangraj Bhavan, 123 Community Street */}
                        {t("contact-us-rangraj-bhavan")}
                      </p>
                      <p className="font-medium">
                        {/* Mumbai, Maharashtra 400001 */}
                        {t("contact-us-mumbai-maharashtra")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">            
                <h3 className="font-bold text-lg mb-4">
                  {/* Connect With Us */}
                  {t("contact-us-connect-with-us")}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#F2C94C]/10 flex items-center justify-center hover:bg-[#F2C94C]/20 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-[#B7410E]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#F2C94C]/10 flex items-center justify-center hover:bg-[#F2C94C]/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-[#B7410E]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#F2C94C]/10 flex items-center justify-center hover:bg-[#F2C94C]/20 transition-colors"
                  >
                    <Youtube className="w-6 h-6 text-[#B7410E]" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#8B3103]">
                Send Us a Message
                {/* {t("contact-us-send-us-a-message")} */}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#8B3103]">
            {/* Find Us */}
            {t("contact-us-find-us")}
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rangraj Samaj Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Card, CardContent } from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("Contact");
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-[#0C2340] py-16 md:py-24">
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
      <section className="py-16 ">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-rangrez-indigo_dark">
                {/* Get in Touch */}
                {t("contact-us-get-in-touch")}
              </h2>

              <div className="space-y-8">
                <Card>
                  <CardContent className="p-6 border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all rounded-lg flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rangrez-saffron/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#0C2340]" />
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
                      <p className="font-medium">
                        +91 12345 67890 ({t("contact-us-whatsapp")})
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all rounded-lg flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rangrez-saffron/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#0C2340]" />
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
                      <p className="font-medium">info@Rangrezsamaj.org</p>
                      <p className="font-medium">support@Rangrezsamaj.org</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all rounded-lg flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rangrez-saffron/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#0C2340]" />
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
                        {/* Rangrez Bhavan, 123 Community Street */}
                        {t("contact-us-address-1")}
                      </p>
                      <p className="font-medium">
                        {/* Mumbai, Maharashtra 400001 */}
                        {t("contact-us-address-2")}
                      </p>
                      <p className="font-medium">
                        {/* Mumbai, Maharashtra 400001 */}
                        {t("contact-us-address-3")}
                      </p>
                      <p className="font-medium">
                        {/* Mumbai, Maharashtra 400001 */}
                        {t("contact-us-address-4")}
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
                    className="w-12 h-12 rounded-full bg-rangrez-saffron/20 flex items-center justify-center hover:bg-rangrez-sand_hover/20 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-[#0C2340]" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-rangrez-saffron/20 flex items-center justify-center hover:bg-rangrez-sand_hover/20 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-[#0C2340]" />
                  </a>
                  <a
                    href="https://www.youtube.com/@RangrezSamajKharikaDhawa"
                    className="w-12 h-12 rounded-full bg-rangrez-saffron/20 flex items-center justify-center hover:bg-rangrez-sand_hover/20 transition-colors"
                    target="_blank"
                  >
                    <Youtube className="w-6 h-6 text-[#0C2340]" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-rangrez-indigo_dark">
                {/* Send Us a Message */}
                {t("contact-us-send-us-a-message")}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F9F5E7]">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-rangrez-indigo_dark">
            {/* Find Us */}
            {t("contact-us-find-us")}
          </h2>
          <div className="w-full h-[400px] rounded-lg overflow-hidden">
            {/* <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
              src="https://maps.app.goo.gl/TYgQGPsabc4JytuD9"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rangrez Samaj Office Location"
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d358.6205934335566!2d74.64391215989316!3d25.889432076626647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39693f87fae81287%3A0xa8b517834ef56b2!2sRangrej%20Samaj%20Sewa%20Samiti!5e1!3m2!1sen!2sin!4v1747636112426!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rangrez Samaj Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

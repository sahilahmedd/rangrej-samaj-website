import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const locale = useLocale();

  return (
    <footer className="bg-rangrez-indigo_dark text-white mx-2 sm:mx-4 my-8 sm:my-10 rounded-2xl">
      <div className="container px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand & Social */}
          <div className="text-left text-sm sm:text-lg">
            {/* <h3 className="text-lg font-bold mb-4">Rangrez Samaj</h3> */}
            <Logo width={120} height={120} style="rounded-lg mb-5" alt="Logo" />
            <p className="text-white/80 mb-4 text-sm">
              {/* Empowering and uniting the Rangrez (Rangrez) Samaj through health, charity, marriage meets, and cultural awareness. */}
              {t("footer-title-p")}
            </p>
            <div className="flex justify-start gap-4">
              <a href="#" className="text-white/80 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white/80 hover:text-white">
                <Link
                  href="https://www.youtube.com/@RangrezSamajKharikaDhawa"
                  target="_blank"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4">
              {/* Quick Links */}
              {t("footer-quick-links")}
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: `/`, label: t("home") },
                { href: `/about`, label: t("about") },
                { href: `/initiatives`, label: t("initiatives") },
                { href: `/events`, label: t("events") },
                { href: `/gallery`, label: t("gallery") },
                { href: `/donation`, label: t("donation") },
                { href: `/contact`, label: t("contact") },
                { href: `/privacy-policy`, label: t("privacy") },
                { href: `/terms-conditions`, label: t("terms") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4">
              {/* Initiatives */}
              {t("footer-initiatives")}
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/initiatives#health", label: t("footer-medical-aid") },
                {
                  href: "/initiatives#zakat",
                  label: t("footer-zakat-distribution"),
                },
                {
                  href: "/initiatives#vivah",
                  label: t("footer-vivah-sammelan"),
                },
                {
                  href: "/initiatives#education",
                  label: t("footer-educational-support"),
                },
                { href: "/events", label: t("footer-community-events") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-4">
              {/* Contact Us */}
              {t("footer-contact")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex flex-row gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <p className="text-white/80 leading-snug">
                  {t("footer-address-1")} <br />
                  {t("footer-address-2")} <br />
                  {t("footer-address-3")} <br />
                  {t("footer-address-4")}
                </p>
              </li>
              <li className="flex items-center justify-start sm:justify-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <Link href={`tel:${t("footer-phone")}`} className="text-white/80">{t("footer-phone")}</Link>
              </li>
              <li className="flex items-center justify-start sm:justify-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <Link href={`mail:${t("footer-email")}`} className="text-white/80">{t("footer-email")}</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>
            {/* &copy; {new Date().getFullYear()} Rangrez Samaj. All rights reserved. */}
            {t("footer-copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

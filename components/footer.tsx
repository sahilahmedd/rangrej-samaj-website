import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Logo from "./Logo"

export default function Footer() {
  return (
    // <footer className="bg-[#8B3103] text-white mx-4 my-10 rounded-2xl">
    //   <div className="container px-4 md:px-6 py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Rangraj Samaj</h3>
    //         <p className="text-white/80 mb-4">
    //           Empowering and uniting the Rangraj (Rangrez) Samaj through health, charity, marriage meets, and cultural
    //           awareness.
    //         </p>
    //         <div className="flex gap-4">
    //           <a href="#" className="text-white/80 hover:text-white">
    //             <Facebook className="w-5 h-5" />
    //             <span className="sr-only">Facebook</span>
    //           </a>
    //           <a href="#" className="text-white/80 hover:text-white">
    //             <Instagram className="w-5 h-5" />
    //             <span className="sr-only">Instagram</span>
    //           </a>
    //           <a href="#" className="text-white/80 hover:text-white">
    //             <Youtube className="w-5 h-5" />
    //             <span className="sr-only">YouTube</span>
    //           </a>
    //         </div>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Quick Links</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link href="/" className="text-white/80 hover:text-white">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/about" className="text-white/80 hover:text-white">
    //               About Us
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/initiatives" className="text-white/80 hover:text-white">
    //               Our Initiatives
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/events" className="text-white/80 hover:text-white">
    //               Events
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/gallery" className="text-white/80 hover:text-white">
    //               Gallery
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/donation" className="text-white/80 hover:text-white">
    //               Donation
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/contact" className="text-white/80 hover:text-white">
    //               Contact Us
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Initiatives</h3>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link href="/initiatives#health" className="text-white/80 hover:text-white">
    //               Medical Aid
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/initiatives#zakat" className="text-white/80 hover:text-white">
    //               Zakat Distribution
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/initiatives#vivah" className="text-white/80 hover:text-white">
    //               Vivah Sammelan
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/initiatives#education" className="text-white/80 hover:text-white">
    //               Educational Support
    //             </Link>
    //           </li>
    //           <li>
    //             <Link href="/events" className="text-white/80 hover:text-white">
    //               Community Events
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Contact Us</h3>
    //         <ul className="space-y-3">
    //           <li className="flex items-start gap-3">
    //             <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
    //             <span className="text-white/80">
    //               Rangraj Bhavan, 123 Community Street
    //               <br />
    //               Mumbai, Maharashtra 400001
    //             </span>
    //           </li>
    //           <li className="flex items-center gap-3">
    //             <Phone className="w-5 h-5 flex-shrink-0" />
    //             <span className="text-white/80">+91 98765 43210</span>
    //           </li>
    //           <li className="flex items-center gap-3">
    //             <Mail className="w-5 h-5 flex-shrink-0" />
    //             <span className="text-white/80">info@rangrajsamaj.org</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
    //       <p>&copy; {new Date().getFullYear()} Rangraj Samaj. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-[#8B3103] text-white mx-2 sm:mx-4 my-8 sm:my-10 rounded-2xl">
  <div className="container px-4 sm:px-6 py-8 sm:py-12">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
      
      {/* Brand & Social */}
      <div className="text-left text-sm sm:text-lg">
        {/* <h3 className="text-lg font-bold mb-4">Rangraj Samaj</h3> */}
        <Logo width={50} height={50} style="rounded-lg mb-5" alt="Logo" />
        <p className="text-white/80 mb-4">
          Empowering and uniting the Rangraj (Rangrez) Samaj through health, charity, marriage meets, and cultural awareness.
        </p>
        <div className="flex justify-start gap-4">
          <a href="#" className="text-white/80 hover:text-white">
            <Facebook className="w-5 h-5" /><span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="text-white/80 hover:text-white">
            <Instagram className="w-5 h-5" /><span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="text-white/80 hover:text-white">
            <Youtube className="w-5 h-5" /><span className="sr-only">YouTube</span>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="text-left">
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm sm:text-lg">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/initiatives", label: "Our Initiatives" },
            { href: "/events", label: "Events" },
            { href: "/gallery", label: "Gallery" },
            { href: "/donation", label: "Donation" },
            { href: "/contact", label: "Contact Us" },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-white/80 hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Initiatives */}
      <div className="text-left">
        <h3 className="text-lg font-bold mb-4">Initiatives</h3>
        <ul className="space-y-2 text-sm sm:text-lg">
          {[
            { href: "/initiatives#health", label: "Medical Aid" },
            { href: "/initiatives#zakat", label: "Zakat Distribution" },
            { href: "/initiatives#vivah", label: "Vivah Sammelan" },
            { href: "/initiatives#education", label: "Educational Support" },
            { href: "/events", label: "Community Events" },
          ].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-white/80 hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="text-left">
        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
        <ul className="space-y-3 text-sm sm:text-lg">
          <li className="flex flex-col sm:flex-row sm:items-start gap-3">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span className="text-white/80 leading-snug">
              Rangraj Bhavan, 123 Community Street
              Mumbai, Maharashtra 400001
            </span>
          </li>
          <li className="flex items-center justify-start sm:justify-start gap-3">
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span className="text-white/80">+91 98765 43210</span>
          </li>
          <li className="flex items-center justify-start sm:justify-start gap-3">
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span className="text-white/80">info@rangrajsamaj.org</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
      <p>&copy; {new Date().getFullYear()} Rangraj Samaj. All rights reserved.</p>
    </div>
  </div>
</footer>

  )
}

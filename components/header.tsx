"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Header");

  const navigation = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("initiatives"), href: "/initiatives" },
    { name: t("events"), href: "/events" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("donation"), href: "/donation" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 flex justify-center items-center z-50 w-full h-28 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            {/* <span className="text-2xl font-bold text-[#B7410E]">Rangraj Samaj</span> */}
            <Logo
              width={100}
              height={100}
              style="rounded-lg border-1 shadow-md"
              alt="Logo"
            />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#B7410E]",
                pathname === item.href ? "text-[#B7410E]" : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:flex bg-[#B7410E] hover:bg-[#8B3103] text-white"
          >
            <Link href="/donation">
              {/* Donate Now */}
              {t("button-Donate")}
            </Link>
          </Button>
          <LanguageSwitcher />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="px-7">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {/* <span className="text-lg font-bold">Rangraj Samaj</span> */}
                  <Logo
                    width={50}
                    height={50}
                    style="rounded-lg mb-5 border-2 shadow-md"
                    alt="Logo"
                  />
                </Link>
              </div>
              <nav className="flex flex-col gap-4 px-7 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-[#B7410E]",
                      pathname === item.href
                        ? "text-[#B7410E]"
                        : "text-foreground/60"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="mt-4 bg-[#B7410E] hover:bg-[#8B3103] text-white">
                  <Link href="/donation" onClick={() => setIsOpen(false)}>
                    Donate Now
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

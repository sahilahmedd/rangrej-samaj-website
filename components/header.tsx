"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { useTranslations, useLocale } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Header");

  const locale = useLocale();

  const navigation = [
    { name: t("home"), href: `/${locale}` },
    { name: t("about"), href: `/${locale}/about` },
    { name: t("initiatives"), href: `/${locale}/initiatives` },
    { name: t("events"), href: `/${locale}/events` },
    { name: t("gallery"), href: `/${locale}/gallery` },
    { name: t("donation"), href: `/${locale}/donation` },
    { name: t("contact"), href: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 flex justify-center items-center shadow-md z-50 w-full h-28 border-b bg-rangrez-sand/95 backdrop-blur supports-[backdrop-filter]:bg-rangrez-sand/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            {/* <span className="text-2xl font-bold text-[#0C2340]">Rangraj Samaj</span> */}
            <Logo
              width={100}
              height={100}
              style="rounded-lg border-2  border-rangrez-saffron shadow-md"
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
                "text-lg md:text-sm font-medium  text-rangrez-indigo_dark hover:text-rangrez-saffron",
                pathname === item.href
                  ? "text-rangrez-saffron"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:flex  bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white"
          >
            <Link href={`/${locale}/donation`}>
              {/* Donate Now */}
              {t("button-Donate")}
            </Link>
          </Button>
          <LanguageSwitcher />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              asChild
              className="md:hidden border-2 border-rangrez-indigo_dark"
            >
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0 bg-rangrez-sand rounded-lg">
              <div className="">
                <div className="px-7">
                  <Link
                    href={`/${locale}`}
                    className="flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Logo
                      width={50}
                      height={50}
                      style="rounded-lg mb-5 border-2 border-rangrez-saffron shadow-md"
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
                        "text-lg font-medium  text-rangrez-indigo_dark hover:text-rangrez-saffron",
                        pathname === item.href
                          ? "text-rangrez-saffron"
                          : "text-foreground/60"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4 bg-rangrez-saffron hover:bg-rangrez-gold text-white">
                    <Link
                      href={`/${locale}/donation`}
                      onClick={() => setIsOpen(false)}
                    >
                      Donate Now
                    </Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

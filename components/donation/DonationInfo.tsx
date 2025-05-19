import React from "react";
import { Card, CardContent } from "../ui/card";
import { Heart, BookOpen, GraduationCap, Home } from "lucide-react";
import { useTranslations } from "next-intl";

const DonationInfo = () => {
  const t = useTranslations("Donation");
  return (
    <section className="py-16 bg-[#F9F5E7]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-header font-bold text-center mb-12 text-rangrez-indigo_dark">
          {/* Where Your Donations Go */}
          {t("donation-info-title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className=" border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rangrez-saffron/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-[#0C2340]" />
              </div>
              {/* Healthcare */}
              <h3 className="text-xl font-bold">{t("donation-info-title1")}</h3>
              <p className="text-muted-foreground">
                {/* Providing medical assistance, organizing health camps, and
                supporting those with chronic illnesses. */}
                {t("donation-info-description1")}
              </p>
            </CardContent>
          </Card>

          <Card className=" border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rangrez-saffron/10 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-[#0C2340]" />
              </div>
              {/* Education */}
              <h3 className="text-xl font-bold">{t("donation-info-title2")}</h3>
              <p className="text-muted-foreground">
                {/* Scholarships for deserving students, educational materials, and
                skill development programs. */}
                {t("donation-info-description2")}
              </p>
            </CardContent>
          </Card>

          <Card className=" border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rangrez-saffron/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-[#0C2340]" />
              </div>
              {/* Marriage Aid */}
              <h3 className="text-xl font-bold">{t("donation-info-title3")}</h3>
              <p className="text-muted-foreground">
                {/* Financial assistance for marriages of underprivileged community
                members. */}
                {t("donation-info-description3")}
              </p>
            </CardContent>
          </Card>

          <Card className=" border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rangrez-saffron/10 flex items-center justify-center">
                <Home className="w-8 h-8 text-[#0C2340]" />
              </div>
              {/* Family Support */}
              <h3 className="text-xl font-bold">{t("donation-info-title4")}</h3>
              <p className="text-muted-foreground">
                {/* Helping families in financial distress with basic necessities
                and emergency assistance. */}
                {t("donation-info-description4")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationInfo;

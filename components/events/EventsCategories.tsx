import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Users,
  Heart,
  Music,
  Landmark,
} from "lucide-react";
import { useTranslations } from "next-intl";

const EventsCategories = () => {
  const t = useTranslations("Events");
  return (
    <section className="py-16 bg-[#F9F5E7]">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-header font-bold text-center mb-12 text-rangrez-indigo_dark">
        {/* Event Categories */}
        {t("events-categories-title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="#nikah">
          <Card className="border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all h-full">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rangrez-saffron/40 flex items-center justify-center">
                <Users className="w-8 h-8 text-[#0C2340]" />
              </div>
              <h3 className="text-xl font-bold">
                {/* Nikah Sammelan */}
                {t("events-categories-nikah")}
              </h3>
              <p className="text-muted-foreground">
                {/* Marriage meets to help community members find suitable life
                partners. */}
                {t("events-categories-nikah-description")}
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="#health">
          <Card className="border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all h-full">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rangrez-saffron/40 flex items-center justify-center">
                <Heart className="w-8 h-8 text-rangrez-border-rangrez-indigo_dark" />
              </div>
                <h3 className="text-xl font-bold">
                {/* Health Camps */}
                {t("events-categories-health")}
              </h3>
              <p className="text-muted-foreground">
                {/* Free medical check-ups and health awareness programs for the
                community. */}
                {t("events-categories-health-description")}
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="#cultural">
          <Card className="border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all h-full">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rangrez-saffron/40 flex items-center justify-center">
                <Music className="w-8 h-8 text-[#0C2340]" />
              </div>
              <h3 className="text-xl font-bold">
                {/* Cultural Events */}
                {t("events-categories-cultural")}
              </h3>
              <p className="text-muted-foreground">
                {/* Celebrating our rich cultural heritage through music, dance,
                and art. */}
                {t("events-categories-cultural-description")}
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="#charity">
          <Card className="border-2 bg-rangrez-sand_lite border-rangrez-sand_hover/20 hover:border-rangrez-sand_hover transition-all h-full">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-rangrez-saffron/40 flex items-center justify-center">
                <Landmark className="w-8 h-8 text-[#0C2340]" />
              </div>
              <h3 className="text-xl font-bold">
                {/* Charity Drives */}
                {t("events-categories-education")}
              </h3>
              <p className="text-muted-foreground">
                {/* Zakat distribution and other charitable activities to help
                those in need. */}
                {t("events-categories-education-description")}
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  </section>
  )
}

export default EventsCategories

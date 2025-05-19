import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Heart, Users, GraduationCap } from 'lucide-react'
import { Button } from '../ui/button'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

const InfoCard = () => {
  const t = useTranslations("Initiatives");
  const locale = useLocale()



  return (
    <section className="py-16 bg-[#0C2340]">
    <div className="container px-4 md:px-6 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          {/* Get Involved */}
          {t("info-card-title")}
          </h2>
        <p className="text-lg mb-8">
          {/*   There are many ways you can contribute to our initiatives and make
          a difference in the community. Whether through donations,
          volunteering, or spreading awareness, your support matters.
        */}
        {t("info-card-description")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-transparent duration-300 ease-in hover:border-white">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Heart className="w-8 text-white h-8" />
              </div>
              <h3 className="text-xl text-white font-bold">
                {/* Donate */}
                {t("info-card-title1")}
              </h3>
              <p className="text-white/80">
                {/* Your financial contributions help us sustain and expand our
                initiatives to reach more people in need. */}
                {t("info-card-description1")}
              </p>
              <Button
                variant="outline"
                className="border-white text-white bg-transparent duration-300 ease-in hover:bg-white hover:text-[#0C2340]"
              >
                {/* Make a Donation */}
                <Link href={`/${locale}/donation`}>{t("info-card-button1")}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-transparent hover:border-white transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <Users className="w-8 text-white h-8" />
              </div>
              <h3 className="text-xl text-white font-bold">
                {/* Volunteer */}
                {t("info-card-title2")}
              </h3>
              <p className="text-white/80">
                {/* Contribute your time and skills to help organize and run our
                various community programs and events. */}
                {t("info-card-description2")}
              </p>
              <Button
                variant="outline"
                className="border-white text-white bg-transparent duration-300 ease-in hover:bg-white hover:text-[#0C2340]"
              >
                {/* Join as Volunteer */}
                <Link href={`/${locale}/contact`}>{t("info-card-button2")}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-transparent hover:border-white transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                <GraduationCap className="w-8 text-white h-8" />
              </div>
              <h3 className="text-xl text-white font-bold">
                {/* Spread Awareness */}
                {t("info-card-title3")}
              </h3>
              <p className="text-white/80">
                {/* Help us reach more people by sharing information about our
                initiatives with your network. */}
                {t("info-card-description3")}
              </p>
              <Button
                variant="outline"
                className="border-white text-white bg-transparent duration-300 ease-in hover:bg-white hover:text-[#0C2340]"
              >
                {/* Share Our Mission */}
                {t("info-card-button3")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoCard

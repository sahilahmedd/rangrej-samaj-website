import React from 'react'
<<<<<<< HEAD

const AboutImpact = () => {
=======
import { useTranslations } from 'next-intl';
const AboutImpact = () => {
  const t  = useTranslations("About");
>>>>>>> lang
  return (
    <section className="py-16 bg-[#F9F5E7]">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
<<<<<<< HEAD
        Our Impact
=======
        {/* Our Impact */}
        {t("about-impact-title")}
>>>>>>> lang
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">
            5,000+
          </div>
<<<<<<< HEAD
          <p className="text-lg">Community Members Supported</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">200+</div>
          <p className="text-lg">Successful Marriages Arranged</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">50+</div>
          <p className="text-lg">Health Camps Conducted</p>
=======
          <p className="text-lg">
            {/* Community Members Supported */}
            {t("about-impact-members-supported")}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">200+</div>
          <p className="text-lg">
            {/* Successful Marriages Arranged */}
            {t("about-impact-marriages-arranged")}
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">50+</div>
          <p className="text-lg">
            {/* Health Camps Conducted */}
            {t("about-impact-health-camps")}
          </p>
>>>>>>> lang
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">
            ₹1Cr+
          </div>
<<<<<<< HEAD
          <p className="text-lg">Zakat & Donations Distributed</p>
=======
          <p className="text-lg">
            {/* Zakat & Donations Distributed */}
            {t("about-impact-zakat-distributed")}
          </p>
>>>>>>> lang
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutImpact

import React from 'react'
import CardSlider from './CardSlider'
import { useTranslations } from 'next-intl'
const Quicklinks = () => {
  const t = useTranslations('Homepage')
  return (
    <section className="py-16  ">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-header font-bold text-center mb-12 text-rangrez-indigo_dark">
        {/* Our Initiatives */}
        {t('initiatives-h2')}
      </h2>
      <CardSlider />
    </div>
  </section>
  )
}

export default Quicklinks

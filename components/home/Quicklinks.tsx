import React from 'react'
import CardSlider from './CardSlider'
<<<<<<< HEAD

const Quicklinks = () => {
=======
import { useTranslations } from 'next-intl'
const Quicklinks = () => {
  const t = useTranslations('Homepage')
>>>>>>> lang
  return (
    <section className="py-16 bg-white">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
<<<<<<< HEAD
        Our Initiatives
=======
        {/* Our Initiatives */}
        {t('initiatives-h2')}
>>>>>>> lang
      </h2>
      <CardSlider />
    </div>
  </section>
  )
}

export default Quicklinks

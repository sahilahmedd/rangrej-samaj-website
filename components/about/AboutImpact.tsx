import React from 'react'

const AboutImpact = () => {
  return (
    <section className="py-16 bg-[#F9F5E7]">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">
        Our Impact
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">
            5,000+
          </div>
          <p className="text-lg">Community Members Supported</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">200+</div>
          <p className="text-lg">Successful Marriages Arranged</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">50+</div>
          <p className="text-lg">Health Camps Conducted</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <div className="text-4xl font-bold text-[#B7410E] mb-2">
            ₹1Cr+
          </div>
          <p className="text-lg">Zakat & Donations Distributed</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutImpact

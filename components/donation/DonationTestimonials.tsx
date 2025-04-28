import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'

const DonationTestimonials = () => {
  return (
    <section className="py-16 bg-[#F9F5E7]">
    <div className="container px-4 md:px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#8B3103]">Impact Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-2 border-[#F2C94C]/20">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B7410E]/10 overflow-hidden relative">
                  <Image
                    src={`/placeholder.svg?height=100&width=100&text=P${i}`}
                    alt="Beneficiary"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Beneficiary {i}</h4>
                  <p className="text-sm text-muted-foreground">Healthcare Recipient</p>
                </div>
              </div>
              <p className="italic">
                "The medical assistance provided by Rangraj Samaj was life-saving for my family. My child needed
                urgent surgery, and we couldn't afford it. Thanks to the generous donors, my child received the
                treatment and is now healthy and thriving."
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default DonationTestimonials

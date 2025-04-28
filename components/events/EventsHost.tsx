import React from 'react'
import { Button } from '../ui/button'

const EventsHost = () => {
  return (
    <section className="py-16 bg-white">
    <div className="container px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#8B3103]">
          Host an Event
        </h2>
        <p className="text-lg mb-8">
          Are you interested in hosting a community event? We welcome
          initiatives from community members and can provide support in
          organizing and promoting your event.
        </p>
        <Button className="bg-[#B7410E] hover:bg-[#8B3103] text-white">
          Contact Us to Host an Event
        </Button>
      </div>
    </div>
  </section>
  )
}

export default EventsHost

import React from 'react'
import { Button } from '../ui/button'
import { useTranslations } from 'next-intl';
import LocaleLink from '../LocaleLink';

const EventsHost = () => {
  const t = useTranslations("Events");
  return (
    <section className="py-16">
    <div className="container px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-header font-bold mb-6 text-rangrez-indigo_dark">
          {/* Host an Event */}
          {t("events-host-title")}
        </h2>
        <p className="text-lg mb-8">
          {/* Are you interested in hosting a community event? We welcome
          initiatives from community members and can provide support in
          organizing and promoting your event. */}
          {t("events-host-description")}
        </p>
        <Button className="bg-rangrez-indigo hover:bg-rangrez-indigo_dark text-white">
          {/* Contact Us to Host an Event */}
          <LocaleLink lable={`${t("events-host-button")}`} path="contact" />
        </Button>
      </div>
    </div>
  </section>
  )
}

export default EventsHost

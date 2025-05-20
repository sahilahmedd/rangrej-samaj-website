'use client';

import { useTranslations } from 'next-intl';

export default function TermsAndConditions() {
  const t = useTranslations('terms');

  const renderList = (baseKey: string) => {
    const items: string[] = Object.keys(t.raw(baseKey) ?? {}).map((_, i) =>
      t(`${baseKey}.${i}`)
    );

    return (
      <ul className="list-disc pl-5 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      {/* <p className="text-sm text-gray-500 mb-8">{t('effective-date')}</p> */}

      {/* Section 1 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('acceptance-title')}</h2>
        <p>{t('acceptance-description')}</p>
      </section>

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('use-title')}</h2>
        <p>{t('use-description')}</p>
        {renderList('use-list')}
      </section>

      {/* Section 3 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('user-responsibilities-title')}</h2>
        <p>{t('user-responsibilities-description')}</p>
        {renderList('user-responsibilities-list')}
      </section>

      {/* Section 4 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('intellectual-property-title')}</h2>
        <p>{t('intellectual-property-description')}</p>
      </section>

      {/* Section 5 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('termination-title')}</h2>
        <p>{t('termination-description')}</p>
      </section>

      {/* Section 6 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('disclaimer-title')}</h2>
        <p>{t('disclaimer-description')}</p>
      </section>

      {/* Section 7 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('changes-title')}</h2>
        <p>{t('changes-description')}</p>
      </section>

      {/* Section 8 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('contact-title')}</h2>
        <p className="mb-2">{t('contact-description')}</p>
        <ul className="pl-4 space-y-1 text-sm text-gray-700">
          <li>{t('contact-details.name')}</li>
          <li>{t('contact-details.email')}</li>
          <li>{t('contact-details.phone')}</li>
          <li>{t('contact-details.website')}</li>
        </ul>
      </section>
    </div>
  );
}

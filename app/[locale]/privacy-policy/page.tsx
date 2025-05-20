'use client';

import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('privacy-policy');

  const renderList = (baseKey: string) => {
    // Get keys of the object like info-we-collect-list.0, 1, 2
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
        <h2 className="text-xl font-semibold mb-2">{t('who-we-are-title')}</h2>
        <p>{t('who-we-are-description')}</p>
      </section>

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('info-we-collect-title')}</h2>
        <p className="mb-2">{t('info-we-collect-description')}</p>
        {renderList('info-we-collect-list')}
      </section>

      {/* Section 3 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('how-we-use-title')}</h2>
        <p className="mb-2">{t('how-we-use-description')}</p>
        {renderList('how-we-use-list')}
        <p className="mt-2 italic text-sm text-gray-600">{t('how-we-use-note')}</p>
      </section>

      {/* Section 4 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('cookies-title')}</h2>
        <p>{t('cookies-description')}</p>
      </section>

      {/* Section 5 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('data-security-title')}</h2>
        <p>{t('data-security-description')}</p>
      </section>

      {/* Section 6 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('third-party-title')}</h2>
        <p>{t('third-party-description')}</p>
      </section>

      {/* Section 7 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('your-rights-title')}</h2>
        <p className="mb-2">{t('your-rights-description')}</p>
        {renderList('your-rights-list')}
        <p className="mt-2 italic text-sm text-gray-600">{t('your-rights-note')}</p>
      </section>

      {/* Section 8 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('children-title')}</h2>
        <p>{t('children-description')}</p>
      </section>

      {/* Section 9 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t('updates-title')}</h2>
        <p>{t('updates-description')}</p>
      </section>

      {/* Section 10 */}
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

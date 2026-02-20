import { useTranslations } from 'next-intl';
export default function Home() {
   const t = useTranslations('common');
  return (
    <div>
      <h1>{t('brand')}</h1>
    </div>
  );
}

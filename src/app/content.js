import React from 'react';
import { useTranslation } from 'react-i18next';

const Content = () => {
  const { t } = useTranslation();
  console.log('content loaded dynamically', t('greeting'), t('farewell'))
  return (
    <div>
      {t('greeting')}
      {t('farewell')}
    </div>
  )
};

export default Content;
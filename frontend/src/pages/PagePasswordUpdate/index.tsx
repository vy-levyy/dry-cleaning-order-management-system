import React from 'react';
import AppForm from '../../components/forms/AppForm';
import PageWrapper from '../PageWrapper';

const PagePasswordUpdate: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <AppForm appType="passwordUpdate" />
    </PageWrapper>
  );
}

export default PagePasswordUpdate;

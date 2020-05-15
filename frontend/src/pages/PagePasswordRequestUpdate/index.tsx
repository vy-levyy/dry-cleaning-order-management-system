import React from 'react';
import AppForm from '../../components/forms/AppForm';
import PageWrapper from '../PageWrapper';

const PagePasswordRequestUpdate: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <AppForm appType="passwordRequestUpdate" />
    </PageWrapper>
  );
}

export default PagePasswordRequestUpdate;

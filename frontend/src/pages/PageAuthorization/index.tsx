import React from 'react';
import AppForm from '../../components/forms/AppForm';
import PageWrapper from '../PageWrapper';

const PageAuthorization: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <AppForm appType="authorization" />
    </PageWrapper>
  );
}

export default PageAuthorization;

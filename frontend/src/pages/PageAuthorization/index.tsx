import React from 'react';
import FormAuthorization from '../../components/forms/FormAuthorization';
import PageWrapper from '../PageWrapper';
import Menu from '../../components/Menu';

const PageAuthorization: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <Menu />
      <FormAuthorization />
    </PageWrapper>
  );
}

export default PageAuthorization;

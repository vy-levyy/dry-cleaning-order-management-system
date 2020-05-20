import React from 'react';
import FormPasswordUpdate from '../../components/forms/FormPasswordUpdate';
import PageWrapper from '../PageWrapper';
import Menu from '../../components/Menu';

const PagePasswordUpdate: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <Menu />
      <FormPasswordUpdate />
    </PageWrapper>
  );
}

export default PagePasswordUpdate;

import React from 'react';
import FormRegistration from '../../components/forms/FormRegistration';
import PageWrapper from '../PageWrapper';
import Menu from '../../components/Menu';

const PageRegistration: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <Menu />
      <FormRegistration />
    </PageWrapper>
  );
}

export default PageRegistration;

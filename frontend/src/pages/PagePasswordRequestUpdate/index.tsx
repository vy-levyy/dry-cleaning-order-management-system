import React from 'react';
import FormPasswordRequestUpdate from '../../components/forms/FormPasswordRequestUpdate';
import PageWrapper from '../PageWrapper';
import Menu from '../../components/Menu';

const PagePasswordRequestUpdate: React.FunctionComponent = () => {
  return (
    <PageWrapper>
      <Menu />
      <FormPasswordRequestUpdate />
    </PageWrapper>
  );
}

export default PagePasswordRequestUpdate;

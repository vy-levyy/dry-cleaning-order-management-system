import React from 'react';
import Form from '../../components/forms/Form';

const PageRegistration: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <Form type="registration" />
        </div>
      </div>
    </div>
  );
}

export default PageRegistration;

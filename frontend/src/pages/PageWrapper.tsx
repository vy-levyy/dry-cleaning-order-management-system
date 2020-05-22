import React from 'react';
import Header from '../components/Header';

const PageWrapper: React.FunctionComponent = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div className="row justify-content-center">
        { children }
      </div>
    </div>
  );
}

export default PageWrapper;

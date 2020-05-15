import React from 'react';

const PageWrapper: React.FunctionComponent = ({ children }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          { children }
        </div>
      </div>
    </div>
  );
}

export default PageWrapper;

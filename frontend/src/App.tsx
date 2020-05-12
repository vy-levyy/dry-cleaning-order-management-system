import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import PageRegistration from './pages/PageRegistration';

const App: React.FunctionComponent = () => {
  return (
    <Provider store={ store }>
      <PageRegistration />
    </Provider>
  );
}

export default App;

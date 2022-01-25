import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { persistor, store } from './store/store';
import { theme } from './theme';
import GlobalStyles from './globalStyles';
import { Loader } from './components/Loader';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
        <GlobalStyles />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

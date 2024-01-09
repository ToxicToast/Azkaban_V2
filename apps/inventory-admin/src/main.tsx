import { StrictMode, Suspense } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import { ThemeProvider, oidcConfig } from '@azkaban/ui-components';
import App from './app/app';
import { Provider } from 'react-redux';
import { store } from './app/core/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider {...oidcConfig}>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);

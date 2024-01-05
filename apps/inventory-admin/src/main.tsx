import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { AuthProvider } from 'react-oidc-context';
import { ThemeProvider, oidcConfig } from '@azkaban/ui-components';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider {...oidcConfig}>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';
import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const oidcConfig = {
  authority: 'http://localhost:61937/application/o/azkaban/',
  client_id: 'aybCVHZAIn6jxiC8JOLCB2OZCTLr6XqtGsE2diKU',
  client_secret:
    'Fa5zmZqtVt7cho8T286uVMRDpsezmlfEayKTdJF5h0Ob5PxVNvXonnFKaBebzMqY8Y8z216GM7Xr2ErnxFXfZLnEZGJY7h7Eog49JVV8ayAuhzxgvcVnoqLmXGVyiYxF',
  redirect_uri: 'http://localhost:4200/',
  scope: 'openid profile email',
} as AuthProviderProps;

root.render(
  <StrictMode>
    <AuthProvider {...oidcConfig}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

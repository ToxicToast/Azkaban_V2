import { Route, Routes, Link } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import { useCallback } from 'react';

export function App() {
  const {
    activeNavigator,
    isLoading,
    isAuthenticated,
    user,
    error,
    signoutPopup,
    signinPopup,
  } = useAuth();

  const onSignin = useCallback(() => {
    signinPopup();
  }, [signinPopup]);

  const onSignOut = useCallback(() => {
    signoutPopup();
  }, [signoutPopup]);

  return (
    <pre>
      <b>activeNavigator: </b> {JSON.stringify(activeNavigator, null, 4)}
      <hr />
      <b>isLoading: </b> {JSON.stringify(isLoading, null, 4)}
      <hr />
      <b>isAuthenticated: </b> {JSON.stringify(isAuthenticated, null, 4)}
      <hr />
      <b>user: </b> {JSON.stringify(user, null, 4)}
      <hr />
      <b>error: </b> {JSON.stringify(error, null, 4)}
      <hr />
      <button onClick={() => onSignin()}>Signin</button> <br />
      <button onClick={() => onSignOut()}>Signout</button>
    </pre>
  );
}

export default App;

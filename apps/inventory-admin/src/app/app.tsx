import { Routes } from './routes';
import { Optional } from '@azkaban/shared';
import { User } from 'oidc-client-ts';

interface Props {
  isAuthenticated: boolean;
  user?: Optional<User>;
}

export function App(props: Props) {
  return <Routes isAuthenticated={props.isAuthenticated} user={props.user} />;
}

export default App;

import { Nullable } from '@azkaban/shared';
import { AvatarIcon, PinRightIcon } from '@radix-ui/react-icons';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '../shadn';
import { ThemeSwitcher } from './ThemeSwitcher';

interface Props {
  avatarUrl: Nullable<string>;
  givenName: Nullable<string>;
  username: Nullable<string>;
  initials: Nullable<string>;
  signOut: () => void;
}

export function LoggedUser(props: Props) {
  return (
    <div className="flex items-center gap-x-2">
      <Dialog>
        <DialogTrigger asChild>
          <Avatar>
            <AvatarImage
              src={props.avatarUrl ?? undefined}
              alt={props.username ?? undefined}
            />
            <AvatarFallback>{props.initials}</AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            {props.givenName} - {props.username}
          </DialogHeader>
          <div className="flex items-center space-x-4">
            <Button>
              <AvatarIcon />
            </Button>
            <div>Manage Account</div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <div>Change Theme</div>
          </div>
          <hr />
          <div className="flex items-center space-x-4">
            <Button onClick={() => props.signOut()}>
              <PinRightIcon />
            </Button>
            <div>Sign Out</div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

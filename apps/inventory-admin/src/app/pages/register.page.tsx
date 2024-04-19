import { Button, Input, Label } from '@azkaban/ui-components';
import { Link } from 'react-router-dom';
import { useAuthState } from '@azkaban/inventory-redux';
import { useState } from 'react';

export function RegisterPage() {
  const { registerUser } = useAuthState();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">
        Register Account ✨
      </h1>
      <form action="#" className="mt-6 grid grid-cols-6 gap-4">
        <div className="col-span-6">
          <Label htmlFor="Email">Email</Label>
          <Input
            type="email"
            id="Email"
            name="email"
            defaultValue={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="col-span-6">
          <Label htmlFor="Password">Password</Label>
          <Input
            type="password"
            id="Password"
            name="password"
            defaultValue={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
      </form>
      <Button
        className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600"
        onClick={() => registerUser(email, password)}
      >
        Register Account
      </Button>
      <div className="border-t border-slate-200 dark:border-slate-700 pt-5 mt-6">
        <div className="flex flex-row gap-4 w-full pb-4">
          <div className="text-sm w-1/2">Already have an Account?</div>
          <div className="text-sm w-1/2 text-right">
            <Link to="/">Login Here</Link>
          </div>
        </div>
      </div>
    </>
  );
}

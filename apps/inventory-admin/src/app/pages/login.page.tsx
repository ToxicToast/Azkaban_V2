import { Button, useAzkabanAuth } from '@azkaban/ui-components';

export function LoginPage() {
  const { signIn } = useAzkabanAuth();

  return (
    <>
      <h1 className="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">
        Welcome Back ✨
      </h1>
      <Button
        className="w-full bg-indigo-500 hover:bg-indigo-600"
        onClick={() => signIn()}
      >
        Sign In with Authentik
      </Button>
      <div className="border-t border-slate-200 dark:border-slate-700 pt-5 mt-6">
        <div className="flex flex-row gap-4 w-full pb-4">
          <div className="text-sm w-1/2">Username:</div>
          <div className="text-sm w-1/2 text-right">Guest</div>
        </div>

        <div className="flex flex-row gap-4 w-full pb-4">
          <div className="text-sm w-1/2">Password:</div>
          <div className="text-sm w-1/2 text-right">Guest</div>
        </div>
      </div>
    </>
  );
}

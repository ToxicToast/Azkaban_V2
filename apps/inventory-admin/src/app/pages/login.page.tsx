import { Button, useAzkabanAuth } from '@azkaban/ui-components';
import { TwitchIcon } from 'lucide-react';

export function LoginPage() {
  const { signIn } = useAzkabanAuth();

  return (
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <Button
              className="mb-3 w-full x-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal"
              onClick={() => signIn()}
            >
              Sign in with Azkaban
            </Button>

            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                OR
              </p>
            </div>

            <Button
              className="mb-3 w-full x-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal"
              style={{ backgroundColor: '#9146FF' }}
            >
              <TwitchIcon className="mr-2 h-3.5 w-3.5" />
              Continue with Twitch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

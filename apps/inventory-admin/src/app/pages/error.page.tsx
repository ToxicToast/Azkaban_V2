import { Button } from '@azkaban/ui-components';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <div className="max-w-2xl m-auto mt-16">
        <div className="text-center px-4">
          <div className="inline-flex mb-8">
            <img
              className="dark:hidden"
              src="/assets/404-illustration.svg"
              width="176"
              height="176"
              alt="404 illustration"
            />
            <img
              className="hidden dark:block"
              src="/assets/404-illustration-dark.svg"
              width="176"
              height="176"
              alt="404 illustration dark"
            />
          </div>
          <div className="mb-6">
            Hmm...this page doesn't exist. Try searching for something else!
          </div>
          <Button
            className="bg-indigo-500 hover:bg-indigo-600 text-white"
            onClick={() => {
              navigate('/');
            }}
          >
            Back To Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

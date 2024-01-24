import { Alert, AlertDescription, AlertTitle } from '@azkaban/ui-components';

export function WorkInProgress() {
  return (
    <Alert variant="warning">
      <AlertTitle>Work in Progress</AlertTitle>
      <AlertDescription>This Page is Still a Work in Progress</AlertDescription>
    </Alert>
  );
}

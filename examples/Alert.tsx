import { Alert, AlertIndicator } from "../src";
import { AlertDescription, AlertTitle } from "../src/components/alert";
import { IAlert } from "../src/components/alert/interface";

const AlertExample = (props: IAlert) => {
  return (
    <Alert {...props}>
      <AlertIndicator />
      <AlertTitle>Data uploaded to the server.</AlertTitle>
      <AlertDescription>
        KingUI is going live on August 30th. Get ready!
      </AlertDescription>
    </Alert>
  );
};

export { AlertExample };

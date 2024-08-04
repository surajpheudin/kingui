import { Button } from "./components";
import { Badge } from "./components/badge";

const App = () => {
  return (
    <div className="grid place-items-center gap-4 p-12">
      <Badge>Default</Badge>
      <Button>Button</Button>
    </div>
  );
};

export default App;

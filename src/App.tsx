import Badge from "./components/badge";
import defaultTheme from "tailwindcss/defaultTheme";

const App = () => {
  console.log("defaultTheme", defaultTheme);

  return (
    <div className="grid place-items-center gap-4 p-12">
      <Badge>Default</Badge>
    </div>
  );
};

export default App;

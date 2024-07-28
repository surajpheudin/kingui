import { ComponentProps, useState } from "react";
interface IButton extends ComponentProps<"button"> {
  isLoding?: boolean;
}

const Button = (props: IButton) => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)} {...props}>
      Hello World {count}
    </button>
  );
};

export { Button };

import { writeFileSync } from "fs";
import colors from "tailwindcss/colors";

const shades = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
];

async function main() {
  const mainColors = Object.keys(colors).filter(
    (item) =>
      !["inherit", "current", "transparent", "black", "white"].includes(item),
  );

  const obj = mainColors.reduce((acc, curr) => {
    acc[curr] = calc(curr);
    return acc;
  }, {} as VariantColor);

  const content = `export const COLORS = ${JSON.stringify(obj, null, 2)}`;
  writeFileSync(`./src/config/colors.ts`, content);
}

function calc(curr: string) {
  return shades.reduce((a, c) => {
    a[c] = {
      text: `text-${curr}-${c}`,
      bgColor: `bg-${curr}-${c}`,
      borderColor: `border-${curr}-${c}`,
      _hover: {
        text: `hover:text-${curr}-${c}`,
        bgColor: `hover:bg-${curr}-${c}`,
        borderColor: `border-${curr}-${c}`,
      },
      _focus: {
        borderColor: `focus:border-${curr}-${c}`,
      },
      _focusWithin: {
        borderColor: `focus-within:border-${curr}-${c}`,
      },
    };
    return a;
  }, {});
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

type VariantColor = {
  [x: string]: {
    [x: string]: {
      text: `text-${string}-${string}`;
      bgColor: `bg-${string}-${string}`;
      borderColor: `border-${string}-${string}`;
      _hover: {
        text: `text-${string}-${string}`;
        bgColor: `bg-${string}-${string}`;
        borderColor: `border-${string}-${string}`;
      };
      _focus: {
        borderColor: `focus:border-${string}-${string}`;
      };
      _focusWithin: {
        borderColor: `focus-within:border-${string}-${string}`;
      };
    };
  };
};

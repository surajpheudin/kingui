import { writeFileSync } from "fs";
import colors from "tailwindcss/colors";

async function main() {
  const mainColors = Object.keys(colors).filter(
    (item) =>
      !["inherit", "current", "transparent", "black", "white"].includes(item),
  );

  const obj = mainColors.reduce(
    (acc, curr) => {
      acc[curr] = {
        outline: {
          color: `text-${curr}-500`,
          borderColor: `border-${curr}-500`,
        },
        solid: {
          bgColor: `bg-${curr}-700`,
          color: `text-white`,
        },
        subtle: {
          bgColor: `bg-${curr}-200`,
          color: `text-${curr}-800`,
        },
      };
      return acc;
    },
    {} as Record<string, VariantColor>,
  );

  const content = `export const VARIANT_COLORS = ${JSON.stringify(obj, null, 2)}`;

  writeFileSync(`./src/config/variantColors.ts`, content);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

type VariantColor = {
  outline: {
    color: `text-${string}-500`;
    borderColor: `border-${string}-500`;
  };
  solid: {
    bgColor: `bg-${string}-700`;
    color: `text-white`;
  };
  subtle: {
    bgColor: `bg-${string}-200`;
    color: `text-${string}-800`;
  };
};

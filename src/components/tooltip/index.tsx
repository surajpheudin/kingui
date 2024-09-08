import { twMerge } from "tailwind-merge";
import { ITooltip, TooltipPlacement } from "./interface";
import { tw } from "../../utils/tailwind";

const Tooltip = ({ children, label, className, placement }: ITooltip) => {
  const classes = twMerge(tw`group relative`, className);

  const childClasses = twMerge(
    tw`absolute hidden bg-gray-700 px-2 py-1 text-white group-hover:block`,
    getPlacementCss(placement),
  );
  return (
    <div className={classes}>
      {children}
      <div className={childClasses}>{label}</div>
    </div>
  );
};

export { Tooltip };

const getPlacementCss = (placement: TooltipPlacement = "top") => {
  switch (placement) {
    case "right":
      return "top-0 -translate-y-[50%] -transalte-x-[50%] left-[100%]";

    case "bottom":
      return "bottom-0 translate-y-full";

    case "left":
      return "top-0 -translate-y-[50%] left-0 -translate-x-full";

    case "top":
      return "top-0 -translate-y-full";

    default: {
      const _exhaustive: never = placement;
      return _exhaustive;
    }
  }
};

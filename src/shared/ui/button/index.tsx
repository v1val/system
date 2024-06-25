import { Icons } from "shared/ui";

interface ButtonProps {
  text: string;
  size: "micro" | "small" | "default" | "large";
  variant: "default" | "transparent";
  icon?: boolean;
}

export const Button = (props: ButtonProps) => {
  const sizeStyle =
    props.size == "micro"
      ? "w-[204px] h-6 rounded-8 font-semibold text-15 gap-3"
      : props.size === "small"
        ? "w-[390px] h-[44px] text-14 font-[550] rounded-[24px] py-[12px] px-[16px] gap-2"
        : props.size === "large"
          ? "w-[253px] h-[54px] text-15 rounded-[32px] font-semibold py-[15px] px-[32px] gap-3"
          : "w-[272px] h-[54px] text-15 rounded-[32px] font-semibold py-[15px] px-[32px] gap-3";
  const variantStyles =
    props.variant == "transparent" ? "text-green" : "text-white bg-green";
  const sizeIconStyles =
    props.variant == "transparent" ? "w-[24px] h-[24px]" : "w-[20px] h-[20px]";

  return (
    <div
      className={`${sizeStyle} ${variantStyles} flex items-center justify-center cursor-pointer`}
    >
      <span>{props.text}</span>
      {props.icon && (
        <Icons.chevronRight className={`${sizeIconStyles} ${variantStyles}`} />
      )}
    </div>
  );
};

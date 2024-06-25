import { Icons } from "shared/ui";

interface ButtonProps {
  text: string;
  variant: "small" | "default" | "large";
  icon?: boolean;
}

export const Button = (props: ButtonProps) => {
  const buttonStyle =
    props.variant === "small"
      ? "w-[390px] h-[44px] text-14 font-[550] rounded-[24px] py-[12px] px-[16px] gap-2"
      : props.variant === "large"
        ? "w-[253px] h-[54px] text-15 rounded-[32px] font-semibold py-[15px] px-[32px] gap-3"
        : "w-[272px] h-[54px] text-15 rounded-[32px] font-semibold py-[15px] px-[32px] gap-3";

  return (
    <div
      className={`${buttonStyle} text-white bg-green flex items-center justify-center`}
    >
      <span>{props.text}</span>
      {props.icon && (
        <Icons.chevronRight className="w-[20px] h-[20px] text-white" />
      )}
    </div>
  );
};

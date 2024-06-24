import * as SwitchRadix from "@radix-ui/react-switch";
import React from "react";

interface SwitchProps {
  variant?: "default" | "theme-switcher";
}

export const Switch = (props: SwitchProps) => (
  <SwitchRadix.Root
    id="switch"
    className="w-[44px] h-[24px] bg-grey-250 rounded-full relative"
  >
    <SwitchRadix.Thumb className="block w-[16px] h-[16px] bg-white rounded-full transition-transform duration-100 translate-x-[4px] will-change-transform data-[state=checked]:translate-x-[24px]" />
    {props.variant == "theme-switcher" && (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[4px] top-0 bottom-0 my-auto"
      >
        <path
          d="M12.5 7V4M14 5.5H11M9.50001 1.5V3.5M10.5 2.5H8.50001M12.5438 9.5375C11.5621 9.81278 10.5248 9.8218 9.53854 9.56364C8.55223 9.30548 7.65241 8.78944 6.9315 8.06852C6.21058 7.3476 5.69454 6.44778 5.43638 5.46147C5.17822 4.47517 5.18724 3.43792 5.46251 2.45625C4.49468 2.72563 3.61431 3.24389 2.9091 3.9594C2.2039 4.6749 1.69846 5.56269 1.44313 6.53433C1.18781 7.50597 1.19151 8.52754 1.45387 9.49731C1.71623 10.4671 2.22809 11.3512 2.93847 12.0615C3.64885 12.7719 4.53295 13.2838 5.50271 13.5461C6.47247 13.8085 7.49405 13.8122 8.46569 13.5569C9.43732 13.3016 10.3251 12.7961 11.0406 12.0909C11.7561 11.3857 12.2744 10.5053 12.5438 9.5375Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </SwitchRadix.Root>
);

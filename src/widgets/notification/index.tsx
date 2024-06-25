import Image from "next/image";
import { useState } from "react";
import { Button, Icons } from "shared/ui";

interface NotificationProps {
  title: string;
  description: string;
  background: string;
  to: string;
}
export const Notification = (props: NotificationProps) => {
  const [isShow, setIsShow] = useState<boolean>(true);
  return (
    <div
      className={`relative flex flex-col h-[204px] px-10 py-10 gap-6 ${!isShow && "hidden"}`}
    >
      <div className="flex flex-col gap-3 text-white">
        <span className="text-18 font-semibold">{props.title}</span>
        <span className="max-w-[270px] text-14">{props.description}</span>
      </div>
      <Button
        text={"Пройти тестирование"}
        size={"micro"}
        icon={true}
        variant={"transparent"}
      />
      <Image
        src={props.background as string}
        alt="system"
        width={312}
        height={160}
        className="absolute size-full top-0 left-0 z-[-1]"
      />
      <div
        className="absolute right-2 top-2 bg-white rounded-[8px] w-8 h-8 flex items-center justify-center opacity-70 cursor-pointer hover:opacity-100"
        onClick={() => setIsShow(false)}
      >
        <Icons.x
          className="mr-0.5 mb-0.5"
          viewBox={"0 0 20 20"}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

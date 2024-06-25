import { useUnit } from "effector-react";
import { InformationCard } from "features/information-card";
import { MyLinks } from "features/my-links";
import Image from "next/image";
import { Icons } from "shared/ui";
import { Slider } from "shared/ui/slider";
import { secondaryMenuModal } from "widgets/secondary-menu";

export const SecondaryMenu = () => {
  const [slides, links] = useUnit([
    secondaryMenuModal.$slides,
    secondaryMenuModal.$links,
  ]);
  return (
    <div className="flex flex-col gap-[48px] min-w-[312px] max-w-[312px]">
      <div className="flex gap-2 items-center text-grey-350 cursor-pointer">
        <Icons.setting className="w-[20px] h-[20px] text-grey-350" />
        <span className="text-14 font-[550]">Настроить главную страницу</span>
      </div>
      <Slider
        align={"center"}
        title={"Рассылки"}
        link={{ title: "Все рассылки", to: "" }}
        slidesToScroll={1}
        chevronAlign={"top"}
        slides={slides.map((item, index) => (
          <div
            className="flex flex-col flex-none flex-wrap lg:flex-nowrap w-full bg-white"
            key={index}
          >
            <Image
              src={item.image as string}
              alt="system"
              width={312}
              height={160}
            />
            <div className="flex flex-col border-b-2 border-x-2 rounded-b-[16px] border-grey-250 bg-white pt-4 pb-6 px-[20px] gap-[20px]">
              <span className="font-[550] font-16">{item.title}</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      />
      <MyLinks links={links} />
      <InformationCard
        title={"Обратная связь"}
        description={
          "Поделитесь предложениями, идеями и впечатлениями о Личном кабинете."
        }
        to={"#"}
      />
    </div>
  );
};

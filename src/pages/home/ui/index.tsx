'use client';

import { MenuDesktop } from "widgets/menu-desktop";
import { SecondaryMenu } from "widgets/secondary-menu";
import { Slider } from "shared/ui";
import { Stories } from "widgets/stories";
import story from "shared/static/images/story.png";
import calendar from "shared/static/images/calendar.png";
import { Notification } from "widgets/notification";

export const HomePage = () => {
  const stories = [
    {title: "Опрос “На сколько удобе...", image: story as string},
    {title: "Опрос “На сколько удобе...", image: story as string},
    {title: "Опрос “На сколько удобе...", image: story as string},
    {title: "Опрос “На сколько удобе...", image: story as string},
    {title: "Опрос “На сколько удобе...", image: story as string},
    {title: "Опрос “На сколько удобе...", image: story as string},
    {title: "Опрос “На сколько удобе...", image: story as string},
  ]
  return <>
    <div className="container flex mt-10">
      <MenuDesktop/>
      <div className="max-w-[656px] ml-[58px] mr-[32px]">
        <div className="flex flex-col gap-[48px]">
        <Slider
          align={"start"}
          link={{ title: "Все рассылки", to: "" }}
          slidesToScroll={1}
          chevronAlign={"top"}
          slides={<Stories stories={stories}/>}
        />
        <Notification title={"Ежегодное тестирование"} description={"Пройдите ежегодное тестирование и подтвердите свою квалификацию!"} background={calendar as string} to={""}/>
        </div>
        </div>
      <SecondaryMenu/>
    </div>
  </>
};

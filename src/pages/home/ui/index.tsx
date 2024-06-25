import { MenuDesktop } from "widgets/menu-desktop";
import { SecondaryMenu } from "widgets/secondary-menu";
import { Slider } from "shared/ui";
import { Stories } from "widgets/stories";
import story from "shared/static/images/story.png";

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
        <Slider
          align={"start"}
          link={{ title: "Все рассылки", to: "" }}
          slidesToScroll={1}
          chevronAlign={"center"}
          slides={<Stories stories={stories}/>}/>
      </div>
      <SecondaryMenu/>
    </div>
  </>
};

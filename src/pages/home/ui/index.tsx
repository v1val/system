import { MenuDesktop } from "widgets/menu-desktop";
import { SecondaryMenu } from "widgets/secondary-menu";
import { Slider } from "shared/ui/slider";

export const HomePage = () => {
  return <>
    <div className="container flex mt-10">
      <MenuDesktop/>
      <div className="h-[150px] w-full bg-black ml-[58px] mr-[32px]">
        <Slider align={"center"} slidesToScroll={1} slides={[ {title:"сука", image:""} , {title:"блять", image:""}, {title:"блять", image:""} ]}/>
      </div>
      <SecondaryMenu/>
    </div>
  </>
};

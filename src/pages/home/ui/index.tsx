import { MenuDesktop } from "widgets/menu-desktop";
import { SecondaryMenu } from "widgets/secondary-menu";
import { homeModel } from "pages/home";
import { useGate } from "effector-react";

export const HomePage = () => {
  useGate(homeModel.HomePageGate);
  return <>
    <div className="container flex mt-10">
      <MenuDesktop/>
      <div className="h-[50px] w-full bg-black ml-[58px] mr-[32px]"></div>
      <SecondaryMenu/>
    </div>
  </>
};

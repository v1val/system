import { ProfileMenu } from "features/profile/ui/profile-menu.tsx";
import { Icons, Switch } from "shared/ui";

export const Header = () => {
  return (
    <div className="w-full h-20 border-b border-grey-250 sticky">
      <div className="container h-full flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <span className="text-base text-16">ООО «Название бизнеса»</span>
          <span className="font-normal text-14 text-grey-350">IT партнер</span>
        </div>
        <div className="flex items-center gap-4">
          <Switch variant={"theme-switcher"} />
          <div className="h-10 w-10 flex items-center justify-center cursor-pointer">
            <Icons.notificationIcon />
          </div>
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

import { Icons } from "shared/ui";

export const ProfileMenu = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex justify-center items-center bg-grey-150 h-11 w-11 rounded-full">
        <Icons.profileIcon />
      </div>
      <Icons.chevronDown className="text-grey-450 w-[20px] h-[20px] cursor-pointer" />
    </div>
  );
};

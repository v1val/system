import { useUnit } from "effector-react";
import { Icons } from "shared/ui/icons";
import type { ItemProps } from "widgets/menu-desktop";
import { menuDesktopModel } from "widgets/menu-desktop";

export const MenuDesktop = () => {
  const [menu, opened_items, toggleItem] = useUnit([
    menuDesktopModel.$menuStructure,
    menuDesktopModel.$openedItems,
    menuDesktopModel.toggleItem,
  ]);

  const renderMenuItems = (menu: ItemProps[]) => {
    return menu.map((item, key) => {
      return (
        <>
          <div key={key} className="flex justify-between">
            <span className="text-14">{item.title}</span>
            {item.children ? (
              <Icons.chevronDown
                className="w-[20px] h-[20px] cursor-pointer"
                onClick={() => menuDesktopModel.toggleItem(item.title)}
              />
            ) : null}
          </div>
          {opened_items?.includes(item.title) ? (
            <>{renderMenuItems(item.children || [])}</>
          ) : null}
        </>
      );
    });
  };

  return (
    <div className="min-w-[200px] flex flex-col gap-[24px]">
      {renderMenuItems(menu)}
    </div>
  );
};

import { useUnit } from "effector-react";
import { Icons } from "shared/ui/icons";
import { menuDesktopModel } from "widgets/menu-desktop";

const renderMenuItems = (menuItems) => {
  const { opened_items } = useUnit({
    opened_items: menuDesktopModel.$openedItems,
  });

  return menuItems.map((item) => (
    <>
      <div key={item.id} className="flex justify-between">
        <span className="text-14">{item.title}</span>
        {item.children && (
          <Icons.chevronDown
            className="w-[20px] h-[20px] cursor-pointer"
            onClick={() => menuDesktopModel.toggleItem(item.title)}
          />
        )}
      </div>
      {opened_items.includes(item.title) && (
        <>{renderMenuItems(item.children)}</>
      )}
    </>
  ));
};
export const MenuDesktop = () => {
  const { menu } = useUnit({ menu: menuDesktopModel.$menuStructure });
  return (
    <div className="min-w-[200px] flex flex-col gap-[24px]">
      {renderMenuItems(menu)}
    </div>
  );
};

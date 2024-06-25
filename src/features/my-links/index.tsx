import { Icons, Link } from "shared/ui";
interface Link {
  title: string;
  to: string;
}
interface MyLinksProps {
  links: Link[];
}
export const MyLinks = (props: MyLinksProps) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="flex justify-between">
        <span className="font-18 font-[550]">Мои ссылки</span>
        <div className="flex gap-2 items-center text-grey-350 cursor-pointer">
          <span className="text-14 font-[550]">Настроить</span>
          <Icons.setting className="w-[20px] h-[20px] text-grey-350" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {props.links.map((link, index) => (
          <Link title={link.title} to={""} key={index} />
        ))}
      </div>
    </div>
  );
};

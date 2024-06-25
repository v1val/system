import { Icons } from "shared/ui";
interface LinkProps {
  title: string;
  to: string;
}

export const Link = (props: LinkProps) => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <span className="text-14 font-[550]">{props.title}</span>
      <Icons.arrowUpRight className="w-[20px] h-[20px] text-green" />
    </div>
  );
};

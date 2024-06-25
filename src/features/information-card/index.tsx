import { Button } from "shared/ui";

interface InformationCardProps {
  title?: string;
  description?: string;
  to?: string;
}
export const InformationCard = (props: InformationCardProps) => {
  return (
    <div className="flex flex-col px-[20px] py-[24px] bg-grey-150 rounded-[16px]">
      {props.title && (
        <span className="font-semibold text-18 mb-4">{props.title}</span>
      )}
      {props.description && (
        <span className="text-16 mb-6">{props.description}</span>
      )}
      {props.to && (
        <Button variant={"default"} text={"Написать нам"} icon={false} />
      )}
    </div>
  );
};

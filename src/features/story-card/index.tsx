import Image from "next/image";

interface StoryCardProps {
  title: string;
  image: string;
}
export const StoryCard = (props: StoryCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 min-w-[96px] max-w-[96px] cursor-pointer">
      <Image src={props.image} alt="history" width={96} height={96} />
      <span className="text-12 font-normal text-center">{props.title}</span>
    </div>
  );
};

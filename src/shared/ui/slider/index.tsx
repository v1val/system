import useEmblaCarousel from "embla-carousel-react";
import { ReactNode } from "react";
import { Icons } from "shared/ui/icons";

interface SliderProps {
  title?: string;
  link?: {
    title: string;
    to: string;
  };
  align: "center" | "start";
  slidesToScroll: number;
  slides: ReactNode;
  chevronAlign: "center" | "top";
}
export const Slider = (props: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: props.align,
    skipSnaps: true,
    slidesToScroll: props.slidesToScroll,
    containScroll: false,
  });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const chevronTopStyle =
    props.chevronAlign === "center" ? "top-0 bottom-0 my-auto" : "top-[52px]";

  return (
    <div>
      {props.title && (
        <div className="flex justify-between mb-[24px]">
          <h2 className="font-[550] text-18">{props.title}</h2>
          <div className="flex flex-row gap-2 items-center cursor-pointer">
            <h2 className="font-[550] text-14 text-grey-350">
              {props.link?.title}
            </h2>
            <Icons.chevronRight className="w-[20px] h-[20px] text-grey-350" />
          </div>
        </div>
      )}
      <div className="overflow-hidden size-full relative" ref={emblaRef}>
        <div className="flex gap-[20px]">{props.slides}</div>
        {emblaApi?.canScrollPrev == true && (
          <div
            className={`absolute flex items-center justify-center left-2 ${chevronTopStyle} h-[32px] w-[32px] bg-white opacity-70 rounded-lg  hover:opacity-100`}
            onClick={() => scrollPrev()}
          >
            <Icons.chevronLeft className="text-grey-450 cursor-pointer" />
          </div>
        )}
        {emblaApi?.canScrollNext() == true && (
          <div
            className={`absolute flex items-center justify-center right-2 ${chevronTopStyle} h-[32px] w-[32px] bg-white opacity-70 rounded-lg hover:opacity-100`}
            onClick={() => scrollNext()}
          >
            <Icons.chevronRight className="text-grey-450 cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
};

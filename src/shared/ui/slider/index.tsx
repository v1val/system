import useEmblaCarousel from "embla-carousel-react";
import { Icons } from "shared/ui/icons";

interface Slide {
  title: string;
  image: string;
}
interface SliderProps {
  align: "center" | "start";
  slidesToScroll: number;
  slides: Slide[];
}
export const Slider = (props: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: props.align,
    skipSnaps: true,
    slidesToScroll: props.slidesToScroll,
  });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="overflow-hidden size-full relative" ref={emblaRef}>
      <div className="flex">
        {props.slides.map((post, index) => (
          <div
            className="flex flex-none flex-wrap lg:flex-nowrap w-full bg-white"
            key={index}
          >
            {post.title}
          </div>
        ))}
      </div>
      {emblaApi?.canScrollPrev == true && (
        <div
          className="absolute flex items-center justify-center left-2 top-0 bottom-0 my-auto h-[32px] w-[32px] bg-white opacity-70 rounded-lg  hover:opacity-100 "
          onClick={() => scrollPrev()}
        >
          <Icons.chevronLeft className="text-grey-450 cursor-pointer" />
        </div>
      )}
      {emblaApi?.canScrollNext() == true && (
        <div
          className="absolute flex items-center justify-center right-2 top-0 bottom-0 my-auto h-[32px] w-[32px] bg-white opacity-70 rounded-lg hover:opacity-100"
          onClick={() => scrollNext()}
        >
          <Icons.chevronRight className="text-grey-450 cursor-pointer" />
        </div>
      )}
    </div>
  );
};

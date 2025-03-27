"use dom";
import useEmblaCarousel from "embla-carousel-react";
import * as React from "react";
import { Image } from "react-native";
import { newsOne } from "~/constants/images";

const RelatedPostsCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="h-[400px] w-full overflow-hidden" ref={emblaRef}>
      <div className="flex w-full">
        <div className="w-full flex-1 flex-shrink-0">
          <Image source={newsOne} className="h-[200px] w-full" />
        </div>
        <div className="w-full flex-1 flex-shrink-0">
          <Image source={newsOne} className="h-[200px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default RelatedPostsCarousel;

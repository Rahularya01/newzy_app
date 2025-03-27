import * as React from "react";
import { Dimensions, Image, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
import { newsThree } from "~/constants/images";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const CategoryCarousel: React.FC = () => {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
  return (
    <View className="relative flex-1">
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.75}
        data={data}
        onProgressChange={progress}
        renderItem={() => (
          <View className="h-full w-full">
            <Image
              source={newsThree}
              className="h-full w-full"
              resizeMode="cover"
            />
          </View>
        )}
      />

      <View className="absolute left-0 top-5 w-full">
        <Pagination.Basic
          progress={progress}
          data={data}
          dotStyle={{
            width: 30,
            height: 4,
            backgroundColor: "#FFFFFF",
            borderRadius: 10,
          }}
          activeDotStyle={{
            overflow: "hidden",
            backgroundColor: "#006163",
          }}
          containerStyle={{
            gap: 10,
            marginBottom: 10,
          }}
          horizontal
          onPress={onPressPagination}
        />
      </View>
    </View>
  );
};
export default CategoryCarousel;

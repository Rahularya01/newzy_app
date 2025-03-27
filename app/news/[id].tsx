import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ListenIcon } from "~/assets/icons/listen";
import { QuoteIcon } from "~/assets/icons/quote";
import Comments from "~/components/pages/news-details/comments";
import NewsActions from "~/components/pages/news-details/news-actions";
import RelatedPosts from "~/components/pages/news-details/related-posts";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Text } from "~/components/ui/text";
import { newsTwo } from "~/constants/images";

const height = Dimensions.get("window").height;

const NewsPage: React.FC = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Define the snap points for the Bottom Sheet
  const snapPoints = useMemo(() => ["25%", "50%", "80%"], []);

  // Open Bottom Sheet
  const handleOpen = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);
  return (
    <ScrollView>
      <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
        <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
          <Text style={{ fontSize: 18 }}>This is a Bottom Sheet</Text>
        </View>
      </BottomSheet>
      <View className="w-full px-4 pb-6 pt-4">
        <Text className="font-merriweather-sans-800 text-2xl text-[#222]">
          Hidden Costs of Buying an Apartment in 2025
        </Text>
        <View
          className="mt-4 max-w-fit rounded-full bg-white px-3 py-[7px]"
          style={{
            boxShadow: "0px 5px 10px 0px #00000026",
            alignSelf: "flex-start",
          }}
        >
          <Text className="whitespace-nowrap font-inter-600 text-[12px] text-primary">
            Real Estate
          </Text>
        </View>
      </View>
      <View
        className="relative w-full"
        style={{
          height: height * 0.275,
        }}
      >
        <View className="absolute bottom-0 left-0 z-10 rounded-tr-[15px] bg-primary p-5">
          <View className="flex-row items-center gap-2.5">
            <Avatar alt="Zach Nugent's Avatar" className="h-[30px] w-[30px]">
              <AvatarImage
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/fd48/aa3e/9f7bfe711cbd1fbe55a9b509a1dbe7c4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bNG5MrlA83x0NSnCTBJVmqo8uPUsJofn-ijErdPpgA27hWW6XSU9lzgRAg3lfHf6D07uLFyIIuB-7gjiaSCkzq087tZCg1fQJ3bOH4mr1CWFuQXhOh1zPUJB-55YcYbkY9ja36ec0pFDNAjFwqduhdGBQIy8-6e1L0X~qXJvMKLBc0b0GHk0O~7ck8kpK6JptytkkRYyDFG2P2I5bXbvVqnlYWBTsObX16FD5Q2SiXMvlRUVSwTwOfzMF30be~vypCU0Kgw3NCSx-ZbsrK5XEcsEb3QE4edj1i~6sYjzL-wqbRXRmApL~qFWCr8C7Un4iW8lcZ~yUIfNRfgU4ZHdAA__",
                }}
              />
              <AvatarFallback>
                <Text>ZN</Text>
              </AvatarFallback>
            </Avatar>

            <View>
              <Text className="font-inter-400 text-[14px] text-white">
                Created by{" "}
                <Text className="font-inter-600 text-[14px] text-white">
                  John Smith
                </Text>
              </Text>
              <Text className="font-inter-400 text-[14px] text-white">
                4 days • 5 read
              </Text>
            </View>
          </View>
        </View>
        <Image source={newsTwo} className="h-full w-full" resizeMode="cover" />
      </View>

      <View className="p-[15px]">
        <View className="flex-row items-start justify-between gap-[15px]">
          <QuoteIcon />
          <Text className="flex-1 border-b border-primary pb-4 font-inter-400 text-2xl text-black">
            In India, stamp duty is a government-imposed tax on the sale or
            transfer of a property (including flats).
          </Text>
        </View>
        <Text className="pb-4 pt-7 text-[12px]">
          Picture this- you find your dream apartment and decide to buy it. You
          plan the budget taking the apartment’s price, your income, savings and
          expenses into account. Just about closing the deal, a series of
          unknown costs unfold. Instead of envisioning a happy future in the new
          flat, you suddenly find yourself dealing with a fiscal tug-of-war. It
          may end up in a budget overrun or rework of your choice. Wouldn’t your
          plan be failproof if you knew the hidden cost of flat ownership? 
          {"\n"}
          Every homebuyer desires to have clear insights for a hassle-free
          purchase. If you are planning to buy an apartment in 2025 and want to
          avoid a last-minute budget crunch, then this article is for you. Keep
          reading to learn the different subtle expenses that contribute to the
          final closing payment of an apartment. Some are inevitable costs that
          homebuyers often overlook or assume to be part of the upfront cost.
          Foreseeing them helps you make an informed decision. With a smart,
          wise plan, you can enjoy a worry-free ticket to your dream home,
          keeping your budget sound.
        </Text>
        <TouchableOpacity>
          <View className="flex-row items-center gap-1.5 self-start rounded-full bg-[#AAD4D6] px-[20px] py-[15px]">
            <ListenIcon />
            <Text className="font-inter-600 text-sm text-primary">
              Listen Article
            </Text>
          </View>
        </TouchableOpacity>
        <NewsActions />
      </View>

      <View className="h-[5px] w-full bg-[#eee]" />
      <Comments handleOpen={handleOpen} />
      <RelatedPosts />
    </ScrollView>
  );
};

export default NewsPage;

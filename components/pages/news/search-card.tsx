import React from "react";
import { Image, View } from "react-native";
import { newsOne } from "~/constants/images";
import { Text } from "~/components/ui/text";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

// import { Container } from './styles';

const SearchCard: React.FC = () => {
  return (
    <View className="w-full flex-row items-center gap-5 px-5 py-[15px]">
      <View className="aspect-square h-[80px] w-[80px]">
        <Image source={newsOne} className="h-full w-full rounded-[15px]" />
      </View>
      <View className="flex-1">
        <Text className="font-merriweather-sans-400 text-base leading-[22px] text-[#777]">
          Top 15 Database for Web
          <Text className="font-merriweather-sans-800 text-[#222]">
            {" "}
            Apps
          </Text>{" "}
          to Use{" "}
          <Text className="font-merriweather-sans-800 text-[#222]">
            in 2025
          </Text>
        </Text>

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
            <Text className="font-inter-400 text-[12px] text-[#AAA]">
              Created by{" "}
              <Text className="font-inter-600 text-[12px] text-[#777]">
                John Smith
              </Text>
            </Text>
            <Text className="font-inter-400 text-[12px] text-[#aaa]">
              4 days • 5 read
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchCard;

import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Text } from "./ui/text";
import { HeartFilled } from "~/assets/icons/heart-filled";

const CommentCard: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <View className="w-full rounded-[15px] bg-[#f4f4f4] p-4">
      <View>
        <View className="flex-row items-center gap-[15px]">
          <Avatar alt="Zach Nugent's Avatar" className="h-[50px] w-[50px]">
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
            <Text className="font-inter-600 text-[16px] text-black">
              John Smith
            </Text>
            <Text className="font-inter-400 text-[12px] text-[#aaa]">
              18 February, 2025 • 07:30am
            </Text>
          </View>
        </View>
      </View>
      <Text className="mb-[5px] mt-2.5 font-inter-400 text-[14px] text-[#777]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 
      </Text>
      <View className="flex-row items-center gap-2.5">
        <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
          <HeartFilled color={isLiked ? "#E33629" : "#AAD4D6"} />
        </TouchableOpacity>
        <Text className="font-inter-600 text-[12px] text-black">53</Text>
      </View>
    </View>
  );
};

export default CommentCard;

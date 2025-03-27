import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import React from "react";
import { ScrollView, View } from "react-native";
import { DeleteAccountModal } from "~/components/pages/profile/delete-account-modal";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

const ProfileScreen: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <DeleteAccountModal open={open} onOpenChange={setOpen} />
      <ScrollView
        contentContainerClassName="flex-1 px-4 pb-5 pt-7 justify-between gap-8"
        className="bg-white"
      >
        <View className="items-center justify-center">
          <Avatar alt="Zach Nugent's Avatar" className="h-[120px] w-[120px]">
            <AvatarImage
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/fd48/aa3e/9f7bfe711cbd1fbe55a9b509a1dbe7c4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bNG5MrlA83x0NSnCTBJVmqo8uPUsJofn-ijErdPpgA27hWW6XSU9lzgRAg3lfHf6D07uLFyIIuB-7gjiaSCkzq087tZCg1fQJ3bOH4mr1CWFuQXhOh1zPUJB-55YcYbkY9ja36ec0pFDNAjFwqduhdGBQIy8-6e1L0X~qXJvMKLBc0b0GHk0O~7ck8kpK6JptytkkRYyDFG2P2I5bXbvVqnlYWBTsObX16FD5Q2SiXMvlRUVSwTwOfzMF30be~vypCU0Kgw3NCSx-ZbsrK5XEcsEb3QE4edj1i~6sYjzL-wqbRXRmApL~qFWCr8C7Un4iW8lcZ~yUIfNRfgU4ZHdAA__",
              }}
            />
            <AvatarFallback>
              <Text>ZN</Text>
            </AvatarFallback>
          </Avatar>
          <Text className="mb-[5px] mt-[15px] font-merriweather-sans-800 text-[32px] leading-10 text-primary">
            Jane Deo
          </Text>
          <Text>janedeo@example.com</Text>
          <Button
            style={{
              height: 50,
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginTop: 15,
            }}
          >
            <Text>Get Subscription</Text>
            <ChevronRight width={16} height={16} color="#fff" />
          </Button>
        </View>
        <View className="flex-col gap-4">
          <Button
            onPress={() => {
              router.push("/profile/change-password");
            }}
          >
            <Text className="text-[16px]">Change Password</Text>
          </Button>
          <Button variant="destructive" onPress={() => setOpen(true)}>
            <Text>Delete Account</Text>
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default ProfileScreen;

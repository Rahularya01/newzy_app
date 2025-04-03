import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import React from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { DeleteAccountModal } from "~/components/pages/profile/delete-account-modal";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { useCustomerProfile } from "~/hooks/api/auth/useCustomerProfile";

const ProfileScreen: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data: user, isLoading, error } = useCustomerProfile();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#006163" />
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500">Failed to load profile</Text>
      </View>
    );
  }

  return (
    <>
      <DeleteAccountModal open={open} onOpenChange={setOpen} />
      <ScrollView
        contentContainerClassName="flex-1 px-4 pb-5 pt-7 justify-between gap-8"
        className="bg-white"
      >
        <View className="items-center justify-center">
          <Avatar
            alt={`${user?.name}'s Avatar`}
            className="h-[120px] w-[120px]"
          >
            <AvatarImage
              source={{
                uri:
                  user?.profile_information?.profile_image ||
                  "https://via.placeholder.com/120",
              }}
            />
            <AvatarFallback>
              <Text>{user?.name?.charAt(0) || "U"}</Text>
            </AvatarFallback>
          </Avatar>
          <Text className="mb-[5px] mt-[15px] font-merriweather-sans-800 text-[32px] leading-10 text-primary">
            {user?.name || "Unknown User"}
          </Text>
          <Text>{user?.email || "No email provided"}</Text>
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

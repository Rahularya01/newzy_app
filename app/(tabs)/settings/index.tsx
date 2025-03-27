import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { LogoutModal } from "~/components/pages/profile/logout-modal";

const menuItems = [
  { title: "Profile", link: "/profile/profile" },
  { title: "Change Password", link: "/profile/change-password" },
  { title: "Language & Province", link: "/language" },
  { title: "Subscription", link: "/profile/subscription" },
  { title: "Support", link: "/profile/support" },
  { title: "Terms & Conditions", link: "/profile/terms" },
  { title: "Privacy Policy", link: "/profile/privacy" },
];

export default function SettingsScreen() {
  const [open, setOpen] = React.useState(false);
  return (
    <View className="flex-1 bg-white">
      <LogoutModal open={open} onOpenChange={setOpen} />
      {/* Menu Items */}
      <ScrollView className="px-4 pt-5">
        <View className="flex-row flex-wrap justify-between">
          {menuItems.map((item, index) => (
            <Link href={item.link as any} key={index} asChild>
              <TouchableOpacity className="mb-3 w-[48.5%] justify-center rounded-[15px] bg-[#E5F2F3] px-5 py-[15px]">
                <Text className="font-merriweather-sans-800 text-[16px] leading-[22px] text-primary">
                  {item.title} →
                </Text>
              </TouchableOpacity>
            </Link>
          ))}
          <TouchableOpacity
            className="mb-3 w-[48.5%] justify-center rounded-[15px] bg-[#E5F2F3] px-5 py-[15px]"
            onPress={() => {
              setOpen(true);
            }}
          >
            <Text className="font-merriweather-sans-800 text-[16px] leading-[22px] text-primary">
              Logout →
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

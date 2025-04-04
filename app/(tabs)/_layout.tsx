import { Header } from "@react-navigation/elements";
import { router, Tabs } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import React from "react";
import { Dimensions, Platform, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BookmarkIcon } from "~/assets/icons/bookmark-icon";
import { CategoriesIcon } from "~/assets/icons/categories";
import { HistoryIcon } from "~/assets/icons/history";
import { HomeIcon } from "~/assets/icons/home";
import { SearchIcon } from "~/assets/icons/search-icon";
import { SettingsIcon } from "~/assets/icons/settings";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Text } from "~/components/ui/text";
import { useCustomerProfile } from "~/hooks/api/auth/useCustomerProfile";

const { height } = Dimensions.get("window");

export const HEADER_HEIGHT = height * (Platform.OS === "ios" ? 0.17 : 0.16); // 12.5% of the screen height

const TabsLayout: React.FC = () => {
  const insets = useSafeAreaInsets();
  const { data: user, isLoading } = useCustomerProfile();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#006163",
          borderTopWidth: 0,
          paddingTop: 5,
          height: Platform.OS === "ios" ? insets.bottom + 60 : 60,
        },
        tabBarIconStyle: {
          width: 24,
          height: 24,
        },
        tabBarItemStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        },
        tabBarActiveTintColor: "white", // Active icon color
        tabBarInactiveTintColor: "#54A5A7", // Inactive icon color
        headerStatusBarHeight: Platform.OS === "ios" ? 46 : undefined,

        header: ({ options }) => (
          // @ts-ignore
          <Header
            {...options}
            headerTitleAlign="center"
            headerLeft={() => (
              <View className="flex-row items-center gap-5 pl-4">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/profile/profile");
                  }}
                  activeOpacity={0.7} // Slight feedback on press
                >
                  <Avatar
                    alt={`${user?.name}'s Avatar`}
                    className="h-[60px] w-[60px]"
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
                </TouchableOpacity>
                <View>
                  <Text className="font-inter-400 text-[14px] leading-[14px] text-black">
                    Hi!
                  </Text>
                  <Text className="mb-1.5 mt-1 font-merriweather-sans-800 text-[18px] leading-[18px] text-primary">
                    {isLoading ? "Loading..." : user?.name || "Guest"}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      router.push("/profile/subscription");
                    }}
                  >
                    <View className="h-[26px] w-[90px] flex-row items-center justify-center rounded-full bg-primary">
                      <Text className="font-inter-400 text-[11px] leading-[11px] text-white">
                        Subscribe
                      </Text>
                      <ChevronRight color="white" size={12} />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            headerRight={() => (
              <View className="flex-row items-center gap-7 pr-4">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/news/bookmark");
                  }}
                >
                  <BookmarkIcon />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/news/search");
                  }}
                >
                  <SearchIcon />
                </TouchableOpacity>
              </View>
            )}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarLabel: "Home",
          headerStyle: {
            height: HEADER_HEIGHT,
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: "Inter_400Regular",
          },
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories/index"
        options={{
          tabBarLabel: "Categories",
          headerStyle: {
            height: HEADER_HEIGHT,
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarIcon: ({ color, size }) => (
            <CategoriesIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="history/index"
        options={{
          tabBarLabel: "History",
          headerStyle: {
            height: HEADER_HEIGHT,
            shadowOpacity: 0,
            elevation: 0,
            borderBottomWidth: 5,
            borderBottomColor: "#eee",
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontFamily: "Inter_400Regular",
          },
          tabBarIcon: ({ color, size }) => (
            <HistoryIcon color={color} width={size} height={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          headerStyle: {
            borderBottomWidth: 5,
            borderBottomColor: "#eee",
            height: HEADER_HEIGHT,
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon color={color} width={size} height={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

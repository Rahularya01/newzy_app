import { router, Stack } from "expo-router";
import React from "react";
import BackButton from "~/components/back-button";
import { Header } from "@react-navigation/elements";
import { Dimensions, Platform, TouchableOpacity, View } from "react-native";
import { BookmarkIcon } from "~/assets/icons/bookmark-icon";
import { SearchIcon } from "~/assets/icons/search-icon";

// Get the screen height
const { height } = Dimensions.get("window");

// Define a responsive header height
export const HEADER_HEIGHT = height * (Platform.OS === "ios" ? 0.14 : 0.125); // 12.5% of the screen height

const ProfileLayout: React.FC = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="bookmark"
        options={{
          title: "Bookmarks",
          header: ({ options }) => (
            // @ts-ignore
            <Header
              {...options}
              headerTitleAlign="center"
              headerLeft={() => (
                <View className="pl-4">
                  <BackButton />
                </View>
              )}
              headerTitleStyle={{
                fontFamily: "MerriweatherSans_800ExtraBold",
                fontSize: 24,
                color: "#006163",
              }}
              headerStatusBarHeight={Platform.OS === "ios" ? 46 : undefined}
              headerStyle={{
                height: HEADER_HEIGHT,
                shadowOpacity: 0,
                elevation: 0,
                borderBottomWidth: 5,
                borderBottomColor: "#eee",
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="search"
        options={{
          title: "Search",
          header: ({ options }) => (
            // @ts-ignore
            <Header
              {...options}
              headerTitleAlign="center"
              headerLeft={() => (
                <View className="pl-4">
                  <BackButton />
                </View>
              )}
              headerStatusBarHeight={Platform.OS === "ios" ? 46 : undefined}
              headerTitleStyle={{
                fontFamily: "MerriweatherSans_800ExtraBold",
                fontSize: 24,
                color: "#006163",
              }}
              headerStyle={{
                height: HEADER_HEIGHT,
                shadowOpacity: 0,
                elevation: 0,
              }}
            />
          ),
        }}
      />

      <Stack.Screen
        name="comments"
        options={{
          presentation: "containedModal",
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "",
          header: ({ options }) => (
            // @ts-ignore
            <Header
              {...options}
              headerTitleAlign="center"
              headerLeft={() => (
                <View className="pl-4">
                  <BackButton />
                </View>
              )}
              headerStatusBarHeight={Platform.OS === "ios" ? 46 : undefined}
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
              headerTitleStyle={{
                fontFamily: "MerriweatherSans_800ExtraBold",
                fontSize: 24,
                color: "#006163",
              }}
              headerStyle={{
                height: HEADER_HEIGHT,
                shadowOpacity: 0,
                elevation: 0,
                borderBottomWidth: 5,
                borderBottomColor: "#eee",
              }}
            />
          ),
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;

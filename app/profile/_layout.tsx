import { Stack } from "expo-router";
import React from "react";
import BackButton from "~/components/back-button";
import { Header } from "@react-navigation/elements";
import { Dimensions, Platform, View } from "react-native";

const { height } = Dimensions.get("window");

export const HEADER_HEIGHT = height * (Platform.OS === "ios" ? 0.14 : 0.12); // 12.5% of the screen height

const ProfileLayout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
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
    >
      <Stack.Screen name="profile" options={{ title: "Profile" }} />

      <Stack.Screen
        name="change-password"
        options={{ title: "Change Password" }}
      />
      <Stack.Screen name="terms" options={{ title: "Terms & Conditions" }} />

      <Stack.Screen name="privacy" options={{ title: "Privacy Policy" }} />

      <Stack.Screen name="support" options={{ title: "Support" }} />
      <Stack.Screen name="subscription" options={{ title: "Subscription" }} />
    </Stack>
  );
};

export default ProfileLayout;

import "~/global.css";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import {
  MerriweatherSans_400Regular,
  MerriweatherSans_700Bold,
  MerriweatherSans_800ExtraBold,
} from "@expo-google-fonts/merriweather-sans";
import { DefaultTheme, Theme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NAV_THEME } from "~/lib/constants";
import { PortalHost } from "@rn-primitives/portal";
import { ThemeToggle } from "~/components/ThemeToggle";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};

export { ErrorBoundary } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    MerriweatherSans_400Regular,
    MerriweatherSans_700Bold,
    MerriweatherSans_800ExtraBold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView>
        <ThemeProvider value={LIGHT_THEME}>
          <StatusBar style={"auto"} />
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                title: "Starter Base",
                headerRight: () => <ThemeToggle />,
              }}
            />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ headerShown: false }} />h
            <Stack.Screen name="news" options={{ headerShown: false }} />h
          </Stack>
          <PortalHost />
        </ThemeProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}

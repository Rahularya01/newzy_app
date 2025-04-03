import React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useQueryClient } from "@tanstack/react-query";

import { useLogout } from "~/hooks/api/auth/useLogout";

interface LogoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LogoutModal = ({ open, onOpenChange }: LogoutModalProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending: isLoading } = useLogout();

  // const handleLogout = async () => {
  //   await SecureStore.deleteItemAsync("authToken");
  //   router.push("/(auth)/sign-in");
  //   try {
  //     await mutateAsync(undefined, {
  //       onSuccess: async () => {
  //         onOpenChange(false);
  //       },
  //       onError(error) {
  //         alert(error.response?.data?.message || "Logout failed!");
  //       },
  //     });
  //   } catch (err) {
  //     console.error("Logout error:", err);
  //   }
  // };
  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync("authToken"); // Delete the stored token

      // Ensure token is removed from React Query cache as well
      queryClient.setQueryData(["authToken"], null);
      const token = await SecureStore.getItemAsync("authToken");
      console.log("Token after deletion:", token); // Should log `null`

      router.push("/(auth)/sign-in");
      onOpenChange(false);
    } catch (error) {
      console.error("Error deleting token:", error);
      alert("Logout failed!");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[294px] rounded-[15px] bg-[#dfe7e8] p-5">
        <Text className="text-center font-merriweather-sans-800 text-2xl text-black">
          Logout
        </Text>
        <Text className="mb-3 text-center">Do you want to logout?</Text>
        <View className="flex-row items-center justify-between">
          <Button
            variant="destructive"
            className="h-10 w-[48%] border-primary bg-white"
            style={{
              height: 50,
            }}
            onPress={() => {
              onOpenChange(false);
              handleLogout();
            }}
          >
            <Text className="text-primary">
              {/* {isLoading ? "Logging out..." : "Yes"} */}
              Yes
            </Text>
          </Button>
          <Button
            className="w-[48%]"
            style={{
              height: 50,
            }}
          >
            <Text>No</Text>
          </Button>
        </View>
      </DialogContent>
    </Dialog>
  );
};

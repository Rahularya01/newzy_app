import React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import { Text } from "~/components/ui/text";
import { useLogout } from "~/hooks/api/auth/useLogout";

interface LogoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LogoutModal = ({ open, onOpenChange }: LogoutModalProps) => {
  const { mutateAsync, isPending: isLoading } = useLogout();

  const handleLogout = async () => {
    try {
      await mutateAsync(undefined, {
        onSuccess() {
          onOpenChange(false);
        },
        onError(error) {
          alert(error.response?.data?.message || "Logout failed!");
        },
      });
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[294px] rounded-[15px] bg-[#E5F2F3] p-5">
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
            }}
          >
            <Text className="text-primary">
              {isLoading ? "Logging out..." : "Yes"}
            </Text>
          </Button>
          <Button
            className="w-[48%]"
            style={{
              height: 50,
            }}
            onPress={() => {
              onOpenChange(false);
              handleLogout();
            }}
          >
            <Text>No</Text>
          </Button>
        </View>
      </DialogContent>
    </Dialog>
  );
};

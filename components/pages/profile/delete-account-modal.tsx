import React from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import { Text } from "~/components/ui/text";

interface DeleteAccountModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DeleteAccountModal = ({
  open,
  onOpenChange,
}: DeleteAccountModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[294px] rounded-[15px] bg-[#E5F2F3] p-5">
        <Text className="text-center font-merriweather-sans-800 text-2xl text-destructive">
          Delete Account
        </Text>
        <Text className="mb-3 text-center">
          Are you sure, you want to delete your account?
        </Text>
        <View className="flex-row items-center justify-between">
          <Button
            variant="destructive"
            className="h-10 w-[48%] bg-white"
            style={{
              height: 50,
            }}
            onPress={() => {
              onOpenChange(false);
            }}
          >
            <Text>Yes</Text>
          </Button>
          <Button
            className="w-[48%]"
            style={{
              height: 50,
            }}
            onPress={() => {
              onOpenChange(false);
            }}
          >
            <Text>No</Text>
          </Button>
        </View>
      </DialogContent>
    </Dialog>
  );
};

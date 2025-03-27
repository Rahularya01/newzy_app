import { router } from "expo-router";
import React from "react";
import { View } from "react-native";
import CommentCard from "~/components/comment-card";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

interface CommentsProps {
  handleOpen: () => void;
}

const Comments = ({ handleOpen }: CommentsProps) => {
  return (
    <View className="w-full gap-4 p-4">
      <Text className="font-merriweather-sans-800 text-3xl text-primary">
        Comments
      </Text>

      <View className="w-full gap-2.5">
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </View>
      <Button
        variant="outline"
        style={{
          height: 41,
        }}
        className="self-center"
        onPress={() => {
          console.log("Hwll");
          handleOpen();
        }}
      >
        <Text>More →</Text>
      </Button>
    </View>
  );
};

export default Comments;

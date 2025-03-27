import { Stack } from "expo-router";
import React from "react";

const AuthLayout: React.FC = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  );
};

export default AuthLayout;

import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "~/components/back-button";
import { cn } from "~/lib/utils";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import { Check, ChevronDown } from "lucide-react-native";
import { useLocalSearchParams } from "expo-router";
import { useCustomerProfileData } from "~/hooks/api/auth/useCustomerProfileData";
import { LANGUAGES } from "~/constants/languages";
import { COUNTRIES } from "~/constants/provinces";

const Language: React.FC = () => {
  const { mutateAsync, isPending: isLoading } = useCustomerProfileData();
  const params = useLocalSearchParams();

  const formData = params.formData ? JSON.parse(params.formData as string) : {};
  const interests = params.interests
    ? JSON.parse(params.interests as string)
    : [];
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");
  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!selectedProvince) {
      alert("Please select a Province");
      return;
    }

    const payload = {
      gender: formData.gender,
      interests: JSON.stringify(interests),
      visa_type: formData.visa_type,
      notification: formData.notification ? 1 : 0,
      language: selectedLanguage,
      Province: selectedProvince,
      other_user_connect: formData.other_user_connect ? 1 : 0,
      premium_features: formData.premium_features ? 1 : 0,
    };

    try {
      const response = await mutateAsync(payload);

      if (response.success) {
        router.push("/review");
      } else {
        alert(response.message);
      }
    } catch (error: any) {
      alert("Something went wrong: " + error.message);
    }
  };

  return (
    <SafeAreaView className="h-full flex-1 justify-between bg-[#f4f4f4]/70 px-5 pb-5">
      <View className="pt-5">
        <BackButton />
      </View>
      <View className="flex-1 items-center pt-7">
        <Text className="text-center font-merriweather-sans-800 text-[40px] text-[#222]">
          Language & Province
        </Text>
        <Text className="mt-2.5 text-center font-inter-400 text-[14px] text-[#6b6b6b]">
          Select your preferred language and Province.
        </Text>
        <View className="w-full pt-14">
          <Text className="mb-4 font-inter-700 text-[14px] font-bold text-[#222]">
            Language
          </Text>
          <View className="w-full flex-row flex-wrap justify-between gap-3">
            {LANGUAGES.map(({ name, flag }) => {
              const isSelected = selectedLanguage === name;
              return (
                <TouchableOpacity
                  key={name}
                  onPress={() => setSelectedLanguage(name)}
                  className={cn(
                    "w-[48%] flex-row items-center gap-2 rounded-[15px] border bg-white p-[15px]",
                    isSelected
                      ? "border-primary bg-primary text-white"
                      : "border-[#AAD4D6]",
                  )}
                >
                  <Image
                    source={flag}
                    className="mr-2 h-[30px] w-[30px] rounded-full"
                  />
                  <Text
                    className={cn(
                      "font-inter-600 text-base",
                      isSelected ? "text-white" : "text-[#222]",
                    )}
                  >
                    {name}
                  </Text>
                  {isSelected && <Check size={18} color="white" />}
                </TouchableOpacity>
              );
            })}
          </View>

          <Text className="mt-7 font-inter-700 text-[14px] font-bold text-[#222]">
            Province
          </Text>
          <Pressable
            className="mt-4 h-[60px] flex-row items-center justify-between rounded-full border border-[#ccc] bg-white px-5 py-3"
            onPress={() => setModalVisible(true)}
          >
            <Text className="font-inter-400 text-[14px] text-[#777]">
              {selectedProvince || "Select your Province"}
            </Text>
            <ChevronDown size={24} color="black" />
          </Pressable>
        </View>
      </View>

      <Button onPress={handleSubmit} disabled={isLoading}>
        <Text>{isLoading ? "Loading..." : "Continue"}</Text>
      </Button>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View className="flex-1 justify-center bg-black/50">
          <View className="mx-5 max-h-[80%] rounded-lg bg-white p-5">
            <FlatList
              data={COUNTRIES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="border-b border-gray-200 p-4"
                  onPress={() => {
                    setSelectedProvince(item);
                    setModalVisible(false);
                  }}
                >
                  <Text className="text-lg text-[#222]">{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Language;

import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowRightIcon } from "~/assets/icons/arrow-right";
import BackButton from "~/components/back-button";
import Badge from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import {
  gender,
  visaTypes,
  questions,
  answer,
} from "~/constants/sign-up-question";
import { cn } from "~/lib/utils";

const formSchema = z.object({
  gender: z.string({
    required_error: "Gender is required",
  }),
  visa: z.string({
    required_error: "Visa is required",
  }),
  notifications: z.enum(["Yes", "No"], {
    required_error: "Please select an option for notifications.",
  }),
  connect_with_users: z.enum(["Yes", "No"], {
    required_error: "Please select an option for connecting with users.",
  }),
  explore_premium_1: z.enum(["Yes", "No"], {
    required_error: "Please select an option for exploring premium features.",
  }),
  explore_premium_2: z.enum(["Yes", "No"], {
    required_error: "Please select an option for exploring premium features.",
  }),
  explore_premium_3: z.enum(["Yes", "No"], {
    required_error: "Please select an option for exploring premium features.",
  }),
  explore_premium_4: z.enum(["Yes", "No"], {
    required_error: "Please select an option for exploring premium features.",
  }),
  explore_premium_5: z.enum(["Yes", "No"], {
    required_error: "Please select an option for exploring premium features.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const SignUpQuestion: React.FC = () => {
  const params = useLocalSearchParams();
  const receivedData: string[] = params.interest
    ? JSON.parse(params.interest as string)
    : [];

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  // Use watch to keep track of all form values
  const watchedValues = form.watch();

  // Calculate the number of filled fields.
  // Here we consider a field "filled" if its value is not undefined, null, or an empty string.
  const filledCount = Object.values(watchedValues).filter(
    (value) => value !== undefined && value !== null && value !== "",
  ).length;

  // Optionally, if you want to store it in local state to trigger re-renders, you can use useState and useEffect:
  const [completedCount, setCompletedCount] = useState(0);
  useEffect(() => {
    setCompletedCount(filledCount);
  }, [filledCount]);

  const onSubmit = (data: FormSchema) => {
    if (receivedData.length === 0)
      return alert("Please select at least one interest");

    router.push({
      pathname: "/language",
      params: {
        formData: JSON.stringify(data),
        interests: JSON.stringify(receivedData),
      },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#f4f4f4]/70">
      <View className="gap-7 px-5 pt-3">
        <BackButton />
        <View className="w-full items-center gap-4">
          <View className="w-full flex-row justify-between gap-[2px]">
            {new Array(9).fill(0).map((_, index) => (
              <View
                className={cn("h-[6px] w-[9.8%] bg-[#D4DBDB]", {
                  "bg-primary": index < completedCount,
                })}
              />
            ))}
          </View>
          <Text className="font-inter-400 text-[14px] text-black">
            Answer the following questions
          </Text>
        </View>
      </View>
      <ScrollView className="relative">
        <View className="w-full gap-[10px] px-5 py-[30px]">
          <Controller
            control={form.control}
            name="gender"
            render={({ field }) => (
              <View
                className="w-full gap-[15px] rounded-[10px] bg-white p-[10px]"
                style={{ boxShadow: "0px 0px 10px 0px #F0F0F0" }}
              >
                <Text className="font-inter-700 text-[14px] text-[#222]">
                  Your Gender
                </Text>
                <View className="flex-row flex-wrap gap-[6px]">
                  {gender.map((item) => (
                    <Badge
                      key={item}
                      title={item}
                      isActive={field.value === item}
                      onPress={field.onChange}
                    />
                  ))}
                </View>
              </View>
            )}
          />

          <Pressable
            onPress={() => {
              router.push("/(auth)/interest");
            }}
          >
            <View
              className="w-full gap-[15px] rounded-[10px] bg-white p-[10px]"
              style={{ boxShadow: "0px 0px 10px 0px #F0F0F0" }}
            >
              <View className="w-full flex-row items-center justify-between">
                <Text className="font-inter-700 text-[14px] text-[#222]">
                  Your Interest
                </Text>
                <ArrowRightIcon />
              </View>
              <View className="flex-row flex-wrap gap-[6px]">
                {receivedData.length > 0 ? (
                  receivedData.map((item, i) => (
                    <View key={i} className="flex-row items-center gap-[6px]">
                      <Text className="font-inter-400 text-[12px] text-[#222]">
                        {item}
                      </Text>
                      {receivedData.length !== i + 1 && (
                        <View className="h-[2px] w-[2px] rounded-full bg-[#222]" />
                      )}
                    </View>
                  ))
                ) : (
                  <Text className="font-inter-400 text-[12px] text-[#222]">
                    Please select your interest
                  </Text>
                )}
              </View>
            </View>
          </Pressable>

          <Controller
            control={form.control}
            name="visa"
            render={({ field }) => (
              <View
                className="w-full gap-[15px] rounded-[10px] bg-white p-[10px]"
                style={{ boxShadow: "0px 0px 10px 0px #F0F0F0" }}
              >
                <Text className="font-inter-700 text-[14px] text-[#222]">
                  Visa Type
                </Text>
                <View className="flex-row flex-wrap gap-[6px]">
                  {visaTypes.map((item) => (
                    <Badge
                      key={item}
                      title={item}
                      isActive={field.value === item}
                      onPress={field.onChange}
                    />
                  ))}
                </View>
              </View>
            )}
          />

          {questions.map((item) => (
            <Controller
              key={item.name}
              control={form.control}
              name={item.name as keyof FormSchema}
              render={({ field }) => (
                <View
                  className="w-full gap-[15px] rounded-[10px] bg-white p-[10px]"
                  style={{ boxShadow: "0px 0px 10px 0px #F0F0F0" }}
                >
                  <Text className="font-inter-700 text-[14px] text-[#222]">
                    {item.question}
                  </Text>
                  <View className="flex-row flex-wrap gap-[6px]">
                    {answer.map((ans) => (
                      <Badge
                        key={ans}
                        title={ans}
                        isActive={field.value === ans}
                        onPress={field.onChange}
                      />
                    ))}
                  </View>
                </View>
              )}
            />
          ))}

          <Button
            className="mt-7"
            onPress={form.handleSubmit(onSubmit, () => {
              alert("Please fill all the fields");
            })}
          >
            <Text>Continue</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpQuestion;

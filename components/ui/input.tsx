import * as React from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  View,
  Text,
  Platform,
  TouchableOpacity,
  type TextInputProps,
} from "react-native";
import { cn } from "~/lib/utils";
import { Label } from "./label";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  containerClassName?: string;
  inputClassName?: string;
  suffixIcon?: React.ReactNode;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  (
    {
      label,
      error,
      icon,
      className,
      containerClassName,
      placeholderClassName,
      style,
      inputClassName,
      secureTextEntry,
      suffixIcon,
      ...props
    },
    ref,
  ) => {
    // Manage internal state for toggling password visibility.
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ width: "100%" }}
        className={cn(containerClassName)}
      >
        {label && (
          <Label className="mb-1 text-sm font-medium text-foreground">
            {label}
          </Label>
        )}
        <View
          className={cn(
            "native:h-[60px] h-10 flex-row items-center rounded-full border bg-[#eee] px-5 text-[#777] web:flex web:w-full web:py-2",
            error ? "border-red-500" : "border-input",
            props.editable === false && "opacity-50 web:cursor-not-allowed",
            className,
          )}
        >
          {icon && <View className="mr-2">{icon}</View>}
          <TextInput
            ref={ref}
            style={[{ flex: 1 }, style]}
            className={cn(
              "native:text-base native:leading-[1.25] font-inter-400 text-base text-black file:border-0 file:bg-transparent file:font-medium web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 lg:text-sm",
              inputClassName,
            )}
            placeholderTextColor="#777"
            // Override secureTextEntry if it's a password field to allow toggling
            secureTextEntry={secureTextEntry ? !isPasswordVisible : false}
            {...props}
          />
          {secureTextEntry && (
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <EyeOffIcon size={20} width={20} height={20} color="#777" />
              ) : (
                <EyeIcon size={20} width={20} height={20} color="#777" />
              )}
            </TouchableOpacity>
          )}

          {suffixIcon && <View className="ml-2 mr-1">{suffixIcon}</View>}
        </View>
        {error && (
          <Text className="mt-1 pl-3 text-sm text-destructive">{error}</Text>
        )}
      </KeyboardAvoidingView>
    );
  },
);

Input.displayName = "Input";

export { Input };

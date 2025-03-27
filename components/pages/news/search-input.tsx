import { Search } from "lucide-react-native";
import React from "react";
import { View } from "react-native";
import { Input } from "~/components/ui/input";

const SearchInput: React.FC = () => {
  return (
    <View className="w-full px-4 pt-1">
      <Input
        placeholder="Search"
        suffixIcon={<Search size={20} color="#006163" />}
      />
    </View>
  );
};

export default SearchInput;

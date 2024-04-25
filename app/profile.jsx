import { View, Text } from "react-native";
import React from "react";

const profile = () => {
  return (
    <View className="h-full flex-row justify-center items-center">
      <View className="flex-col items-center space-y-4">
        <View className="w-[120px] h-[120px] rounded-full bg-white flex-row border-4 border-[#44807a] justify-center items-center">
          <Text className="text-base text-[#44807a] font-bold">D</Text>
        </View>
        <Text className="text-3xl text-slate-600 font-bold">Daniel</Text>
        <Text className="text-base text-slate-400 font-bold">
          south shawa 16c 🌧️
        </Text>
      </View>
    </View>
  );
};

export default profile;

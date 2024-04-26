import { View, Text } from "react-native";
import React from "react";

const HomeWeatherCard = () => {
  return (
    <View className="flex justify-between items-center space-y-2 w-full">
      <Text className="font-pregular text-sm text-white">
        Upcoming weather Condition
      </Text>
      <Text className="font-pregular text-xs text-yellow-200">
        3 / May / 2016
      </Text>
      <Text className="font-pregular text-base text-white">Rainy</Text>
    </View>
  );
};

export default HomeWeatherCard;

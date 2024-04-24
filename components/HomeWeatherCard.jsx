import { View, Text } from "react-native";
import React from "react";

const HomeWeatherCard = () => {
  return (
    <View className="flex justify-between items-center space-y-2 w-full">
      <Text className="font-pregular text-sm text-white">መጪው ዝናባማ ቀን</Text>
      <Text className="font-pregular text-xs text-yellow-200">
        ማክሰኞ / ግንቦት / 2016
      </Text>
    </View>
  );
};

export default HomeWeatherCard;

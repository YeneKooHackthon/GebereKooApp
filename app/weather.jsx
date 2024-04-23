import { View, Text, TextInput, FlatList, Image } from "react-native";
import React from "react";
import data from "../constants/data";
import icons from "../constants/icons";

const Weather = () => {
  return (
    <View className="bg-white h-full p-4 flex-col space-y-4">
      <Text className="font-pregular text-lg text-[#135D66]">Weather</Text>

      <FlatList
        data={data.communityFourmData}
        renderItem={({ item }) => (
          <View className="bg-black-100 w-[100%] min-h-[86px] rounded-2xl p-4 mt-4 space-x-6">
            <View className="flex-col space-y-4 items-start">
              <View className="min-w-full flex-row justify-between items-center">
                <Text className="font-pregular text-lg text-white">
                  {item.title}
                </Text>
                <Text className="font-pregular text-lg text-red-400">16</Text>
              </View>
              <View className="min-h-[150px] w-full rounded-2xl flex justify-center items-center space-y-4">
                <Image
                  source={icons.weather}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
                <Text className="font-pregular text-lg text-[#135D66]">
                  Rainy
                </Text>
              </View>
            </View>
          </View>
        )}
        extraData={(item) => item.id}
      />
    </View>
  );
};

export default Weather;

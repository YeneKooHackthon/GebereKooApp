import { View, Text, TextInput, FlatList, Image } from "react-native";
import React from "react";
import data from "../constants/data";
import icons from "../constants/icons";

const Education = () => {
  return (
    <View className="bg-white h-full p-4 flex-col space-y-4">
      <Text className="font-pregular text-lg text-[#135D66]">Education</Text>

      <FlatList
        data={data.communityFourmData}
        renderItem={({ item }) => (
          <View className="bg-black-100 w-[100%] min-h-[86px] rounded-2xl p-4 mt-4 space-x-6">
            <View className="flex-col space-y-4 items-start">
              <Text className="font-pregular text-lg text-white">
                {item.title}
              </Text>
              <View className="min-h-[150px] bg-slate-300 w-full rounded-2xl flex justify-center items-center">
                <Image
                  source={icons.videos}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        )}
        extraData={(item) => item.id}
      />
    </View>
  );
};

export default Education;

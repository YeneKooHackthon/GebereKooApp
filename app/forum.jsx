import { View, Text, TextInput, FlatList, Image } from "react-native";
import React from "react";
import data from "../constants/data";
import icons from "../constants/icons";

const Forum = () => {
  return (
    <View className="bg-white h-full p-4 flex-col space-y-4">
      <Text className="font-pregular text-lg text-[#135D66]">
        Community Forum
      </Text>

      <FlatList
        data={data.communityFourmData}
        renderItem={({ item }) => (
          <View className="bg-black-100 w-[100%] min-h-[86px] rounded-2xl p-4 mt-4 space-x-6">
            <View className="flex-col space-y-4 items-start">
              <Text className="font-pregular text-lg text-white ml-5">
                {item.title}
              </Text>
              <Text className="font-pregular text-sm text-slate-300 ml-5">
                {item.content}
              </Text>
            </View>
          </View>
        )}
        extraData={(item) => item.id}
      />
    </View>
  );
};

export default Forum;

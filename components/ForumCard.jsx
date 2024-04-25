import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import images from "../constants/images";

const ForumCard = ({ item, img }) => {
  return (
    <View className="bg-white w-[100%] min-h-[86px] flex rounded-2xl px-4 py-6 mt-1 mb-4 space-y-4">
      <View className="flex-row w-full justify-between items-center">
        <Text className="font-pregular text-lg text-primary">{item.title}</Text>
        <Text className="font-pregular text-sm text-slate-800">
          {item.author}
        </Text>
      </View>
      <View className="h-[180px] overflow-hidden rounded-2xl">
        <Image source={img} resizeMode="cover" className="w-full h-full" />
      </View>

      <Text className="font-pregular text-sm text-slate-700">
        {item.content}
      </Text>
    </View>
  );
};

export default ForumCard;

import { View, Text } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";

const ShopCard = ({ item }) => {
  return (
    <View className="w-full bg-white flex-row my-3 rounded-2xl overflow-hidden">
      <ItemCard item={item} style="" />
      <View className="felx justify-around px-4 py-2 max-w-[50%] ">
        <Text className="text-sm text-slate-800">
          Prosaro® and Aviato® XPro® Prosaro® and Aviato® XPro®
        </Text>
        <Text className="text-slate-800 text-sm underline ml-[30px]">
          0962634568
        </Text>
      </View>
    </View>
  );
};

export default ShopCard;

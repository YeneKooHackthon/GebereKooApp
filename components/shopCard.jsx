import { View, Text, FlatList } from "react-native";
import React from "react";
import ItemCard from "./ItemCard";

const ShopCard = ({ item, uses, desc }) => {
  return (
    <View className="w-full bg-white flex-row my-3 rounded-2xl overflow-hidden">
      <ItemCard item={item} style="" />
      <View className="felx justify-around px-4 py-2 max-w-[50%] ">
        <FlatList
          data={uses}
          extraData={(item) => item.id}
          renderItem={({ item }) => (
            <Text className="text-base text-slate-800">{item}</Text>
          )}
        />
        <Text className="text-primary text-sx my-4">{desc}</Text>
        <Text className="text-slate-800 text-sm underline ml-[30px]">
          0962634568
        </Text>
      </View>
    </View>
  );
};

export default ShopCard;

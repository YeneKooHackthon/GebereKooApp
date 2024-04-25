import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const ItemCard = ({ item, style }) => {
  return (
    <Link href="/shop" className="mr-4">
      <View
        className={`w-[170px] min-h-[66px] flex ${style} bg-white overflow-hidden`}
      >
        <View className="flex items-center bg-gray-50">
          <Image
            source={item.img}
            resizeMode="cover"
            className="w-[220px] h-[160px]"
          />
        </View>
        <View className="px-3 py-4">
          <Text className="font-pregular text-lg text-primary">
            {item.name}
          </Text>
          <View className="flex-row w-full justify-between items-center">
            <Text className="font-pregular text-sm text-slate-600">ዋጋ</Text>
            <Text className="font-pregular text-xs text-primary">
              {item.price}ብር
            </Text>
          </View>
        </View>
      </View>
    </Link>
  );
};

export default ItemCard;

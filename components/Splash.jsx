import { View, Text, Image } from "react-native";
import React from "react";
import images from "../constants/images";

export default function Splash() {
  return (
    <View className="h-full w-full flex justify-between py-[5vh] items-center">
      <Text></Text>
      <View className=" bg-white h-[100px] w-[100px] rounded-full flex justify-center items-center overflow-hidden">
        <Image source={images.leafLoad} className="w-full h-full" />
      </View>
      <Text className=" text-[#44807a]">Powerd by YeneKoo</Text>
    </View>
  );
}

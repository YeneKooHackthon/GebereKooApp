import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-slate-400">
      <Text className="text-2xl">index</Text>
      <Link href="/home">
        <Text className="text-green-600">go to homepage</Text>
      </Link>
    </View>
  );
};

export default index;

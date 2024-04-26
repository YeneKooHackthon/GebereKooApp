import { View, Text } from "react-native";
import React from "react";

import { Link } from "expo-router";

const Header = ({ link, title }) => {
  return (
    <View className="flex-row justify-between items-center px-1 my-2">
      <Text className="font-pregular text-base  text-black">{title}</Text>
      <Link href={link} className="font-pregular text-sm  text-[#77B0AA] p-1">
        <Text>Show more</Text>
      </Link>
    </View>
  );
};

export default Header;

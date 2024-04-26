import { View, Text, Image } from "react-native";
import React from "react";

import { Link } from "expo-router";
import icons from "../constants/icons";

const HomeHeader = ({ name }) => {
  return (
    <View className="flex-row  justify-between items-start">
      <View className="gap-2">
        <Text className="text-lg text-[#44807a] font-pregular capitalize">
          ሰላም {name}
        </Text>
        <Text className="text-xl text-neutral-900 font-pregular">
          እንኳን ደህና መጣህ/ሽ
        </Text>
      </View>

      <Link href="/profile">
        <View className="bg-[#44807a] flex-col w-10 h-10 justify-center rounded-full items-center">
          <Image
            source={icons.user}
            className="w-5 h-5"
            resizeMode="contain"

            // tintColor={color}
          />
        </View>
      </Link>
    </View>
  );
};

export default HomeHeader;

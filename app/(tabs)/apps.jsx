import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "../../constants/icons";
import { Link } from "expo-router";

const Apps = () => {
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <FlatList
        data={[
          { id: "1", name: "Shop", link: "/shop", icon: icons.shop },
          { id: "2", name: "Forum", link: "/forum", icon: icons.forum },
          { id: "3", name: "Weather", link: "/weather", icon: icons.weather },
          {
            id: "4",
            name: "Education",
            link: "/education",
            icon: icons.videos,
          },
        ]}
        horizontal
        contentContainerStyle={styles.listWrapper}
        className="mt-16 grow-0"
        renderItem={({ item }) => (
          <Link href={item.link} className="">
            <View className="flex-col items-center justify-center">
              <View>
                <Image
                  source={item.icon}
                  className="w-12 h-12"
                  resizeMode="contain"
                />
              </View>
              <Text className="text-[#135D66]">{item.name}</Text>
            </View>
          </Link>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});

export default Apps;

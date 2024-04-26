import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "../../constants/icons";
import { Link } from "expo-router";

const Apps = () => {
  return (
    <SafeAreaView className="bg-gray h-full px-4">
      <View className="mt-[7vh] min-h-[70%] flex items-center justify-center space-y-16">
        <Text className="font-pregular text-lg text-primary text-center">
          ሚኒ-መተግበሪያዎች
        </Text>

        <FlatList
          data={[
            { id: "1", name: "ሱቅ", link: "/shop", icon: icons.shop },
            {
              id: "2",
              name: "የማህበረሰብ መድረኮች",
              link: "/forum",
              icon: icons.forum,
            },
          ]}
          horizontal
          contentContainerStyle={styles.listWrapper}
          className="mt-16 grow-0"
          renderItem={({ item }) => (
            <View className="min-w-[42vw] min-h-[130px] bg-white p-4 felx-row justify-center items-center rounded-2xl">
              <Link href={item.link}>
                <View className="flex-col items-center justify-center space-y-2">
                  <View>
                    <Image
                      source={item.icon}
                      className="w-12 h-12"
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="text-primary text-center">{item.name}</Text>
                </View>
              </Link>
            </View>
          )}
        />
        <FlatList
          data={[
            {
              id: "3",
              name: "የአየር ሁኔታ",
              link: "/weather",
              icon: icons.weather,
            },
            {
              id: "4",
              name: "ትምህርት",
              link: "/education",
              icon: icons.videos,
            },
          ]}
          horizontal
          contentContainerStyle={styles.listWrapper}
          className="mt-16 grow-0"
          renderItem={({ item }) => (
            <View className="min-w-[42vw] min-h-[120px] bg-white p-4 felx-row justify-center items-center rounded-2xl">
              <Link href={item.link}>
                <View className="flex-col items-center justify-center space-y-2">
                  <View>
                    <Image
                      source={item.icon}
                      className="w-12 h-12"
                      resizeMode="contain"
                    />
                  </View>
                  <Text className="text-primary text-center">{item.name}</Text>
                </View>
              </Link>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
});

export default Apps;

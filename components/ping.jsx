import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { AppColors } from "./constColors";

export default function PingAni({ onPress }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const pingInterval = setInterval(() => {
      setActive((prev) => (prev == 3 ? 0 : prev + 1));
    }, 600); // Change ping visibility every 1000ms (1 second)

    return () => {
      clearInterval(pingInterval);
    };
  }, []);

  return (
    <View style={styles.container} className="relative w-full">
      <View
        className="absolute bottom-[17px] w-[60px] h-[60px] flex justify-center items-center rounded-full"
        style={{ backgroundColor: "#44807a" }}
      >
        <MaterialIcons
          name={"close"}
          size={28}
          color="white"
          onPress={onPress}
        />
      </View>
      <View className="flex gap-1">
        <View className="flex flex-row gap-1">
          {[1, 0].map((item, index) => (
            <View
              key={index}
              style={{
                width: 30,
                height: 30,
                backgroundColor:
                  item == active ? "#44807a" : AppColors.main + "22",
              }}
            />
          ))}
        </View>
        <View className="flex flex-row gap-1">
          {[2, 3].map((item, index) => (
            <View
              key={index}
              style={{
                width: 30,
                height: 30,
                backgroundColor:
                  item == active ? "#44807a" : AppColors.main + "22",
              }}
            />
          ))}
        </View>
      </View>
      <Text className="pt-2 font-bold">AI onwork please holdon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

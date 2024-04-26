import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  RefreshControl,
} from "react-native";
import React from "react";
import data from "../constants/data";
import icons from "../constants/icons";

import { useState, useEffect } from "react";

const Weather = () => {
  const API_KEY = "a884030e40811703bc4953af4a02e498";
  const [refreshing, setRefreshing] = useState(false);
  const [wdata, setwData] = useState("");

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  const weatherGeter = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${"addis ababa"}&appid=${API_KEY}`
      );
      const weatherData = await res.json();
      console.log(weatherData);
      setwData(weatherData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    weatherGeter();
  }, []);
  return (
    <View className="bg-gray h-full p-4 flex-col space-y-4">
      <Text className="font-pregular text-lg text-[#135D66]">Weather</Text>

      <FlatList
        data={data.communityFourmData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            className={`bg-white ${
              item.id === "1" ? "border-b-4  border-[#135D66]" : ""
            } w-[100%] min-h-[86px] rounded-2xl p-4 mt-4 space-x-6`}
          >
            <View
              className={`${
                item.id === "1"
                  ? "flex-col"
                  : "flex-row items-center justify-center"
              } space-y-4 items-center`}
            >
              <View
                className={`${
                  item.id === "1"
                    ? "min-w-full flex-row justify-between items-center"
                    : "items-center"
                } `}
              >
                <Text className="font-pregular text-lg text-[#135D66]">
                  {item.title}
                </Text>
                <Text className="font-pregular text-lg text-red-400">16°C</Text>
              </View>
              <View
                className={`w-full rounded-2xl flex justify-center items-center  ${
                  item.id === "1" ? "" : "max-w-[50%]"
                }`}
              >
                <Image
                  source={icons.weather}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
                <Text className="font-pregular text-lg text-[#135D66]">
                  Rainy
                </Text>
              </View>
            </View>
          </View>
        )}
        extraData={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Weather;

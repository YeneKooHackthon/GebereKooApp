import { View, FlatList, RefreshControl } from "react-native";

import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import { Link } from "expo-router";

// import icons from "../../constants/icons";

import data from "../../constants/data";
// import images from "../../constants/images";
import Header from "../../components/Header";
import ItemCard from "../../components/ItemCard";
import HomeHeader from "../../components/HomeHeader";
import HomeWeatherCard from "../../components/HomeWeatherCard";
import ForumCard from "../../components/ForumCard";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [name, setName] = useState(null);
  // HomeWeatherCard;

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      if (value !== null) {
        // value previously stored
        console.log("zzz", value);
        setName(value);
      }
    } catch (e) {
      // error reading value
      console.log("zzz", e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <SafeAreaView className="bg-gray h-full px-4">
      <FlatList
        data={data.communityFourmData}
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        className="mt-6"
        // horizontal

        renderItem={({ item }) => (
          <ForumCard item={item} link="/forum" img={item.img} />
        )}
        extraData={(item) => item.id}
        ListHeaderComponent={() => (
          <View className="flex-col space-y-6">
            <HomeHeader name={name ?? "GebereKoo"} />
            <View className="flex-col space-y-3">
              <Header title="Weaher condition" link="/weather" />
              <View className="bg-[#44807a] w-full min-h-[50px] mr-2 flex rounded-2xl p-3 space-y-4">
                <HomeWeatherCard />
              </View>
            </View>
            <View className="flex-col space-y-1">
              <Header title="Seeds" link="/shop" />
              <FlatList
                data={data.seeds}
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, paddingBottom: 20 }}
                horizontal
                renderItem={({ item }) => (
                  <ItemCard item={item} style="rounded-2xl" />
                )}
                extraData={(item) => item.id}
              />
            </View>
            <View className="flex-col space-y-1">
              <Header title="Pesticides" link="/shop" />
              <FlatList
                data={data.pesticides}
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, paddingBottom: 20 }}
                horizontal
                renderItem={({ item }) => (
                  <ItemCard item={item} style="rounded-2xl" />
                )}
                extraData={(item) => item.id}
              />
            </View>
            <Header title="community forum" link="/forum" />
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

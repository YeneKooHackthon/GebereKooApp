import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  RefreshControl,
} from "react-native";

import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";

import icons from "../../constants/icons";

import data from "../../constants/data";
import images from "../../constants/images";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <SafeAreaView className="bg-white h-full px-4">
      <FlatList
        data={data.communityFourmData}
        showsVerticalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        className="mt-8"
        // horizontal

        renderItem={({ item }) => (
          <View className="bg-primary w-[100%] min-h-[86px] flex rounded-2xl p-4 mt-4">
            <Text className="font-pregular text-lg text-white">
              {item.title}
            </Text>
            <Text className="font-pregular text-sm text-slate-300">
              {item.content}
            </Text>
          </View>
        )}
        extraData={(item) => item.id}
        ListHeaderComponent={() => (
          <View className="flex-col space-y-6">
            <View className="flex-row  justify-between items-start">
              <View className="gap-2">
                <Text className="text-lg text-[#659a9e] font-pregular ">
                  Hi Daniel
                </Text>
                <Text className="text-2xl text-neutral-900 font-pregular">
                  Wellcome back
                </Text>
              </View>

              <Link href="/profile">
                <View className="bg-primary flex-col w-10 h-10 justify-center rounded-full items-center">
                  <Image
                    source={icons.user}
                    className="w-5 h-5"
                    resizeMode="contain"

                    // tintColor={color}
                  />
                </View>
              </Link>
            </View>

            <TextInput
              className="h-12 w-[100%] border border-primary text-neutral-900 font-pregular rounded-3xl pl-8"
              // style={styles.input}
              // onChangeText={onChangeNumber}
              // value={text}
              placeholder="search for chemical"
              // keyboardType=""
            />
            <View className="flex-col space-y-3">
              <View className="flex-row justify-between items-center px-1">
                <Text className="font-pregular text-base  text-black">
                  Weather predictions
                </Text>
                <Link
                  href="/weather"
                  className="font-pregular text-sm  text-[#77B0AA] p-1"
                >
                  <Text>show more</Text>
                </Link>
              </View>
              <View className="bg-primary w-full min-h-[50px] mr-2 flex rounded-2xl p-3 space-y-4">
                <View className="flex justify-between items-center space-y-2 w-full">
                  <Text className="font-pregular text-sm text-white">
                    Upcoming rainy day
                  </Text>
                  <Text className="font-pregular text-xs text-yellow-200">
                    tue / april / 2016
                  </Text>
                </View>
              </View>
            </View>
            <View className="flex-col space-y-3">
              <View className="flex-row justify-between items-center px-1">
                <Text className="font-pregular text-base  text-black">
                  Seeds
                </Text>
                <Link
                  href="/shop"
                  className="font-pregular text-sm  text-[#77B0AA] p-1"
                >
                  <Text>show more</Text>
                </Link>
              </View>
              <FlatList
                data={data.seeds}
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0, paddingBottom: 5 }}
                horizontal
                renderItem={({ item }) => (
                  <View className="w-[170px] min-h-[66px] mr-2 flex rounded-2xl space-y-4 border border-primary overflow-hidden">
                    <View className=" flex-row w-full justify-between items-center p-3">
                      <Text className="font-pregular text-sm text-black">
                        name
                      </Text>
                      <Text className="font-pregular text-xs text-primary">
                        {item.name}
                      </Text>
                    </View>
                    <View className="flex items-center">
                      <Image
                        source={item.img}
                        resizeMode="contain"
                        className="w-[155px] h-[155px]"
                      />
                    </View>
                    <View className="bg-primary flex-row w-full justify-between items-center p-3">
                      <Text className="font-pregular text-sm text-white">
                        Price
                      </Text>
                      <Text className="font-pregular text-xs text-yellow-200">
                        {item.price}
                      </Text>
                    </View>
                  </View>
                )}
                extraData={(item) => item.id}
              />
            </View>
            <View className="flex-row justify-between items-center px-1">
              <Text className="font-pregular text-base  text-black">
                community fourm
              </Text>
              <Link
                href="/forum"
                className="font-pregular text-sm  text-[#77B0AA] p-1"
              >
                <Text>show more</Text>
              </Link>
            </View>
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

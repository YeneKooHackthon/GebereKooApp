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
        style={{ flexGrow: 0 }}
        className="mt-8"
        // horizontal
        renderItem={({ item }) => (
          <View className="bg-black-100 w-[100%] min-h-[86px] flex rounded-2xl p-4 mt-4">
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
                <Text className="text-lg text-[#659a9e] font-pregular">
                  Hi Daniel
                </Text>
                <Text className="text-2xl text-neutral-900 font-pregular">
                  Wellcome back
                </Text>
              </View>
              <View className="w-14 h-14 bg-[#135D66] rounded-full  flex justify-center items-center ">
                <Link
                  href="/profile"
                  className="w-[90%] h-[90%]  text-center flex justify-center items-center"
                >
                  <Image
                    source={icons.user}
                    className="w-7 h-7"
                    resizeMode="contain"
                    // tintColor={color}
                  />
                </Link>
              </View>
            </View>

            <TextInput
              className="h-12 w-[100%] border border-[#135D66] text-neutral-900 font-pregular rounded-3xl pl-8"
              // style={styles.input}
              // onChangeText={onChangeNumber}
              // value={text}
              placeholder="search for chemical"
              // keyboardType=""
            />
            <View className="flex-col space-y-3">
              <View className="flex-row justify-between items-center px-1">
                <Text className="font-pregular text-base  text-black">
                  Chemiclas
                </Text>
                <Text className="font-pregular text-sm  text-[#77B0AA]">
                  show more
                </Text>
              </View>
              <FlatList
                data={data.chemicals}
                style={{ flexGrow: 0, paddingBottom: 5 }}
                horizontal
                renderItem={({ item }) => (
                  <View className="bg-black-100 w-[156px] min-h-[66px] mr-2 flex rounded-2xl p-3 space-y-4">
                    <Text className="font-pregular text-lg text-white">
                      {item.name}
                    </Text>
                    <View className="flex-row w-full justify-between items-center">
                      <Text className="font-pregular text-sm text-white">
                        Price
                      </Text>
                      <Text className="font-pregular text-xs text-green-700">
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
              <Text className="font-pregular text-sm  text-[#77B0AA]">
                Learn more
              </Text>
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

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

import { useState } from "react";

const Shop = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <View className="bg-white h-full p-4 flex-col space-y-4">
      <Text className="font-pregular text-lg text-primary">Chemicals shop</Text>
      <TextInput
        className="h-10 w-[100%] border border-primary text-neutral-900 font-pregular rounded-3xl pl-8"
        // style={styles.input}
        // onChangeText={onChangeNumber}
        // value={text}
        placeholder="search for chemical"
        // keyboardType=""
      />
      <FlatList
        data={data.chemicals}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="bg-primary w-[100%] min-h-[86px] flex rounded-2xl p-4 mt-4 flex-row space-x-6">
            <View className="flex-col space-y-4 items-start">
              <Text className="font-pregular text-lg text-white ml-5">
                {item.name}
              </Text>

              <Image
                source={icons.pesticides}
                className="w-20 h-20"
                // resizeMode="contain"
              />

              <Text className="font-pregular text-sm text-slate-300 ml-5">
                {item.price}
              </Text>
            </View>
            <View className="max-w-[70%] flex-col justify-between">
              <FlatList
                data={[
                  { id: "1", name: "carbon florayd" },
                  { id: "2", name: "oxide florayd" },
                  { id: "3", name: "nitrogen florayd" },
                ]}
                renderItem={({ item }) => (
                  <Text className="text-white mb-4">
                    {item.id}. {item.name}
                  </Text>
                )}
                extraData={(item) => item.id}
              />
              <Text className="text-blue-600 underline mt-2">0961626364</Text>
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

export default Shop;

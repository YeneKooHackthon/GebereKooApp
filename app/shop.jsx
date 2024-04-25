import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  RefreshControl,
  Pressable,
} from "react-native";
import React from "react";
import data from "../constants/data";
import icons from "../constants/icons";

import { useState } from "react";
import ShopCard from "../components/shopCard";

const Shop = () => {
  const [refreshing, setRefreshing] = useState(false);

  const [active, setActive] = useState("all");

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <View className="bg-gray h-full p-4 flex-col space-y-2">
      <Text className="font-pregular text-2xl text-primary text-center">
        ሱቅ
      </Text>

      <FlatList
        data={data.pesticides}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => active !== "seed" && <ShopCard item={item} />}
        extraData={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={() => (
          <View className="flex space-y-8 mt-2">
            <TextInput
              className="h-10 w-[100%] border border-primary text-neutral-900 font-pregular rounded-3xl pl-8"
              // style={styles.input}
              // onChangeText={onChangeNumber}
              // value={text}
              placeholder="search"
              // keyboardType=""
            />
            <View className="w-full flex-row justify-around items-center space-x-8">
              <Pressable onPress={() => setActive("all")}>
                <Text
                  className={`text-primary ${
                    active === "all" && "bg-white"
                  } px-6 py-2 rounded-2xl`}
                >
                  ሁሉም
                </Text>
              </Pressable>
              <Pressable onPress={() => setActive("pest")}>
                <Text
                  className={`text-primary ${
                    active === "pest" && "bg-white"
                  } px-6 py-2 rounded-2xl`}
                >
                  {" "}
                  ፀረ-ተባይ
                </Text>
              </Pressable>
              <Pressable onPress={() => setActive("seed")}>
                <Text
                  className={`text-primary ${
                    active === "seed" && "bg-white"
                  } px-6 py-2 rounded-2xl`}
                >
                  ምርጥዘሮች
                </Text>
              </Pressable>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <FlatList
            data={data.seeds}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              active !== "pest" && <ShopCard item={item} />
            }
            extraData={(item) => item.id}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      />
    </View>
  );
};

export default Shop;

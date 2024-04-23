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

const Forum = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <View className="bg-white h-full p-4 flex-col space-y-4">
      <Text className="font-pregular text-lg text-primary">
        Community Forum
      </Text>
      <FlatList
        data={data.communityFourmData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="bg-primary w-[100%] min-h-[86px] rounded-2xl p-4 mt-4 space-x-6">
            <View className="flex-col space-y-4 items-start">
              <View className="flex-row justify-between items-center w-full">
                <Text className="font-pregular text-lg text-white ml-5">
                  {item.title}
                </Text>
                <Text className="font-pregular text-sm text-slate-300 ml-5">
                  DA. Debebe kebede
                </Text>
              </View>
              <Text className="font-pregular text-sm text-slate-200 ml-5">
                {item.content}
              </Text>
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

export default Forum;

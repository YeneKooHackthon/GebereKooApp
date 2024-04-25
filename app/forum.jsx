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
import ForumCard from "../components/ForumCard";

const Forum = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <View className="bg-gray h-full p-4 flex-col space-y-4">
      <Text className="font-pregular text-lg text-primary">
        Community Forum
      </Text>
      <FlatList
        data={data.communityFourmData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ForumCard item={item} img={item.img} />}
        extraData={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default Forum;

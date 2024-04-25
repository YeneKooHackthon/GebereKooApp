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

const Education = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };
  return (
    <View className="bg-gary h-full p-4 flex-col space-y-2">
      <Text className="font-pregular text-lg text-primary">Education</Text>

      <FlatList
        data={data.communityFourmData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="bg-white w-[100%] min-h-[86px] rounded-2xl p-4 mt-4 space-x-6">
            <View className="flex-col space-y-4 items-start">
              <Text className="font-pregular text-lg text-[#44807a]">
                {item.title}
              </Text>
              <Text className="font-pregular text-sm text-slate-700">
                ማንኛውንም ፀረ-ተባይ ከመጠቀምዎ በፊት በሰብልዎ ላይ ጉዳት የሚያደርሱ ተባዮችን ይለዩ። ሁሉም ተባዮች
                ጎጂ አይደሉም, እና አንዳንዶቹም ጠቃሚ ሊሆኑ ይችላሉ
              </Text>
              <View className="min-h-[150px] bg-slate-100 w-full rounded-2xl flex justify-center items-center">
                <Image
                  source={icons.videos}
                  className="w-10 h-10"
                  resizeMode="contain"
                />
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

export default Education;

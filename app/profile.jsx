import { View, Text, Pressable } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const profile = () => {
  const [name, setName] = React.useState(null);

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
  const removeData = async () => {
    try {
      await AsyncStorage.clear();
      router.navigate("/login");
    } catch (e) {
      alert("loging out issue please try again");
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <View className="h-full flex justify-between py-[10vh] items-center">
      <View></View>
      <View className="flex-col items-center space-y-4">
        <View className="w-[120px] h-[120px] rounded-full bg-white flex-row border-4 border-[#44807a] justify-center items-center">
          <Text className="text-base text-[#44807a] font-bold uppercase">
            {name?.split("")[0]}
          </Text>
        </View>
        <Text className="text-3xl text-slate-600 font-bold capitalize">
          {name}
        </Text>
        <Text className="text-base text-slate-400 font-bold">
          south shawa 16c 🌧️
        </Text>
      </View>

      <Pressable onPress={() => removeData()}>
        <Text className="bg-white py-2 px-4 rounded-md">Logout</Text>
      </Pressable>
    </View>
  );
};

export default profile;

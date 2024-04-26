import { View, Text, Pressable, Image, ActivityIndicator } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { router } from "expo-router";
import { getAuthResult } from "../api/api";

export default function Login() {
  const [phone, setPhone] = React.useState(null);
  const [psw, setPsw] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("success");
    } catch (e) {
      console.log("errr", e);
      // saving error
    }
  };

  const res = async () => {
    setLoading(true);
    const a = getAuthResult(phone, psw)
      .then(async (res) => {
        console.log(res?.data?.record);

        await storeData("username", res?.data?.record?.fullname);
        setLoading(false);
        router.replace("/home");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <View className="px-[4vw] relative flex h-full w-full py-[10vh] justify-around items-center">
      <View className="w-full gap-3 flex justify-center items-center h-auto py-3">
        <Text className="text-2xl font-bold text-[#44807a]">Welcome Back</Text>
        <Text className="text-gray-600">Login to your account</Text>
      </View>

      <View className="flex w-full gap-6 justify-center items-center">
        <View className="bg-[#44807a33] pl-5 flex-row justify-center items-center rounded-md h-[45px] overflow-hidden">
          <MaterialCommunityIcons name="account" size={24} color="#44807a" />
          <TextInput
            onChangeText={(res) => setPhone(res)}
            placeholder="Phone"
            placeholderTextColor="#44807a"
            className="w-full h-full pl-2"
          />
        </View>
        <View className="bg-[#44807a33] pl-5 flex-row justify-center items-center rounded-md h-[45px] overflow-hidden">
          <FontAwesome name="lock" size={24} color="#44807a" />
          <TextInput
            onChangeText={(res) => setPsw(res)}
            placeholder="Password"
            placeholderTextColor="#44807a"
            className="w-full h-full  pl-2"
          />
        </View>
      </View>
      <View className="flex w-full justify-center items-center gap-3">
        <Pressable
          onPress={() => res()}
          className="bg-[#44807a] w-full flex-row justify-center items-center rounded-full h-[45px] overflow-hidden"
        >
          {loading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text className="text-white">Login</Text>
          )}
        </Pressable>
        <Pressable onPress={() => router.replace("/signup")} className="">
          <Text className="text-black ">
            Dont have an account? <Text className="text-[#44807a]">SignUp</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

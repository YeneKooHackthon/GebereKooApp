import {
  View,
  Text,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";

import { TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { createAccount } from "../api/api";

export default function SignUp() {
  const [fullname, setFullname] = React.useState();
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState();
  const [cpassword, setCpassword] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const res = async () => {
    console.log(fullname, phone, password, cpassword);
    setLoading(true);
    const a = await createAccount(phone, fullname, password, cpassword)
      .then((res) => {
        console.log(res?.data?.fullname);
        router.replace("/login");
        setLoading(false);
      })
      .catch((err) => {
        alert("something went wrong");
        setLoading(false);
        alert("Wrong password or number");
      });
  };

  return (
    <ScrollView className="h-full">
      <View className="px-[6vw] flex h-full w-full py-[10vh] justify-around items-center">
        <View className="w-full relative gap-3 flex justify-center items-center h-auto py-3">
          {/* <Image
        source={require("../assets/images/seasons-img.jpeg")}
        className="absolute top-0 rounded-[10px] w-full h-full"
      /> */}
          <Text className="text-2xl font-bold text-[#44807a]">Register</Text>
          <Text className="text-gray-700">Create New account</Text>
        </View>

        <View className="flex w-full gap-y-6 justify-center items-center mt-4">
          <View className="bg-[#44807a33] pl-5 flex-row justify-center items-center rounded-md h-[45px] overflow-hidden">
            <MaterialCommunityIcons name="account" size={24} color="#44807a" />
            <TextInput
              onChangeText={(e) => setFullname(e)}
              placeholder="Full Name"
              placeholderTextColor="#44807a"
              className="w-full h-full pl-2"
            />
          </View>
          <View className="bg-[#44807a33] pl-5 flex-row justify-center items-center rounded-md h-[45px] overflow-hidden">
            <FontAwesome name="phone-square" size={24} color="#44807a" />
            <TextInput
              onChangeText={(e) => setPhone(e)}
              placeholder="Phone"
              placeholderTextColor="#44807a"
              className="w-full h-full pl-2"
            />
          </View>
          <View className="bg-[#44807a33] pl-5 flex-row justify-center items-center rounded-md h-[45px] overflow-hidden">
            <FontAwesome name="lock" size={24} color="#44807a" />
            <TextInput
              onChangeText={(e) => setPassword(e)}
              placeholder="Password"
              placeholderTextColor="#44807a"
              className="w-full h-full  pl-2"
            />
          </View>
          <View className="bg-[#44807a33] pl-5 flex-row justify-center items-center rounded-md h-[45px] overflow-hidden">
            <FontAwesome name="lock" size={24} color="#44807a" />
            <TextInput
              onChangeText={(e) => setCpassword(e)}
              placeholder="Confirm Password"
              placeholderTextColor="#44807a"
              className="w-full h-full  pl-2"
            />
          </View>
        </View>
        <View className="flex w-full justify-center items-center gap-3 mt-4">
          <Pressable
            onPress={() => res()}
            className="bg-[#44807a] w-full flex-row justify-center items-center rounded-full h-[45px] overflow-hidden"
          >
            {loading ? (
              <ActivityIndicator color="white" size="large" />
            ) : (
              <Text className="text-white">SignUp</Text>
            )}
          </Pressable>
          <Pressable onPress={() => router.replace("/login")} className="">
            <Text className="text-black ">
              Already have an account?{" "}
              <Text className="text-[#44807a]">LogIn</Text>
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

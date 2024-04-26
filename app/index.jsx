import Home from "./(tabs)/home";
import Login from "./login";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "../components/Splash";
import { router } from "expo-router";

const index = () => {
  // const [name, setName] = React.useState(1);

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem("username");
  //     if (value !== null) {
  //       router.replace("/home");
  //     }
  //   } catch (e) {
  //     setName(3);
  //   }
  // };

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     getData();
  //   }, 2500);
  // }, []);

  return <Login />;
};

export default index;

import Home from "./(tabs)/home";
import Login from "./login";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "../components/Splash";
import { router } from "expo-router";

const index = () => {
  const [name, setName] = React.useState(1);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      console.log(value);
      if (value !== null) {
        router.replace("/home");
      } else {
        setName(3);
      }
    } catch (e) {
      setName(3);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2500);
  }, []);

  console.log(name);

  return name === 1 ? <Splash /> : <Login />;
};

export default index;

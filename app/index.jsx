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
      if (value !== null) {
        console.log("zzz", value);
        // setName(2);
        router.replace("/home");
      }
    } catch (e) {
      setName(3);
      console.log("zzz", e);
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2500);
  }, []);

  // if (name == 2) return <Home />;

  return name == 1 ? <Splash /> : <Login />;
};

export default index;

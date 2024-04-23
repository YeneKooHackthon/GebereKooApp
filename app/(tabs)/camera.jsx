import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import { Ionicons } from '@expo/vector-icons';

import icons from "../../constants/icons";
import CameraBox from "../../components/CameraBox";
import Gallery from "../../components/Gallery";

const Detect = () => {
  const [tourch, setTourch] = useState(false);
  return (
    <SafeAreaView className="h-full">
      <View className="h-full flex-col items-center justify-end gap-2">
        <View className="min-h-[70%] min-w-[90%] rounded-2xl overflow-hidden">
          {tourch ? <CameraBox tourch={tourch} /> : <Gallery />}
        </View>

        <View className="flex-row justify-around items-center px-4 w-[80%] py-4 rounded-2xl">
          <View className="bg-[#DDDDDD] p-3 rounded-3xl">
            <Image source={icons.gallery} className="w-8 h-8" />
          </View>
          <View className="border border-[#77B0AA] p-2 rounded-full">
            <View className="bg-[#135D66] p-4 rounded-full">
              <Image source={icons.scanSecond} className="w-12 h-12" />
            </View>
          </View>
          <View className="bg-[#DDDDDD] p-3 rounded-3xl">
            <TouchableOpacity onPress={() => setTourch(!tourch)}>
              <Image source={icons.tourch} className="w-8 h-8" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detect;

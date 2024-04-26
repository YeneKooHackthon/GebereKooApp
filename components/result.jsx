import { View, Image, Text, Pressable, FlatList } from "react-native";

import { FontAwesome6 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import PingAni from "./ping";

import { SafeAreaView } from "react-native-safe-area-context";

import images from "../constants/images";
import ItemCard from "./ItemCard";

export default function Result({ imgurl, onClose, data }) {
  return (
    <SafeAreaView className="bg-slate-100 w-[100%] h-[100vh] px-4">
      {imgurl ? (
        <>
          <View className="flex-row justify-between mb-4 items-center">
            <Pressable onPress={onClose}>
              <Text className="text-black text-lg ml-2 font-pmedium">
                {"<"}Back
              </Text>
            </Pressable>
          </View>

          <FlatList
            data={data?.symptoms}
            // scrollEnabled
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View className="w-full flex items-center space-y-6 py-4">
                <Text className="text-[#44807a] font-bold text-2xl ml-2 text-left w-full">
                  Results
                </Text>
                <View className="IMAGE w-full flex items-center">
                  <View className="overflow-hidden w-full h-[250px] rounded-2xl">
                    {data?.images && (
                      <Image
                        source={{ uri: data?.images[0] }}
                        className="w-full h-full"
                        //   resizeMode="contain"
                      />
                    )}
                  </View>
                  <View className="w-[120px] h-[120px] border-4 mt-[-60px]  border-slate-100 rounded-full overflow-hidden">
                    <Image
                      source={{ uri: imgurl }}
                      className="w-full h-full"
                      // resizeMode="contain"
                    />
                  </View>
                </View>
                <View className="NAME w-full flex items-center space-y-4">
                  <Text className="text-2xl text-[#44807a] text-center font-bold">
                    {data?.plant_name}
                  </Text>
                  <View className="w-full flex-row items-center justify-between">
                    <Text className="text-sm bg-[#44807a40] py-3 px-6 rounded-2xl text-[#44807a] text-center font-bold">
                      {data?.common_name}
                    </Text>
                    <Text className="text-sm bg-[#44807a40] py-3 px-6 rounded-2xl text-[#44807a] text-center font-bold">
                      {data?.scientific_name}
                    </Text>
                    <Text className="text-sm bg-[#44807a40] py-3 px-6 rounded-2xl text-[#44807a] text-center font-bold">
                      {data?.genus}
                    </Text>
                  </View>
                </View>

                <View
                  className={`STATUS-1 w-full ${
                    data?.status === "red" ? "bg-red-100" : "bg-[#44807a40]"
                  } flex-row justify-between items-center p-4  rounded-2xl`}
                >
                  <Text className="text-base ml-4">Disease</Text>
                  <Text
                    className={`text-base text-white py-2 px-4 rounded-xl font-bold uppercase ${
                      data?.status === "red" ? "bg-red-500" : "bg-[#44807a]"
                    }`}
                  >
                    {data?.status === "red" ? data?.disease : "HEALTHY"}
                  </Text>
                </View>
                <View className="GALLERY w-full p-4 flex space-y-4  rounded-2xl">
                  <Text className="text-2xl text-[#44807a] font-bold">
                    Photo Gallery
                  </Text>
                  <FlatList
                    data={data?.images.slice(1)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                      <View className="w-[150px] h-[150px] mr-2 bg-white overflow-hidden rounded-2xl flex space-y-4 items-center">
                        <Image
                          source={{ uri: item }}
                          className="w-full h-full"
                          resizeMode="cover"
                        />
                      </View>
                    )}
                  />
                </View>
                <View className="DESCRIPTION w-full p-4 flex space-y-4 bg-white rounded-2xl">
                  <Text className="text-2xl text-[#44807a] font-bold">
                    Description
                  </Text>
                  <Text className="text-slate-600 text-base">
                    {data?.description}
                  </Text>
                </View>
                <View className="STATUS-2 w-full flex-row space-x-2 justify-around">
                  <View className="max-w-[50%] px-4 py-8 bg-green-100 rounded-2xl flex space-y-4 items-center">
                    <View className="flex-row space-x-1 items-center">
                      <FontAwesome6
                        name="temperature-high"
                        size={24}
                        color="black"
                      />
                      <Text>Temp</Text>
                    </View>
                    <Text className="text-4xl">{data?.temperature}</Text>
                  </View>
                  <View className="max-w-[50%] px-4 py-8 bg-red-100 rounded-2xl flex space-y-4 items-center">
                    <View className="flex-row space-x-1 items-center">
                      <SimpleLineIcons name="drop" size={24} color="black" />
                      <Text>humidity</Text>
                    </View>
                    <Text className="text-4xl">{data?.humidity}</Text>
                  </View>
                </View>
                <View className="CAUSE w-full p-4 flex space-y-4 bg-white rounded-2xl">
                  <Text className="text-2xl text-[#44807a] font-bold">
                    Causes
                  </Text>
                  <FlatList
                    data={data?.causes}
                    renderItem={({ item, index }) => (
                      <Text className="mb-4 text-base">
                        {index + 1}. {item}
                      </Text>
                    )}
                  />
                </View>
                <View className="TREATMENT w-full p-4 flex space-y-4 bg-white rounded-2xl">
                  <Text className="text-2xl text-[#44807a] font-bold">
                    Treatments
                  </Text>
                  <FlatList
                    data={data?.prevention_or_treatment_mechanisms}
                    renderItem={({ item, index }) => (
                      <Text className="mb-4 text-base">
                        {index + 1}. {item}
                      </Text>
                    )}
                  />
                </View>
                <View className="PESTCIDES w-full p-4 flex space-y-4  rounded-2xl">
                  <Text className="text-2xl text-[#44807a] font-bold">
                    Pestcides
                  </Text>
                  <FlatList
                    data={
                      data?.status === "red"
                        ? data?.pesticides
                        : ["chem1", "chem2", "chem3"]
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                      <ItemCard
                        style="rounded-2xl"
                        item={{ name: item, img: images.pestcide2, price: 150 }}
                      />
                    )}
                  />
                </View>
              </View>
            )}
          />
        </>
      ) : (
        <PingAni onPress={onClose} />
      )}
    </SafeAreaView>
  );
}

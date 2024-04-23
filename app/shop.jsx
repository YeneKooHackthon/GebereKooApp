import { View, Text, TextInput, FlatList, Image } from "react-native";
import React from "react";
import data from "../constants/data";
import icons from "../constants/icons";

const Shop = () => {
  return (
    <View className="bg-white h-full p-4 flex-col space-y-4">
      <Text className="font-pregular text-lg text-[#135D66]">
        Chemicals shop
      </Text>
      <TextInput
        className="h-10 w-[100%] border border-[#135D66] text-neutral-900 font-pregular rounded-3xl pl-8"
        // style={styles.input}
        // onChangeText={onChangeNumber}
        // value={text}
        placeholder="search for chemical"
        // keyboardType=""
      />
      <FlatList
        data={data.chemicals}
        renderItem={({ item }) => (
          <View className="bg-black-100 w-[100%] min-h-[86px] flex rounded-2xl p-4 mt-4 flex-row space-x-6">
            <View className="flex-col space-y-4 items-start">
              <Text className="font-pregular text-lg text-white ml-5">
                {item.name}
              </Text>

              <Image
                source={icons.pesticides}
                className="w-20 h-20"
                // resizeMode="contain"
              />

              <Text className="font-pregular text-sm text-slate-300 ml-5">
                {item.price}
              </Text>
            </View>
            <View className="max-w-[70%]">
              <Text className="text-white">
                Pesticides kill, repel, or control forms of animal and plant
                life considered to damage or be a nuisance in agriculture and
                domestic life. Used broadly, the term includes these types of
                chemicals: Herbicides destroy or control weeds and other
                unwanted vegetation.
              </Text>
              <Text className="text-blue-600 underline">0961626364</Text>
            </View>
          </View>
        )}
        extraData={(item) => item.id}
      />
    </View>
  );
};

export default Shop;

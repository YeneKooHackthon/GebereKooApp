import { View, Text } from "react-native";
import React from "react";

const PlantNames = ({ name }) => {
  return (
    <Text className="text-sm mr-3 bg-[#44807a40] py-3 px-6 rounded-2xl text-[#44807a] text-center font-bold">
      {name}
    </Text>
  );
};

export default PlantNames;

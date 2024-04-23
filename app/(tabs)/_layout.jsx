import { Tabs } from "expo-router";
// import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import icons from "../../constants/icons";

export default function App() {
  const TabIcon = ({ color, focused, title, name, icon }) => {
    return (
      <View className="flex-col items-center gap-[3px]">
        {/* <Ionicons name="scan" size={24} color="black" /> */}
        <Image
          // name={icon}
          source={icon}
          resizeMode="contain"
          tintColor={color}
          color={color}
          className="w-6 h-6"
          // size={size}
          // style={iconStyle}
        />
        <Text
          className={`${
            focused ? "text-sm text-[#135D66]" : "text-xs text-[#77B0AA]"
          } `}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "#135D66",
        tabBarInactiveTintColor: "#77B0AA",

        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "white",
          height: 64,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.home}
              name="Home"
              // size={28}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.scan}
              name="Scan"
              // size={38}
              // iconStyle={{ padding: "5px", backgroundColor: "red" }}
            />
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="apps"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              focused={focused}
              icon={icons.apps}
              name="Apps"
              // size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}

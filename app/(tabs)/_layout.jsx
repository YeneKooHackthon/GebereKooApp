import { Tabs } from "expo-router";
// import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import icons from "../../constants/icons";

export default function App() {
  const TabIcon = ({ color, focused, name, icon, iconStyle, contStyle }) => {
    return (
      <View className={`flex-col items-center gap-[3px] ${contStyle}`}>
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          color={color}
          className={iconStyle}
        />
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: "rgb(0 117 55)",
        tabBarInactiveTintColor: "#77B0AAdd",

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
              iconStyle="w-7 h-7"
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
              iconStyle="w-8 h-8"
              contStyle="mb-8 border-4 border-gray-100 bg-white w-20 h-20 justify-center rounded-full"
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
              iconStyle="w-7 h-7"
              // size={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}

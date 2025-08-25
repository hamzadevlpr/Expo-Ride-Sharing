import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#999",
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <Ionicons name="home-outline" size={22} color={color} />
            </IconWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "My trips",
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <MaterialIcons name="speed" size={22} color={color} />
            </IconWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <Ionicons name="notifications-outline" size={22} color={color} />
            </IconWrapper>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <Ionicons name="person-outline" size={22} color={color} />
            </IconWrapper>
          ),
        }}
      />
    </Tabs>
  );
}

function IconWrapper({
  children,
  focused,
}: {
  children: React.ReactNode;
  focused: boolean;
}) {
  return (
    <View
      style={[styles.iconCircle, { borderColor: focused ? "#000" : "#ccc" }]}
    >
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    // marginBottom: 10,
    paddingBottom: 40,
    paddingTop: 10,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1.5,
    marginBottom: 4,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
});

import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { getHasOnboarded } from "../lib/storage";

export default function Index() {
  useEffect(() => {
    (async () => {
      const done = await getHasOnboarded();
      router.replace(done ? "/(auth)/login" : "/(onboarding)/ScreenOne");
    })();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator />
    </View>
  );
}

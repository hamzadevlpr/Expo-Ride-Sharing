import { useRouter } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen2 from "../../assets/svgs/SplashScreen/splash_screen_3.svg";

export default function ScreenSplash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(onboarding)/ScreenOne");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <SplashScreen2 width={162} height={162} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04BF68",
    alignItems: "center",
    justifyContent: "center",
  },
});

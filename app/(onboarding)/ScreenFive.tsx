import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SplashScreen2 from "../../assets/svgs/SplashScreen/splash_screen_3.svg";

export default function ScreenFive() {
  const router = useRouter();

  const handleStart = async () => {
    await AsyncStorage.setItem("isOnboarded", "true");
    router.replace("/auth");
  };

  return (
    <View style={styles.container}>
      <SplashScreen2 width={162} height={162} />

      {/* Checklist */}
      <View>
        <Text style={styles.listText}>
          In order to start using Ride sharing ,{"\n"} please first agree to our
        </Text>
      </View>
      <View>
        <Text style={styles.terms}>Terms & Conditions</Text>
      </View>
      <TouchableOpacity
        style={styles.startButton}
        activeOpacity={0.8}
        onPress={handleStart}
      >
        <Text style={styles.startText}>START</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04BF68",
    paddingHorizontal: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  terms: {
    marginTop: 30,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "GilroyMedium",
    color: "#ffff",
    textDecorationLine: "underline",
    textTransform: "uppercase",
    marginBottom: 20,
  },
  listText: {
    fontSize: 14,
    color: "#C9FECD",
    fontFamily: "GilroyMedium",
    textAlign: "center",
    lineHeight: 17,
  },
  bottom: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  startButton: {
    width: 256,
    marginTop: 40,
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  startText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "GilroyMedium",
    textAlign: "center",
    fontWeight: "600",
  },
});

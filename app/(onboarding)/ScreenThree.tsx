import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SplashScreen2 from "../../assets/svgs/SplashScreen/splash_screen_1.svg";

export default function ScreenThree() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <SplashScreen2 width={250} height={250} />
      {/* Title */}
      <Text style={styles.title}>Post a ride</Text>

      {/* Checklist */}
      <View>
        <Text style={styles.listText}>
          Publish a ride and pick up passengers along the way
        </Text>
      </View>

      {/* Bottom actions */}
      <View style={styles.bottom}>
        <Text style={styles.skip} onPress={() => router.push("/ScreenFive")}>
          Skip
        </Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/ScreenFour")}
        >
          <MaterialIcons name="arrow-forward" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    marginTop: 50,
    fontSize: 28,
    textAlign: "center",
    fontFamily: "GilroyMedium",
    marginBottom: 20,
  },
  listText: {
    fontSize: 14,
    color: "#8C8C8C",
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
  skip: {
    fontSize: 16,
    color: "#8C8C8C",
  },
  nextButton: {
    backgroundColor: "#04bf68",
    width: 46,
    height: 46,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "GilroyMedium",
  },
});

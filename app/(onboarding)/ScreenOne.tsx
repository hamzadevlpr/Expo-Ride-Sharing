import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ScreenOne() {
  const router = useRouter();
  const items = [
    "Save money",
    "Make passive income",
    "Make new friends",
    "Overcome traffic congestion",
  ];

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Let’s travel together</Text>

      {/* Checklist */}
      <View style={styles.list}>
        {items.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <MaterialIcons name="check" size={20} color="green" />
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Bottom actions */}
      <View style={styles.bottom}>
        <Text style={styles.skip} onPress={() => router.push("/ScreenFive")}>Skip</Text>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/ScreenTwo")}
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
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontFamily: "GilroyMedium",
    marginBottom: 20,
  },
  list: {
    marginVertical: 20,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 90,
    marginBottom: 12,
  },
  listText: {
    fontSize: 14,
    marginLeft: 10,
    color: "#8C8C8C",
    fontFamily: "GilroyMedium",
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

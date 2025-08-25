import PublishRideModal from "@/components/Modals/PublishRideModal";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthScreen from "../../assets/svgs/Auth/auth_screen.svg";
import FindRideModal from "../../components/Modals/FindRideModal";

export default function HomeScreen() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPublishModalVisible, setPublishModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerText}>
        GOOD DAY,{"\n"}
        <Text style={styles.headerBold}>Siffat</Text>
      </Text>

      {/* Illustration */}
      <View style={styles.imageWrapper}>
        <AuthScreen width={250} height={250} />
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.primaryButton}
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.primaryButtonText}>Find a ride</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        activeOpacity={0.8}
        onPress={() => setPublishModalVisible(true)}
      >
        <Text style={styles.secondaryButtonText}>Publish a ride</Text>
      </TouchableOpacity>
      <FindRideModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
      <FindRideModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
      <PublishRideModal
        visible={isPublishModalVisible}
        onClose={() => setPublishModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 150,
    alignItems: "center",
  },
  headerText: {
    width: "100%",
    color: "#262626",
    fontSize: 22,
    fontFamily: "GilroyMedium",
    marginBottom: 20,
    textAlign: "left",
  },
  headerBold: {
    fontFamily: "GilroyBold",
    fontSize: 28,
    color: "#000",
  },
  imageWrapper: {
    marginVertical: 30,
    alignItems: "center",
  },
  primaryButton: {
    width: "100%",
    backgroundColor: "#04BF68",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  primaryButtonText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "GilroyMedium",
    fontWeight: "600",
  },
  secondaryButton: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButtonText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "GilroyMedium",
    fontWeight: "600",
  },
});

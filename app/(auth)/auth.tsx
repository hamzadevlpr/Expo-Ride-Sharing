import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthScreen from "../../assets/svgs/Auth/auth_screen.svg";

export default function Auth() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <AuthScreen width={297} height={297} />

      {/* Checklist */}
      <Text style={styles.title}>Let’s travel together</Text>
      <TouchableOpacity style={styles.SignupButton} activeOpacity={0.8} onPress={() => router.push("/register")}>
        <Text style={styles.SignupText}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SigninButton} activeOpacity={0.8} onPress={() => router.push("/login")}>
        <Text style={styles.SigninText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 65,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    fontFamily: "GilroyMedium",
    marginBottom: 80,
    color: "#000",
  },
  bottom: {
    position: "absolute",
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SignupButton: {
    width: 256,
    backgroundColor: "#04BF68",
    paddingVertical: 15,
    paddingHorizontal: 50,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    borderRadius: 8,
    shadowRadius: 2,
    elevation: 3,
  },
  SigninButton: {
    width: 256,
    marginTop: 20,
  },
  SignupText: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "GilroyMedium",
    textAlign: "center",
    fontWeight: "600",
  },
  SigninText: {
    fontSize: 16,
    color: "#000",
    fontFamily: "GilroyMedium",
    textAlign: "center",
    fontWeight: "600",
  },
});

import { supabase } from "@/lib/supabase";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const OTPScreen = () => {
  const { email, fullName, avatar } = useLocalSearchParams<{
    email: string;
    fullName: string;
    avatar: string;
  }>();

  console.log(email, fullName, avatar);
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const onSubmit = async () => {
    const { data, error } = await supabase.auth.verifyOtp({
      email: email!,
      token: otp,
      type: "email",
    });

    if (error) {
      Alert.alert("Verification failed", error.message);
      return;
    }

    const user = data.user;

    if (user) {
      // If you have `profiles` table in Supabase (recommended way)
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: user.id,
        full_name: fullName,
        avatar_url: avatar,
      });

      if (profileError) {
        Alert.alert("Profile Save Error", profileError.message);
      }
    }

    router.replace("/(app)/home");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Welcome,{"\n"}
          <Text style={{ fontFamily: "GilroyBold" }}>{fullName}</Text>
        </Text>
        <Image
          source={{
            uri: "" + avatar,
          }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.otpText}>
            Enter the OTP we’ve sent to your phone number.
          </Text>
          <TextInput
            style={styles.phoneInputText}
            placeholder="OTP"
            placeholderTextColor="#8C8C8C"
            value={otp}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) => {
              const numericText = text.replace(/[^0-9]/g, "");
              setOtp(numericText);
            }}
            textContentType="telephoneNumber"
          />
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={onSubmit}>
          <Text style={styles.signupButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // paddingVertical: 100,
    paddingHorizontal: 40,
    gap: 40,
  },
  headerText: {
    marginTop: 40,
    fontSize: 30,
    fontFamily: "GilroyMedium",
    marginBottom: 20,
    lineHeight: 30,
  },
  profileIcon: {
    width: 91,
    height: 91,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profileImage: {
    borderRadius: 45.5,
    borderWidth: 2,
    borderColor: "#000",
    width: 91,
    height: 91,
  },
  otpText: {
    fontFamily: "GilroyMedium",
    fontSize: 14,
    color: "#0D0D0D",
    marginBottom: 10,
  },
  signupButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#04BF68",
    justifyContent: "center",
    alignItems: "center",
  },
  signupButtonText: {
    fontFamily: "GilroyMedium",
    color: "#fff",
    fontSize: 18,
  },
  phoneInputText: {
    width: "100%",
    height: 51,
    borderWidth: 2,
    borderColor: "#0D0D0D",
    borderRadius: 10,
    letterSpacing: 1,
    paddingHorizontal: 10,
    fontFamily: "GilroyMedium",
    fontSize: 16,
  },
  submitButton: {
    width: "100%",
  },
});

export default OTPScreen;

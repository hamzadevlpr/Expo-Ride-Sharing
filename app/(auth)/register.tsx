import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CameraIcon from "../../assets/icons/camera.svg";
import UserIcon from "../../assets/icons/user.svg";

const SignupScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Pick image from gallery
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7,
    });
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleRegister = async () => {
    // if (!email || !fullName || !avatar) {
    //   Alert.alert("Error", "Please fill all fields and select an image.");
    //   return;
    // }
    // setLoading(true);

    // const { error } = await supabase.auth.signInWithOtp({
    //   email,
    //   options: {
    //     shouldCreateUser: true,
    //     data: {
    //       full_name: fullName,
    //       avatar_url: avatar,
    //     },
    //   },
    // });

    // setLoading(false);

    // if (error) {
    //   Alert.alert("Error", error.message);
    //   return;
    // }

    router.push({
      pathname: "/otp",
      params: { email, fullName, avatar },
    });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Hello! Signup to get started</Text>
        <TouchableOpacity style={styles.profileIcon} onPress={pickImage}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.profileImage} />
          ) : (
            <UserIcon width={49} height={49} />
          )}
          <View style={styles.cameraIcon}>
            <CameraIcon width={20} height={20} />
          </View>
        </TouchableOpacity>

        <View style={styles.inputWrapper}>
          <View style={{ position: "relative", width: "100%" }}>
            <TextInput
              style={[styles.input, { paddingRight: 40 }]}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="#8C8C8C"
              value={email}
              onChangeText={setEmail}
            />
            <View
              style={{
                position: "absolute",
                right: 12,
                top: "22%",
              }}
            >
              <Ionicons name={"mail"} size={24} color="#8C8C8C" />
            </View>
          </View>
          <View style={{ position: "relative", width: "100%" }}>
            <TextInput
              style={[styles.input, { paddingRight: 40 }]}
              placeholder="Password"
              secureTextEntry={!showPassword}
              placeholderTextColor="#8C8C8C"
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 12,
                top: "22%",
              }}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="#8C8C8C"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.submitButton}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleRegister}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.signupButtonText}>Sign up</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.otpText}>
            Already have an account?{" "}
            <Text
              style={styles.signupLink}
              onPress={() => {
                router.push("/login");
              }}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 100,
    paddingHorizontal: 40,
    gap: 40,
  },
  headerText: {
    marginTop: 40,
    fontSize: 30,
    fontFamily: "GilroyMedium",
    marginBottom: 20,
    width: "50%",
    lineHeight: 30,
  },
  profileIcon: {
    width: 91,
    height: 91,
    borderRadius: 45.5,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 45.5,
    objectFit: "cover",
  },
  cameraIcon: {
    borderRadius: 18.5,
    backgroundColor: "#fff",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 4,
    right: -6,
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  input: {
    width: "100%",
    height: 51,
    borderWidth: 2,
    borderColor: "#0D0D0D",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: "GilroyMedium",
  },
  phoneInputContainer: {
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
  phoneWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  phoneInput: {
    borderWidth: 2,
    borderRadius: 10,
    width: "18%",
    fontFamily: "GilroyMedium",
    height: 51,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18,
    gap: 10,
  },
  phoneInputText: {
    width: "78%",
    height: 51,
    borderWidth: 2,
    borderColor: "#0D0D0D",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontFamily: "GilroyMedium",
  },
  countryButton: {
    marginBottom: 20,
  },

  submitButton: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  otpText: {
    fontFamily: "GilroyMedium",
    color: "#000",
  },
  signupLink: {
    fontFamily: "GilroyBold",
    color: "#04BF68",
    textDecorationLine: "underline",
  },
});

export default SignupScreen;

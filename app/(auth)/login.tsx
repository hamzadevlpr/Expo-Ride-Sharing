import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CountryPicker, { CountryCode } from "react-native-country-picker-modal";
import DownIcon from "../../assets/icons/down.svg";

const LoginScreen = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState<CountryCode>("PK");
  const [callingCode, setCallingCode] = useState("92");
  const [countryPickerVisible, setCountryPickerVisible] = useState(false);

  const phoneInputRef = useRef<any>(null);

  const onSelectCountry = (country: any) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
    setCountryPickerVisible(false);

    if (phoneInputRef.current) {
      phoneInputRef.current.selectCountry(country.cca2.toLowerCase());
    }
  };

  const onSubmit = () => {
    Alert.alert(
      "Form Submitted",
      `Phone: +${callingCode} ${phoneNumber}\nCountry: ${countryCode}`
    );
  };

  useEffect(() => {
    if (phoneInputRef.current) {
      phoneInputRef.current.selectCountry(countryCode.toLowerCase());
    }
  }, [countryCode]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Hello! {"\n"}Sign in to get started
        </Text>

        <View style={styles.phoneWrapper}>
          <TouchableOpacity
            style={styles.phoneInput}
            onPress={() => setCountryPickerVisible(true)}
          >
            <CountryPicker
              withFilter
              withCallingCode
              withFlag={true}
              withEmoji={true}
              countryCode={countryCode}
              visible={countryPickerVisible}
              onSelect={onSelectCountry}
              onClose={() => setCountryPickerVisible(false)}
            />
            <DownIcon width={15} height={15} />
          </TouchableOpacity>
          <TextInput
            style={styles.phoneInputText}
            placeholder="Phone Number"
            placeholderTextColor="#8C8C8C"
            value={phoneNumber}
            keyboardType="numeric"
            maxLength={10}
            onChangeText={(text) => {
              const numericText = text.replace(/[^0-9]/g, "");
              setPhoneNumber(numericText);
            }}
            textContentType="telephoneNumber"
          />
        </View>
        <View style={styles.submitButton}>
          <TouchableOpacity style={styles.signupButton} onPress={onSubmit}>
            <Text style={styles.signupButtonText}>Sign in</Text>
          </TouchableOpacity>
          <Text style={styles.otpText}>
            Don&apos;t have an account?{" "}
            <Text style={styles.signupLink} onPress={() => {router.push("/register")}}>
              Sign up
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

export default LoginScreen;

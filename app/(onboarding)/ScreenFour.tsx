import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SplashScreen2 from "../../assets/svgs/SplashScreen/splash_screen_3.svg";

export default function ScreenFour() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
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
      <View style={styles.wrapper}>
        {/* Grey Checkbox Section */}
        <TouchableOpacity
          style={styles.checkboxContainer}
          activeOpacity={0.7}
          onPress={() => {
            setChecked(!checked);
            if (!checked) {
              router.push("/ScreenFive");
            }
          }}
        >
          <View style={[styles.checkbox, checked && styles.checked]}>
            {checked && <View style={styles.innerBox} />}
          </View>
        </TouchableOpacity>

        {/* White Text Section */}
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            I agree to the ride sharing terms and conditions
          </Text>
        </View>
      </View>
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
  wrapper: {
    flexDirection: "row",
    overflow: "hidden",
    marginTop: 40,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  checkboxContainer: {
    backgroundColor: "#E5E5E5",
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  checked: {
    borderColor: "#04bf68",
  },
  innerBox: {
    width: 12,
    height: 12,
    backgroundColor: "#04bf68",
  },
  textContainer: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 14,
    color: "#000",
    fontFamily: "GilroyMedium",
    textAlign: "center",
  },
});

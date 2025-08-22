import { Stack, useRouter } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoBackIvon from "../../assets/icons/goback.svg";

function OtpHeader() {
  const router = useRouter();
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          height: 56,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 30,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <GoBackIvon width={16} height={16} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      {/* <Stack.Screen
        name="otp"
        options={{
          headerShown: true,
          header: () => <OtpHeader />,
        }}
      /> */}
    </Stack>
  );
}

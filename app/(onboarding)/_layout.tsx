import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" />
      <Stack.Screen name="ScreenOne" />
      <Stack.Screen name="ScreenTwo" />
      <Stack.Screen name="ScreenThree" />
      <Stack.Screen name="ScreenFour" />
      <Stack.Screen name="ScreenFive" />
    </Stack>
  );
}

// app/_layout.tsx
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { AuthProvider, useAuth } from "../lib/AuthProvider";

SplashScreen.preventAutoHideAsync().catch(() => {});

function RootNavigator() {
  const colorScheme = useColorScheme();
  const { session, loading } = useAuth();

  if (loading) return null; // Still checking session

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* If no session → show onboarding/auth */}
        {!session ? (
          <>
            <Stack.Screen name="(onboarding)" />
            <Stack.Screen name="(auth)" />
          </>
        ) : (
          // If session exists → go to app
          <Stack.Screen name="(app)" />
        )}
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [loaded, error] = useFonts({
    Gilroy: require("../assets/fonts/Gilroy-Regular.ttf"),
    GilroyMedium: require("../assets/fonts/Gilroy-Medium.ttf"),
    GilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
    GilroyBoldItalic: require("../assets/fonts/Gilroy-BoldItalic.ttf"),
  });

  useEffect(() => {
    setAppReady(true);
  }, []);

  useEffect(() => {
    if ((loaded || error) && appReady) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [loaded, error, appReady]);

  if (!loaded && !error) return null;

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

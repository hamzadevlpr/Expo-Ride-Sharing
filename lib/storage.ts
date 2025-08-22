import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "hasOnboarded";

export async function getHasOnboarded(): Promise<boolean> {
  try {
    return (await AsyncStorage.getItem(KEY)) === "1";
  } catch {
    return false;
  }
}

export async function setHasOnboarded(): Promise<void> {
  await AsyncStorage.setItem(KEY, "1");
}

import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function NextButton({ label, onPress, disabled }: Props) {
  return (
    <View style={{ borderRadius: 24, overflow: "hidden" }}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={{
          backgroundColor: disabled ? "#9ADBBF" : "#00B773",
          paddingVertical: 14,
          paddingHorizontal: 22,
          borderRadius: 24,
          minWidth: 120,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>{label}</Text>
      </Pressable>
    </View>
  );
}

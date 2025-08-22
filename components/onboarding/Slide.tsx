import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

type SlideProps = {
  title: string;
  text?: string;
  bullets?: string[];
  icon: keyof typeof Ionicons.glyphMap;
};

export default function Slide({ title, text, bullets, icon }: SlideProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 24 }}>
      <View
        style={{
          width: 180,
          height: 180,
          borderRadius: 90,
          backgroundColor: "#F1F8F5",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 32,
        }}
      >
        <Ionicons name={icon} size={96} color="#00B773" />
      </View>

      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 12, textAlign: "center" }}>
        {title}
      </Text>

      {!!text && (
        <Text style={{ fontSize: 14, color: "#555", textAlign: "center", lineHeight: 20 }}>
          {text}
        </Text>
      )}

      {!!bullets && (
        <View style={{ marginTop: 8, width: "100%", maxWidth: 320 }}>
          {bullets.map((b, i) => (
            <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", marginVertical: 6 }}>
              <Ionicons name="checkmark-circle" size={18} color="#00B773" style={{ marginTop: 2, marginRight: 8 }} />
              <Text style={{ fontSize: 14, color: "#555", flexShrink: 1 }}>{b}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

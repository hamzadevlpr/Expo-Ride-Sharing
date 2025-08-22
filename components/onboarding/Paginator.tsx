import { View } from "react-native";

type Props = { count: number; index: number };

export default function Paginator({ count, index }: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 8, alignItems: "center", justifyContent: "center" }}>
      {Array.from({ length: count }).map((_, i) => {
        const active = i === index;
        return (
          <View
            key={i}
            style={{
              width: active ? 20 : 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: active ? "#00B773" : "#D6E7DF",
            }}
          />
        );
      })}
    </View>
  );
}

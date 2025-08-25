import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import CalenderIcon from "../../assets/svgs/calendera.svg";
import SearchIcon from "../../assets/svgs/search.svg";
import TimeIcon from "../../assets/svgs/time.svg";
import UserIcon from "../../assets/svgs/user.svg";

export default function PublishRideModal({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChange = (_event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  // format date for UI
  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={styles.modal}
      coverScreen={true}
      onBackdropPress={onClose}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name="close" size={22} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Publish a ride</Text>
        </View>

        <View style={styles.separator} />

        {/* Inputs */}
        <View style={styles.inputWrapper}>
          <View style={styles.icon}>
            <SearchIcon width={18} height={18} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Pickup address"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.icon}>
            <SearchIcon width={18} height={18} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Destination address"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.separator} />

        {/* Date + Passenger row */}
        <View style={styles.row}>
          <Text style={styles.dateText}>DEPARTURE DATE</Text>
          <TouchableOpacity
            style={styles.rowItem}
            onPress={() => setShowDatePicker(true)}
          >
            <CalenderIcon width={24} height={24} />
            <Text style={styles.rowText}>{formatDate(date)}</Text>
          </TouchableOpacity>
        </View>
        {/*  Time & Passenger row */}
        <View style={{}}>
          <View style={styles.row}>
            <Text style={styles.dateText}>SELECT TIME</Text>
            <TouchableOpacity
              style={styles.rowItem}
              onPress={() => setShowDatePicker(true)}
            >
              <TimeIcon width={24} height={24} />
              <Text style={styles.rowText}>{formatDate(date)}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.rowItem]}>
            <Text style={styles.dateText}>SELECT TIME</Text>
            <View>
              <UserIcon width={24} height={24} />
              <Text style={styles.rowText}>1</Text>
            </View>
          </View>
        </View>

        <View style={styles.separator} />

        {/* Search Button */}
        <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
          <Text style={styles.primaryButtonText}>Search a ride</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end", // keeps it aligned like your screenshot
  },
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  dateText: {
    fontFamily: "GilroyBold",
    fontSize: 12,
    lineHeight: 12,
    marginBottom: 4,
    color: "#8C8C8C",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 12,
    lineHeight: 28,
    fontFamily: "GilroyMedium",
    color: "#000",
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 12,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 12,
    height: 51,
  },
  icon: {
    backgroundColor: "#F3F3F3",
    marginRight: 6,
    borderRadius: 16.5,
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: "#000",
    fontFamily: "GilroyMedium",
  },
  row: {
    paddingVertical: 12,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 5,
    gap: 12,
  },
  rowText: {
    fontSize: 18,
    fontFamily: "GilroyMedium",
    color: "#000",
  },
  primaryButton: {
    backgroundColor: "#04BF68",
    paddingVertical: 14,
    borderRadius: 13,
    alignItems: "center",
    marginTop: 20,
  },
  primaryButtonText: {
    fontSize: 16,
    lineHeight: 32,
    fontFamily: "GilroyMedium",
    color: "#fff",
  },
});

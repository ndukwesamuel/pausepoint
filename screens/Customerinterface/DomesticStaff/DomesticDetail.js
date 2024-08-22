import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppScreen from "../../../components/shared/AppScreen";
import { formatDate } from "../../../utils/DateTime";

const DomesticDetail = ({ route }) => {
  const {
    _id,
    staffName,
    gender,
    phone,
    dateOfBirth,
    homeAddress,
    Role,
    workingHours,
    staffCode,
    createdAt,
    updatedAt,
  } = route?.params?.itemdata;

  // const { itemdata } = route.params;

  // Format the dates to a readable format

  return (
    <AppScreen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* <View style={styles.item}>
          <Text style={styles.label}>Staff ID:</Text>
          <Text style={styles.value}>{_id}</Text>
        </View> */}

        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{staffName}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>{gender === "1" ? "Male" : "Female"}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{phone}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Date of Birth:</Text>
          <Text style={styles.value}>{formatDate(dateOfBirth)}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Home Address:</Text>
          <Text style={styles.value}>{homeAddress}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Role:</Text>
          <Text style={styles.value}>{Role}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Working Hours:</Text>
          <Text style={styles.value}>{workingHours}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Staff Code:</Text>
          <Text style={styles.value}>{staffCode}</Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.label}>Created At:</Text>
          <Text style={styles.value}>{formatDate(createdAt)}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              width: "40%",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Updated
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "red",
              width: "40%",
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              Delete
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </AppScreen>
  );
};

export default DomesticDetail;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  item: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 16,
    color: "#555",
  },
});

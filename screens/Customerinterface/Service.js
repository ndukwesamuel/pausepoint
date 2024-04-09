import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const Service = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Available Services</Text>
        <View style={styles.serviceContainer}>
          <Text style={styles.category}>Engineers:</Text>
          <Text>- General repairers</Text>
          <Text>- Mechanical</Text>
          <Text>- Builders</Text>
          <Text>- AC</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Text style={styles.category}>Electrician:</Text>
          <Text>- Wiring</Text>
          <Text>- Light issues</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Text style={styles.category}>Cleaning:</Text>
          <Text>- House cleaners</Text>
          <Text>- Laundry</Text>
          <Text>- Car wash</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Text style={styles.category}>Rentals:</Text>
          <Text>- Generator</Text>
          <Text>- Apartment</Text>
          <Text>- etc.</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Text style={styles.category}>Chefs:</Text>
          <Text>- Cooking</Text>
        </View>
        <View style={styles.serviceContainer}>
          <Text style={styles.category}>Others:</Text>
          <Text>- For services not listed</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  serviceContainer: {
    marginBottom: 15,
  },
  category: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Service;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const VendorList = () => {
  const serviceList = [
    { text: "All" },
    { text: "Engineering" },
    { text: "Cleaning" },
    { text: "Chefs" },
    { text: "Category" },
  ];

  const items = [
    {
      name: "James Laniser",
      service: "Chef | Catering",
      review: "23 reviews",
      source: require("../../../assets/profilePics/Ellipse56.png"),
    },
    {
      name: "James Laniser",
      service: "Chef | Catering",
      review: "23 reviews",
      source: require("../../../assets/profilePics/Ellipse56.png"),
    },
    {
      name: "James Laniser",
      service: "Chef | Catering",
      review: "23 reviews",
      source: require("../../../assets/profilePics/Ellipse52.png"),
    },
    {
      name: "James Laniser",
      service: "Chef | Catering",
      review: "23 reviews",
      source: require("../../../assets/profilePics/Ellipse53.png"),
    },
    {
      name: "James Laniser",
      service: "Chef | Catering",
      review: "23 reviews",
      source: require("../../../assets/profilePics/Ellipse52.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#777" style={styles.icon} />
        <TextInput
          placeholder="Search Vendor"
          style={styles.input}
          placeholderTextColor="#777"
        />
      </View>

      <View style={styles.serviceListContainer}>
        {serviceList.map((service, index) => (
          <Text key={index} style={styles.serviceItem}>
            {service.text}
          </Text>
        ))}
      </View>

      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image
              source={item.source}
              style={styles.itemImage}
            />
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={styles.itemDetails}>
                <Text>{item.service}</Text>
                <Text>{item.review}</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={15} color="#04973C" />
                  <Text style={styles.ratingText}>5</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
{/* 
      <View style={styles.closeButtonContainer}>
        <Pressable>
          <Image source={require("../../../assets/cross.png")} />
        </Pressable>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9,
    paddingHorizontal: 10,
    margin: 10,
    backgroundColor: "#F6F8FA",
  },
  input: {
    flex: 1,
    paddingVertical: 18,
    paddingLeft: 1,
    color: "gray",
  },
  icon: {
    marginRight: 10,
  },
  serviceListContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  serviceItem: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#969696",
    color: "#969696",
  },
  itemContainer: {
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    marginRight: 25,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 10,
  },
  itemDetails: {
    flexDirection: "row",
    gap: 30,
    justifyContent: "space-evenly",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 25,
    width: 47,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#81CB9D",
  },
  ratingText: {
    marginLeft: 5,
  },
  closeButtonContainer: {
    marginLeft: 280,
  },
});

export default VendorList;

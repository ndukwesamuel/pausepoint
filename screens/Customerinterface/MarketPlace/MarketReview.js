import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MarketReview = () => {
  const navigation = useNavigation();
  const { item } = useRoute().params;
  console.log({
    item: item,
  });

  return (
    <>
      <View>
        <Image
          source={{
            uri: item?.images[0]?.url, // "https://res.cloudinary.com/dho7vgusw/image/upload/v1717066205/olyzcdftqbon10c958gb.png", //item?.images[0]?.url,
          }}
          style={{
            width: "100%",
            height: 250,
          }}
        />
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View
              style={{
                paddingRight: 10,
                width: "70%",
              }}
            >
              <Text style={styles.productTitle}>{item?.name}</Text>
              <Text style={styles.productCategory}>{item?.category?.name}</Text>
            </View>
            <View
              style={{
                paddingRight: 10,
                width: "30%",
              }}
            >
              <Text style={styles.productPrice}>{item?.price}</Text>
              <Text style={styles.productStock}>{item?.quantity} quntity</Text>
            </View>
          </View>
          <Text style={styles.description}>{item?.description}</Text>
        </View>
        <View style={styles.downContainer}>
          <Text style={styles.sellerTitle}>Seller Details</Text>
          <Text style={styles.sellerInfo}>
            <Icon name="user" size={20} color="green" />
            <Text> Jide Kosoko </Text>
          </Text>
          <Text style={styles.sellerInfo}>
            <Icon name="home" size={20} color="green" />
            <Text> House 24, Tinubu estate</Text>
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.approveButton}>
            <Text style={styles.buttonText}>Order now!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
  },
  contentContainer: {
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productCategory: {
    fontSize: 14,
    color: "gray",
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productStock: {
    fontSize: 14,
    color: "gray",
  },
  description: {
    marginTop: 10,
    fontSize: 14,
    color: "gray",
  },
  downContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F6F6F6",
    paddingHorizontal: 20,
  },
  sellerTitle: {
    fontSize: 20,
    fontWeight: "400",
    paddingBottom: 5,
  },
  sellerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  approveButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MarketReview;

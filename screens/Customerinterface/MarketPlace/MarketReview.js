import { useNavigation } from '@react-navigation/native';
import React from 'react'

import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const MarketReview = () => {
 
  return (
    <>
      <View>
        <Image
          source={require("../../../assets/admImg/Rectangle.png")}
          style={styles.image}
        />
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.productTitle}>Burger</Text>
              <Text style={styles.productCategory}>Food & Drinks</Text>
            </View>
            <View>
              <Text style={styles.productPrice}>$24,000</Text>
              <Text style={styles.productStock}>12 pcs left</Text>
            </View>
          </View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur. Mauris habitant quis tellus
            rhoncus consequat elit rhoncus. Enim nec condimentum maecenas
            feugiat tincidunt. Aliquet lacus egestas hendrerit elit. Sed libero
            ipsum ut fermentum malesuada duis amet faucibus.
          </Text>
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

export default MarketReview
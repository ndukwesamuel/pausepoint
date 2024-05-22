import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

const items = [
  {
    name: "Shopprite Bread",
    service: "Details of Goods lorem ipsum...",
    price: "$4000",
    source: require("../../../assets/admImg/meat.png"),
  },
  {
    name: "Shopprite Bread",
    service: "Details of Goods lorem ipsum...",
    price: "$4000",
    source: require("../../../assets/goods.png"),
  },
  {
    name: "Shopprite Bread",
    service: "Details of Goods lorem ipsum...",
    price: "$4000",
    source: require("../../../assets/admImg/snacks.png"),
  },
  {
    name: "Shopprite Bread",
    service: "Details of Goods lorem ipsum...",
    price: "$4000",
    source: require("../../../assets/admImg/burger.png"),
  },
  {
    name: "Shopprite Bread",
    service: "Details of Goods lorem ipsum...",
    price: "$4000",
    source: require("../../../assets/admImg/meat1.png"),
  },
];

const ApprovedGoods = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        {items.map((item, index) => (
          <View style={styles.itemContainer} key={index}>
            <View style={styles.itemDetails}>
              <Pressable onPress={() => navigation.navigate("ProductDetails")}>
                <Image source={item.source} style={styles.itemImage} />
              </Pressable>

              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemService}>{item.service}</Text>
              </View>
            </View>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
    height: "100%",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  itemDetails: {
    flexDirection: "row",
    gap: 20,
  },
  itemImage: {
    width: 50,
    height: 50,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
  },
  itemService: {
    width: "90%",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ApprovedGoods;

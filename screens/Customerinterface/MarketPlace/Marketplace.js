import { useNavigation } from "@react-navigation/native";
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

const MarketPlace = () => {
  const navigation = useNavigation()
  const items = [
    {
      id: 1,
      source: require("../../../assets/MktImg/snacks.png"),
      names: "Burger",
      title: "Details of goods lorem ipsum...",
      price: "$24,000",
    },
    {
      id: 2,
      source: require("../../../assets/MktImg/meal.png"),
      names: "Shoprite Bread",
      title: "Details of goods lorem ipsum...",
      price: "$4,000",
    },
    {
      id: 3,
      source: require("../../../assets/MktImg/snacks.png"),
      names: "Shoprite Bread",
      title: "Details of goods lorem ipsum...",
      price: "24,000",
    },
    {
      id: 4,
      source: require("../../../assets/MktImg/beef.png"),
      names: "Beef",
      title: "Details of goods lorem ipsum...",
      price: "$24,000",
    },
    {
      id: 5,
      source: require("../../../assets/MktImg/saurce.png"),
      names: "Shoprite Bread",
      title: "Details of goods lorem ipsum...",
      price: "$4,000",
    },
    {
      id: 6,
      source: require("../../../assets/MktImg/chicken.png"),
      names: "Burger",
      title: "Details of goods lorem ipsum...",
      price: "$24,000",
    },
  ];

  return (
    <View style={styles.container}>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {items.map((item, id) => (
          <View key={id} style={styles.card}>
             <Pressable
                onPress={() => {
                  navigation.navigate("MarketReview");
                }}
                key={id}
              >
            <View style={styles.cardImage}>
              <Image source={item.source} style={styles.image} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardName}>{item.names}</Text>
              <Text style={styles.cardSubtitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    width: "48%",
    marginBottom: 10,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  cardImage: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 10,
    backgroundColor: "#F3FFF3",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 16,
    fontWeight: "200",
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default MarketPlace;

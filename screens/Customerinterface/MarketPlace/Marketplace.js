import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Market_data_Fun } from "../../../Redux/UserSide/MarketSLice";
import { MaterialIcons } from "@expo/vector-icons";

const MarketPlace = () => {
  const dispatch = useDispatch();
  const { Market_data } = useSelector((state) => state.MarketSLice);
  console.log({
    data: Market_data?.products[1]?.images[0]?.url,
  });

  useEffect(() => {
    dispatch(Market_data_Fun());

    return () => {};
  }, [dispatch]);

  const navigation = useNavigation();
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
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Set the refreshing state to true
    setRefreshing(true);
    dispatch(Market_data_Fun());

    // Wait for 2 seconds
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {Market_data?.products?.map((item, id) => (
          <View key={id} style={styles.card}>
            <Pressable
              onPress={() => {
                navigation.navigate("MarketReview", {
                  item,
                });
              }}
              key={id}
            >
              <View style={styles.cardImage}>
                <Image
                  source={{
                    uri: item.images[0]?.url, //Market_data?.products[1]?.images[0]?.url
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </Pressable>
          </View>
        ))}
      </ScrollView>

      <View style={{ position: "absolute", right: 20, top: 320, zIndex: 1 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            // paddingHorizontal: 20,
            // paddingVertical: 10,
            borderRadius: 50,
            width: 50,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
          // navigation.navigate("guestsdetail", { itemdata });

          onPress={() => navigation.navigate("CreateProduct")}
        >
          <MaterialIcons name="mode-edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
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

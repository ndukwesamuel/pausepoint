import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
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
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Market_data_Fun } from "../../../Redux/UserSide/MarketSLice";
import { MaterialIcons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

const MarketPlace = () => {
  const dispatch = useDispatch();
  const { Market_data } = useSelector((state) => state.MarketSLice);

  const animation = useRef(null);

  useEffect(() => {
    dispatch(Market_data_Fun());

    return () => {};
  }, [dispatch]);

  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Set the refreshing state to true
    setRefreshing(true);
    dispatch(Market_data_Fun());

    // Wait for 2 seconds
    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <View key={item?.id} style={styles.cardContainer}>
      <Pressable
        onPress={() => {
          navigation.navigate("MarketReview", {
            item,
          });
        }}
        key={item?.id}
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
  );

  const renderEmptyList = () => (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../../../assets/Lottie/Animation - 1704444696995.json")}
      />
    </ScrollView>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={Market_data?.products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={renderEmptyList}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.columnWrapper}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <View style={{ position: "absolute", right: 20, bottom: 20, zIndex: 1 }}>
        <TouchableOpacity
          style={styles.addButton}
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
  listContainer: {
    padding: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  cardContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
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
    width: "100%",
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
  addButton: {
    backgroundColor: "green",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MarketPlace;

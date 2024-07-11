import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { Rating } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { All_service__data_Fun } from "../../Redux/UserSide/ServiceSlice";
import LottieView from "lottie-react-native";

const ServiceView = ({ navigation }) => {
  const dispatch = useDispatch();
  const animation = useRef(null);

  const { all_service__data } = useSelector((state) => state.ServiceSlice);
  useEffect(() => {
    dispatch(All_service__data_Fun());

    return () => {};
  }, [dispatch]);
  console.log({
    emeka: all_service__data?.vendors[0],
  });
  const [filteredUsers, setFilteredUsers] = useState(
    all_service__data?.vendors
  );
  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const filtered = all_service__data?.vendors?.filter((user) =>
        user?.FullName.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(all_service__data?.vendors);
    }
  };

  const [refreshing, setRefreshing] = useState(false);

  // const onRefresh = () => {
  //   // Set the refreshing state to true
  //   setRefreshing(true);
  //   dispatch(All_service__data_Fun());

  //   // Wait for 2 seconds
  //   setRefreshing(false);
  // };

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(All_service__data_Fun());

    setRefreshing(false);
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("vendorService", { item: item });
      }}
      key={item?.id}
    >
      <View style={styles.cards}>
        <View style={styles.cardImage}>
          <Image
            source={{
              uri: item?.photo?.url,
            }}
            style={{
              width: "100%",
              height: 150,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={{ paddingBottom: 10 }}>
            <Rating
              readonly
              startingValue="rating"
              imageSize={17}
              fractions={1}
            />
          </Text>

          <Text style={styles.cardName}>{item?.FullName}</Text>
          <Text style={styles.cardSubtitle}>{item.category?.name}</Text>
          {/* <Text style={styles.cardDescription}>{item.desc}</Text> */}
        </View>
      </View>
    </Pressable>
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
          // backgroundColor: "#eee",
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/Lottie/Animation - 1704444696995.json")}
      />
    </ScrollView>
    // <Text style={styles.emptyText}>No products available.</Text>
  );

  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {/* <Text style={styles.text1}>Category:Engineering/Mechanical</Text> */}
      <View style={styles.inputs}>
        <Icon name="search" size={20} color="#777" style={styles.icon} />
        <TextInput
          placeholder="Search by name..."
          style={styles.input}
          placeholderTextColor="#777"
          value={search}
          onChangeText={handleSearch}
        />
      </View>

      {/* <ScrollView> */}
      <View
        style={{
          justifyContent: "space-evenly",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <FlatList
          data={filteredUsers}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={renderEmptyList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
      {/* </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    backgroundColor: "#fff",
    margin: 10,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    width: 170,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardImage: {
    width: "100%",
    height: 150,
  },
  cardContent: {
    padding: 10,
    backgroundColor: "#F3FFF3",
    borderWidth: 1,
    borderColor: "#C5F3C5",
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
  cardDescription: {
    fontSize: 14,
    fontWeight: "200",
    paddingBottom: 15,
    paddingTop: 5,
  },
  inputs: {
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
    color: "#333",
  },
  icon: {
    marginRight: 10,
  },
  text1: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 10,
    color: "rgba(0, 0, 0, 0.5)",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default ServiceView;

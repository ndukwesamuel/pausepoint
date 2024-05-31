import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_all_admin_Service__Fun,
  Get_all_Categoryes__Fun,
} from "../../../Redux/Admin/AdminServiceSlice";

const VendorList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { get_all_admin_Service_data, categoryes_data } = useSelector(
    (state) => state.AdminServiceSlice
  );
  const [category, setCategory] = useState("All");

  console.log({
    emem: categoryes_data,
  });
  useEffect(() => {
    dispatch(Get_all_admin_Service__Fun());
    dispatch(Get_all_Categoryes__Fun());

    return () => {};
  }, [dispatch, get_all_admin_Service_data]);

  const handleCategory = (item) => {};
  const filteredVendors =
    category === "All"
      ? get_all_admin_Service_data?.vendors
      : get_all_admin_Service_data?.vendors.filter(
          (vendor) => vendor?.category?.slug === category
        );

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

      {/* <View style={styles.serviceListContainer}>
  

        <FlatList
          data={categoryes_data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                console.log({
                  service: item,
                });
                setCategory(item.slug);
              }}
              style={{ gap: 10 }}
            >
              <Text style={styles.serviceItem}>{item.slug}</Text>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                width: 10,
              }}
            />
          )}
        />
      </View> */}
      <ScrollView>
        {filteredVendors.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image
              source={{
                uri: item?.photo?.url,
              }}
              style={{ width: 56, height: 56, borderRadius: 50 }}
            />
            <View>
              <Text style={styles.itemName}>{item?.FullName}</Text>
              <View style={styles.itemDetails}>
                <Text>{item?.category?.slug}</Text>
                <Text>23 reviews</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={15} color="#04973C" />
                  <Text style={styles.ratingText}>5</Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <Pressable
        style={{
          position: "absolute",
          bottom: 20,
          // left: 0,
          right: 5,
          // justifyContent: "center",
          // alignItems: "center",
        }}
        onPress={() => navigation.navigate("VendorProfile")}
        accessibilityLabel="Add Vendor Profile"
      >
        <Image source={require("../../../assets/cross.png")} />
      </Pressable>
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
    gap: 20,
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

import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import LottieView from "lottie-react-native";
import { useMutation } from "react-query";
import PagerView from "react-native-pager-view";
import axios from "axios";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { AdminMarket_data_Fun } from "../../../Redux/Admin/AdminMarketSLice";
const API_BASEURL = process.env.EXPO_PUBLIC_API_URL;

const ProductDetails = ({ navigation }) => {
  const { item } = useRoute().params;
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0); // Track the active image index

  const { user_data } = useSelector((state) => state?.AuthSlice);

  const Aprove_Mutation = useMutation(
    (data_info) => {
      let url = `${API_BASEURL}market/product/status/${item?._id}`;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user_data?.token}`,
        },
      };

      return axios.put(url, data_info, config);
    },
    {
      onSuccess: (success) => {
        Toast.show({
          type: "success",
          text1: "Successfully updated",
        });
        dispatch(AdminMarket_data_Fun());
        navigation.goBack();
      },
      onError: (error) => {
        console.log({
          error: error?.response?.data,
        });
        Toast.show({
          type: "error",
          text1: `${error?.response?.data?.message}`,
        });
      },
    }
  );

  return (
    <>
      <ScrollView style={{ paddingVertical: 20 }}>
        {/* PagerView for swiping images */}
        <PagerView
          style={styles.pagerView}
          initialPage={0}
          onPageSelected={(event) => {
            setActiveIndex(event.nativeEvent.position); // Update active index on page change
          }}
        >
          {item?.images?.map((image, index) => (
            <View key={index} style={styles.page}>
              <Image
                source={{ uri: image.url }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          ))}
        </PagerView>

        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          {item?.images?.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                activeIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.productTitle}>{item?.name}</Text>
              <Text style={styles.productCategory}>{item?.category?.name}</Text>
            </View>
            <View>
              <Text style={styles.productPrice}>₦{item?.price}</Text>
            </View>
          </View>
          <Text style={styles.description}>{item?.description}</Text>
        </View>

        <View style={styles.downContainer}>
          <Text style={styles.sellerTitle}>Seller Details</Text>
          <Text style={styles.sellerInfo}>
            <Icon name="user" size={20} color="black" />
            <Text style={{ marginLeft: 10 }}>{item?.seller?.name}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {Aprove_Mutation?.isLoading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <>
              {item?.status === "Pending" ? (
                <TouchableOpacity
                  style={styles.approveButton}
                  onPress={() => {
                    Aprove_Mutation.mutate({
                      status: "Approve",
                    });
                  }}
                >
                  <Text style={styles.buttonText}>Approve</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.declineButton}
                  onPress={() => {
                    Aprove_Mutation.mutate({
                      status: "Pending",
                    });
                  }}
                >
                  <Text style={styles.buttonText}>Decline</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    height: 250,
    width: "100%",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#000", // Active dot color
  },
  contentContainer: {
    padding: 20,
    paddingTop: 50,
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
    fontSize: 18,
    color: "gray",
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "bold",
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
    fontWeight: "700",
    paddingBottom: 5,
  },
  sellerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  approveButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  declineButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductDetails;

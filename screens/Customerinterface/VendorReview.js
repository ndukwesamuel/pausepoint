import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Rating } from "react-native-elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { useMutation } from "react-query";
const API_BASEURL = process.env.EXPO_PUBLIC_API_URL;

import axios from "axios";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { All_serviceReview_data_Fun } from "../../Redux/UserSide/ServiceSlice";

const VendorReview = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0);
  const { user_data } = useSelector((state) => state?.AuthSlice);
  const navigation = useNavigation();

  const { item } = useRoute().params;
  console.log({
    cry: item,
  });

  let vendorId = item;

  const Review_Mutation = useMutation(
    (data_info) => {
      let url = `${API_BASEURL}services/vendors/review-rate-service`;

      let data = {
        vendorId: item, //"66dd2bad6414556b14a212fa",
        rating: rating, // "4",
        comment: comment, //"Cry me  a rive",
      };
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          //   "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user_data?.token}`,
        },
      };

      return axios.post(url, data, config);
    },
    {
      onSuccess: (success) => {
        Toast.show({
          type: "success",
          text1: " successfully ",
        });
        // dispatch(AdminMarket_data_Fun());

        dispatch(All_serviceReview_data_Fun(vendorId));

        navigation.goBack();
        // dispatch(Get_My_Clan_Forum_Fun());

        // setTurnmodal(false);
      },

      onError: (error) => {
        console.log({
          error: error?.response?.data,
        });
        Toast.show({
          type: "error",
          text1: `${error?.response?.data?.message} `,
          //   text2: ` ${error?.response?.data?.errorMsg} `,
        });

        // dispatch(Get_User_Clans_Fun());
        // dispatch(Get_User_Profle_Fun());
        // dispatch(Get_all_clan_User_Is_adminIN_Fun());
      },
    }
  );

  const handleSUbmitreview = () => {
    let data = {
      vendorId: item, //"66dd2bad6414556b14a212fa",
      rating: rating, // "4",
      comment: comment, //"Cry me  a rive",
    };

    console.log(data);
  };
  return (
    <View style={styles.container}>
      <Text>{item?.vendor?.FullName}</Text>
      <View style={styles.input}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Write description..."
          value={comment}
          onChangeText={setComment}
        />
      </View>

      <View style={styles.rating}>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.text}>Select Star rating</Text>
          <Text>
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={20}
              startingValue={rating}
              ratingBackgroundColor="white"
              ratingColor="green"
              onFinishRating={(value) => setRating(value)} // Set the rating value
              style={{ paddingBottom: 5 }}
            />
          </Text>
        </View>
      </View>
      <View>
        {Review_Mutation.isLoading ? (
          <ActivityIndicator size="large" color="green" />
        ) : (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => Review_Mutation.mutate()}
          >
            <Text style={styles.buttonText}>Create your Review</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
  buttonContainer: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#04973C",
    borderRadius: 5,
    marginTop: 180,
  },

  buttonText: {
    fontSize: 16,
    color: "white",
  },
  input: {
    width: "100%",
    shadowColor: "#F7F9FA",
    backgroundColor: "#F7f9FA",
    borderColor: "gray",
    borderRadius: 5,
    padding: 20,
    height: "40%",
  },
  rating: {
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "400",
    paddingBottom: 10,
    paddingTop: 10,
  },
});

export default VendorReview;

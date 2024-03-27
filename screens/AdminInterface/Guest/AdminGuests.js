import AppScreen from "../../../components/shared/AppScreen";
import {
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
  RefreshControl,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { useMutation } from "react-query";
import { API_BASEURL } from "@env";
import axios from "axios";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import DateTimePicker from "@react-native-community/datetimepicker";

import { useDispatch, useSelector } from "react-redux";

import {
  NavigationContainer,
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { Get_All_User_Guest_Fun } from "../../../Redux/UserSide/GuestSlice";
import { formatDateandTime } from "../../../utils/DateTime";
import { UserProfile_data_Fun } from "../../../Redux/ProfileSlice";
import { Admin_Get_All_User_Guest_Fun } from "../../../Redux/Admin/AdminGuestSlice";

const historydata = [
  {
    id: 1,

    code: "430891",
    codeLabel: "Code ID",
    arrivalTime: "22/05/23, 5:59pm",
    arrivalTimeLabel: "Arrival Time",

    status: "Checked Out",
    statusLabel: "Status",
    departureTime: "22/05/23, 5:59pm",
    departureTimeLabel: "Departure Time",
  },

  {
    id: 2,

    code: "430891",
    codeLabel: "Code ID",
    arrivalTime: "22/05/23, 5:59pm",
    arrivalTimeLabel: "Arrival Time",

    status: "Checked Out",
    statusLabel: "Status",
    departureTime: "22/05/23, 5:59pm",
    departureTimeLabel: "Departure Time",
  },

  {
    id: 3,

    code: "430891",
    codeLabel: "Code ID",
    arrivalTime: "22/05/23, 5:59pm",
    arrivalTimeLabel: "Arrival Time",

    status: "Checked Out",
    statusLabel: "Status",
    departureTime: "22/05/23, 5:59pm",
    departureTimeLabel: "Departure Time",
  },

  {
    id: 4,

    code: "430891",
    codeLabel: "Code ID",
    arrivalTime: "22/05/23, 5:59pm",
    arrivalTimeLabel: "Arrival Time",

    status: "Checked Out",
    statusLabel: "Status",
    departureTime: "22/05/23, 5:59pm",
    departureTimeLabel: "Departure Time",
  },

  {
    id: 5,

    code: "430891",
    codeLabel: "Code ID",
    arrivalTime: "22/05/23, 5:59pm",
    arrivalTimeLabel: "Arrival Time",

    status: "Checked Out",
    statusLabel: "Status",
    departureTime: "22/05/23, 5:59pm",
    departureTimeLabel: "Departure Time",
  },
  // Add more objects here if needed
];

const AdminGuests = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const animation = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { Admin_get_all_user_guest_data } = useSelector(
    (state) => state?.AdminGuestSlice
  );

  console.log({
    ww: Admin_get_all_user_guest_data,
  });
  useEffect(() => {
    dispatch(Admin_Get_All_User_Guest_Fun());

    dispatch(UserProfile_data_Fun());

    return () => {};
  }, [dispatch]);

  const filteredData = Admin_get_all_user_guest_data?.clanInvites?.filter(
    (item) =>
      item.visitor_name?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Set the refreshing state to true
    setRefreshing(true);
    dispatch(Admin_Get_All_User_Guest_Fun());

    dispatch(UserProfile_data_Fun());
    // Wait for 2 seconds
    setRefreshing(false);
  };

  const HistoryItem = ({ itemdata }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          borderWidth: 1,
          borderColor: "#CFCDCD",
          marginBottom: 10,
          paddingVertical: 10,
          borderRadius: 9,
        }}
        onPress={() => {
          navigation.navigate("AdminGuestsDetail", { itemdata });
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "RobotoSlab-SemiBold",
              fontWeight: "600",
            }}
          >
            {itemdata?.access_code}
          </Text>

          <Text
            style={{
              fontSize: 11,
              fontFamily: "RobotoSlab-Medium",
              fontWeight: "500",
            }}
          >
            Code ID
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter-SemiBold",
              fontWeight: "600",
            }}
          >
            {itemdata?.visitor_name}
          </Text>

          <Text
            style={{
              fontSize: 11,
              fontFamily: "RobotoSlab-Medium",
              fontWeight: "500",
            }}
          >
            Visitor Name
          </Text>
        </View>

        <View>
          {/* <Text style={{ fontSize: 18, fontFamily: "RobotoSlab-SemiBold" }}>
            Checked Out
          </Text>

          <Text
            style={{
              fontSize: 11,
              fontFamily: "RobotoSlab-Medium",
              fontWeight: "500",
            }}
          >
            Status
          </Text> */}

          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter-SemiBold",
              fontWeight: "600",
            }}
          >
            {formatDateandTime(itemdata?.expires)}
          </Text>

          <Text
            style={{
              fontSize: 11,
              fontFamily: "RobotoSlab-Medium",
              fontWeight: "500",
            }}
          >
            Departure Time
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontFamily: "Inter-SemiBold",
              fontWeight: "600",
            }}
          >
            {itemdata?.phone_number}
          </Text>

          <Text
            style={{
              fontSize: 11,
              fontFamily: "RobotoSlab-Medium",
              fontWeight: "500",
            }}
          >
            Phone Number
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <AppScreen>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <TextInput
          style={{
            height: 40,
            borderColor: "gray",
            borderWidth: 1,
            marginBottom: 10,
            paddingLeft: 10,
          }}
          placeholder="Search by Visitor Name"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />

        {filteredData?.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
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
              source={require("../../../assets/Lottie/Animation - 1704444696995.json")}
            />
          </View>
        ) : (
          <FlatList
            data={filteredData}
            renderItem={({ item }) => <HistoryItem itemdata={item} />}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </View>
    </AppScreen>
  );
};

export default AdminGuests;

const styles = StyleSheet.create({});

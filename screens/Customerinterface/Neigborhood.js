import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Forminput, Forminput_Icon } from "../../components/shared/InputForm";
import { AntDesign } from "@expo/vector-icons";
import AppScreen from "../../components/shared/AppScreen";
import { centralData } from "../../utils/fakedata";
import {
  MediumFontText,
  RegularFontText,
} from "../../components/shared/Paragrahp";
import { useDispatch, useSelector } from "react-redux";

const Neigborhood = ({ navigation }) => {
  const [data, setData] = useState([]);

  const [frequentlyContacted, setFrequentlyContacted] = useState([]);
  const [allDirectory, setAllDirectory] = useState([]);

  const [formData, setFormData] = useState({
    search: "", // Initialize with empty values
  });
  const { get_user_profile_data } = useSelector(
    (state) => state.UserProfileSlice
  );

  const handleInputChange = (inputName, text) => {
    setFormData({ ...formData, [inputName]: text });

    // console.log({ formData });
  };
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Set the refreshing state to true
    setRefreshing(true);
    // dispatch(Get_My_Clan_Forum_Fun());

    // Wait for 2 seconds
    setRefreshing(false);
  };

  // const handleSubmit = () => {
  //     // Here you can submit the formData to your server or perform any other actions.
  //     console.log('Form Data:', formData);
  // };

  const handleSubmit = () => {
    // Handle the search and filter the data into frequentlyContacted and allDirectory lists.
    const searchQuery = formData.search.toLowerCase();
    const filteredFrequentlyContacted = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    setFrequentlyContacted(filteredFrequentlyContacted);

    const filteredAllDirectory = data.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    setAllDirectory(filteredAllDirectory);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingVertical: 20 }}>
      {get_user_profile_data?.currentClanMeeting?._id ? (
        <>
          <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <Forminput_Icon
              placeholder="Search for user..."
              containerstyle={{
                // borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                backgroundColor: "#F3FFF3",
                // opacity: 0.4
                flexDirection: "row",
                gap: 10,
              }}
              textstyle={{
                fontSize: 16,
              }}
              onChangeText={(text) => handleInputChange("search", text)}
              value={formData.search}
              icon={<AntDesign name="search1" size={22} color="black" />}
            />

            <View style={{ flex: 1 }}>
              <FlatList
                data={centralData}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Chats", { item })}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        marginVertical: 10,
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        }}
                        style={{ width: 68, height: 68, borderRadius: 50 }}
                      />

                      <View>
                        <MediumFontText
                          data={item.name}
                          textstyle={{ fontSize: 16, fontWeight: "500" }}
                        />
                        <RegularFontText
                          data="8975464"
                          textstyle={{ fontSize: 14, fontWeight: "400" }}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        borderWidth: 1,
                        borderColor: "#CFCDCD",
                        borderRadius: 6,
                        marginTop: 10,
                      }}
                    />
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </>
      ) : (
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
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#D9D9D9",
              padding: 10,
              borderRadius: 6,
            }}
            onPress={() => navigation.navigate("myclan")}
          >
            <Text> Click join a clan </Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
};

export default Neigborhood;

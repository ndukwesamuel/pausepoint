import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Platform,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";

import clan from "../../assets/clan.png";

import bookmark from "../../assets/bookmark.png";
import Calendar_light from "../../assets/Calendar_light.png";

import qrcode from "../../assets/qrcode.png";

import search from "../../assets/search.png";
import color_swatch from "../../assets/color-swatch.png";

import notifications from "../../assets/bell.png";
import settings from "../../assets/settings.png";
import logout from "../../assets/logout.png";
// Menu
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";

// Photo
import photo from "../../assets/photo.jpg";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";
import {
  LightFontText,
  MediumFontText,
  RegularFontText,
} from "../../components/shared/Paragrahp";
import Events from "./Events/Events";
import Forum from "../../components/Forum/Forum";
import { useNavigation } from "@react-navigation/native";
import { UserProfile_data_Fun } from "../../Redux/ProfileSlice";
import { Feather } from "@expo/vector-icons";

export default function App({ navigation }) {
  // const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  // Animated Properties...
  const {
    user_data,
    user_isError,
    user_isSuccess,
    user_isLoading,
    user_message,
  } = useSelector((state) => state.AuthSlice);

  // Animated Properties...
  const { userProfile_data } = useSelector((state) => state.ProfileSlice);

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const data = [
    { id: "1", title: "Item 1" },
    { id: "2", title: "Item 2" },
    { id: "3", title: "Item 2" },
    { id: "4", title: "Item 2" },
    { id: "5", title: "Item 2" },
    { id: "6", title: "Item 2" },
    // Add more items as needed
  ];

  useEffect(() => {
    dispatch(UserProfile_data_Fun());

    return () => {};
  }, [dispatch]);

  return (
    <SafeAreaView
      // style={styles.container}

      style={{
        // flex: 1,
        backgroundColor: "transparent",
        marginTop: Platform.OS === "android" ? 25 : 0,
        flex: 1,
        // backgroundColor: "white",
        // ...style,
      }}
    >
      <StatusBar style="dark" backgroundColor="black" />

      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={{
            uri: userProfile_data?.photo,
          }}
          style={{ width: 68, height: 68, borderRadius: 50 }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            // color: "white",
            marginTop: 20,
          }}
        >
          {userProfile_data?.user?.name}
        </Text>
        <RegularFontText
          data={userProfile_data?.currentClanMeeting?.name}
          textstyle={{ fontSize: 14, fontWeight: "400" }}
        />

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "My Clans", clan, "myclan")}
          {TabButton(
            currentTab,
            setCurrentTab,
            "ICE Contacts",
            search,
            // "icecontact"
            "comming"
          )}

          {TabButton(
            currentTab,
            setCurrentTab,
            "Polls/Surveys",
            color_swatch,
            "comming"
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Event",
            Calendar_light,
            "userevents"
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            "QR Code",
            qrcode,
            // "Neigborhood"
            "comming"
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Service",
            qrcode,
            // "Neigborhood"
            "comming"
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Neigbhorhood Directory",
            bookmark,
            // "Neigborhood"
            "comming"
          )}
        </View>
        <View
          style={{ borderWidth: 1, borderColor: "black", borderRadius: 10 }}
        />

        <View style={{ flexGrow: 1 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(
            currentTab,
            setCurrentTab,
            "Help/Support",
            clan,
            // "HelpSupport"

            "comming"
          )}
          {TabButton(currentTab, setCurrentTab, "Rate Us", search, "comming")}
          {TabButton(
            currentTab,
            setCurrentTab,
            "About Us",
            color_swatch,

            "comming"
          )}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingBottom: 20,
          // paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // borderWidth: 1,
          // borderColor: "black",
          // borderRadius: 50,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // marginTop: 40,
              ...(Platform.OS === "ios" && { marginTop: 50 }),
            }}
          >
            <TouchableOpacity
              onPress={() => {
                // Do Actions Here....
                // Scaling the view...
                Animated.timing(scaleValue, {
                  toValue: showMenu ? 1 : 0.88,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(offsetValue, {
                  // YOur Random Value...
                  toValue: showMenu ? 0 : 230,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                Animated.timing(closeButtonOffset, {
                  // YOur Random Value...
                  toValue: !showMenu ? -30 : 0,
                  duration: 300,
                  useNativeDriver: true,
                }).start();

                setShowMenu(!showMenu);
              }}
            >
              <Image
                source={showMenu ? close : menu}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: "black",
                }}
              ></Image>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", gap: 20 }}>
              <AntDesign name="search1" size={24} color="black" />
              <Ionicons name="notifications-outline" size={24} color="black" />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MediumFontText
              data="Forum"
              textstyle={{
                fontSize: 20,
                fontWeight: "500",
                marginVertical: 10,
              }}
            />

            {/* {userProfile_data?.currentClanMeeting && (
              <TouchableOpacity
                onPress={() => navigation.navigate("createforum")}
              >
                <Feather name="edit" size={24} color="black" />
              </TouchableOpacity>
            )} 
            this code was commented for now till i want user to create a forum
            */}
          </View>
          <View style={{ height: "85%" }}>
            <Forum />
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image, link) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // Do your Stuff...
        } else {
          setCurrentTab(title);
          navigation.navigate(link);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 4,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#5359D1" : "black",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            textAlign: "justify",
            color: currentTab == title ? "#5359D1" : "black",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

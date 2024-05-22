import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Rating } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const VendorService = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white",height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.container1}>
          <Image source={require("../../assets/sevImg/profile.png")} />
          <Text style={{ paddingTop: 10, fontWeight: "bold", fontSize: 20 }}>
            James John
          </Text>
          <Text style={{}}>Builder</Text>
          <Text>27 years of experience</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            paddingTop: 15,
          }}
        >
          <View>
            <Pressable
              onPress={() => {
                navigation.navigate("review");
              }}
              style={{ alignItems: "center" }}
            >
              <Image
                source={require("../../assets/sevImg/revIcon.png")}
                style={{ marginBottom: 5 }}
              />
              <Text style={{ paddingBottom: 5 }}>80%</Text>
              <Text>Reviews</Text>
            </Pressable>
          </View>
          <View style={{ alignItems: "center" }}>
            <Icon
              name="heart"
              size={20}
              color="#04973C"
              style={{ paddingBottom: 5 }}
            />
            <Text style={{ paddingBottom: 5 }}>36</Text>
            <Text>Likes</Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={20}
              // startingValue={0}
              ratingBackgroundColor="white"
              ratingColor="green"
              value={3}
              readonly
              style={{ paddingBottom: 5 }}
            />

            <Text style={{ paddingBottom: 5 }}>80%</Text>
            <Text>Rating</Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 30, height: "50%" }}>
        <View style={styles.downContainer}>
          <Text style={{ fontSize: 20, fontWeight: "400", paddingBottom: 5 }}>
            Contact
          </Text>
          <Text>
            <Icon name="phone" size={20} color="green" />
            <Text> 070 4583 9007 </Text>
          </Text>

          <Text>
            <Icon name="map-marker" size={20} color="green" />
            <Text> 517 Washington Ave, Machester,Kenturky 39004</Text>
          </Text>
        </View>
        <View
          style={{
            paddingBottom: 20,
            paddingTop: 25,
            borderBottomWidth: 1,
            borderBottomColor: "#F6F6F6",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "400", paddingBottom: 5 }}>
            Working Time
          </Text>
          <Text>Monday-Friday 08:00am - 09:00pm</Text>
          <Text>Weekends 09:00am - 08:00pm</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Icon name="phone" size={30} color="white" style={styles.icon} />
            <Text style={styles.text}>Call Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3FFF3",
    height: "52%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  container1: {
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#DEF6E3",
  },
  downContainer: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F6F6F6",
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#04973C",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 40,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});

export default VendorService;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Review = ({ navigation }) => {
  const items = [
    {
      name: "James Laniser",
      desc: "Lorem ipsum dolor sit amet consectetur, purus sed quisque lacacini venenatics. Egestas odio neque aliquet id",
    },
    {
      name: "James Laniser",
      desc: "Lorem ipsum dolor sit amet consectetur, purus sed quisque lacacini venenatics. Egestas odio neque aliquet id",
    },
    {
      name: "James Laniser",
      desc: "Lorem ipsum dolor sit amet consectetur, purus sed quisque lacacini venenatics. Egestas odio neque aliquet id",
    },
    {
      name: "James Laniser",
      desc: "Lorem ipsum dolor sit amet consectetur, purus sed quisque lacacini venenatics. Egestas odio neque aliquet idlake",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {items.map((item, index) => (
          <View style={styles.reviewContainer} key={index}>
            <View style={styles.profile}>
              <Image
                source={require("../../assets/sevImg/review.png")}
                style={styles.profileImage}
              />
              <View style={styles.profileInfo}>
                <Text style={styles.nameText}>{item.name}</Text>
                <View style={styles.ratingContainer}>
                  <Icon name="star" size={15} color="#04973C" />
                  <Text style={styles.ratingText}>5</Text>
                </View>
              </View>
            </View>
            <Text style={styles.descText}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("vendorReview");
        }}
      >
        <Text style={styles.buttonText}>Create your Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  reviewContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    padding: 20,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  profileInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
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
    gap: 5,
  },
  ratingText: {
    marginLeft: 5,
  },
  descText: {
    fontSize: 15,
   
  },
  buttonContainer: {
    backgroundColor: "#04973C",
    padding: 15,
    alignItems: "center",
     borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});

export default Review;

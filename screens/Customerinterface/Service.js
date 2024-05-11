import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Service = ({ navigation }) => {
  const images = [
    {
      id: 1,
      source: require("../../assets/sevImg/engineering.png"),
      text: "Engineering",
    },
    {
      id: 2,
      source: require("../../assets/sevImg/electricity.png"),
      text: "Electricity",
    },
    {
      source: require("../../assets/sevImg/cleaning.png"),
      text: "Cleaning",
    },
    {
      source: require("../../assets/sevImg/rentals.png"),
      text: "Rentals",
    },
    {
      id: 5,
      source: require("../../assets/sevImg/chefs.png"),
      text: "Chefs",
    },
    {
      id: 6,
      source: require("../../assets/sevImg/others.png"),
      text: "Others...",
    },
  ];

  const engineering = [
    {
      id: 1,
      source: require("../../assets/sevImg/engineering.png"),
      text: "Cleaning",
    },
    {
      id: 2,
      source: require("../../assets/sevImg/electricity.png"),
      text: "Reparing",
    },
    {
      id: 3,
      source: require("../../assets/sevImg/cleaning.png"),
      text: "Electrician",
    },
    {
      id: 4,
      source: require("../../assets/sevImg/rentals.png"),
      text: "Carpenter",
    },
    {
      id: 5,
      source: require("../../assets/sevImg/chefs.png"),
      text: "Repairing",
    },
    {
      id: 6,
      source: require("../../assets/sevImg/cleaning.png"),
      text: "Electrician",
    },
    {
      id: 7,
      source: require("../../assets/sevImg/rentals.png"),
      text: "Carpenter",
    },
    {
      id: 8,
      source: require("../../assets/sevImg/chefs.png"),
      text: "Repairing",
    },
    {
      id: 9,
      source: require("../../assets/sevImg/cleaning.png"),
      text: "Electrician",
    },
  ];

  const [tab, setTab] = React.useState("default");
  const filteredImages = tab !== "engineering" ? images : engineering;

  return (
    <View
      style={{
        padding: 20,
        position: "relative",
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text style={styles.text1}> Select which category...</Text>

      {tab === "engineering" && (
        <View style={styles.inputs}>
          <Icon name="search" size={20} color="#777" style={styles.icon} />
          <TextInput
            placeholder="Search by name..."
            style={styles.input}
            placeholderTextColor="#777"
          />
        </View>
      )}
      <View style={styles.container}>
        {filteredImages.map((image, index) => (
          <Pressable
            onPress={() =>
              tab === "default"
                ? setTab("engineering")
                : navigation.navigate("serviceview")
            }
            style={{
              ...styles.card,
              backgroundColor: index % 2 === 0 ? "#F3FFF3" : "#FFF1E7",
              borderColor: index % 2 === 0 ? "#3DCF3A" : "#F27F2D",
            }}
            key={index}
          >
            <View>
              <Image source={image.source} style={styles.image} />
              <Text style={styles.text}>{image.text}</Text>
            </View>
          </Pressable>
        ))}
      </View>
      {tab === "engineering" ? (
        ""
      ) : (
        <View style={styles.bottomView}>
          <Text style={styles.bottomText}>
            Register with the Estate Admin to offer your services, making it
            easier for people to contact you for work opportunities.
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 30,
    columnGap: 20,
    marginTop: 20,
    justifyContent: "space-evenly",
  },
  card: {
    alignItems: "center",
    width: "28%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomView: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  bottomText: {
    textAlign: "center",
    width: "80%",
    fontWeight: "400",
    fontSize: 15,
  },
  text1: {
    paddingTop: 10,
    paddingBottom: 15,
    color: "rgba(0, 0, 0, 0.5)",
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
});

export default Service;

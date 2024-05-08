import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  ScrollView
} from "react-native";
import { Rating } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons"; 

const ServiceView = ({navigation}) => {
const items = [
  {
    id: 1,
    source: require("../../assets/sevImg/med.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: "21 years of experience ",
  },
  {
    id: 2,
    source: require("../../assets/sevImg/class.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: " 21 years of experience",
  },
  {
    id: 3,
    source: require("../../assets/sevImg/engr.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: " 21 years of experience",
  },
  {
    id: 4,
    source: require("../../assets/sevImg/mask.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: " 21 years of experience",
  },
  {
    id: 5,
    source: require("../../assets/sevImg/med.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: " 21 years of experience",
  },
  {
    id: 6,
    source: require("../../assets/sevImg/class.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: "21 years of experience ",
  },
  {
    id: 7,
    source: require("../../assets/sevImg/engr.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: " 21 years of experience",
  },
  {
    id: 8,
    source: require("../../assets/sevImg/mask.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: " 21 years of experience",
  },
  {
    id: 9,
    source: require("../../assets/sevImg/med.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: " 21 years of experience",
  },
  {
    id: 9,
    source: require("../../assets/sevImg/class.png"),
    names: "James John",
    title: "Mechanical Engr",
    desc: " 21 years of experience",
  },
];

  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Text style={styles.text1}>Category:Engineering/Mechanical</Text>
      <View style={styles.inputs}>
        <Icon name="search" size={20} color="#777" style={styles.icon} />
        <TextInput
          placeholder="Search by name..."
          style={styles.input}
          placeholderTextColor="#777"
        />
      </View>

      <ScrollView>
        <View style={{ justifyContent: "space-evenly", flexDirection: "row", flexWrap: "wrap" }}>
          {items.map((item) => (
            <View style={styles.cards}>
              <View style={styles.cardImage}>
                <Image
                  source={item.source}
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

                <Text style={styles.cardName}>{item.names}</Text>
                <Text style={styles.cardSubtitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

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

export default ServiceView
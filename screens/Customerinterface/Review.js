import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
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
    <View
      style={{
        padding: 20,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView>
        {items.map((item, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.profile}>
              <View style={styles.imgRow}>
                <Image source={require("../../assets/sevImg/review.png")} />
                <View>
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "row",
                      marginBottom: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.nameText}>{item.name}</Text>
                    <View
                      style={{
                        height: 25,
                        width: 47,
                        padding: 5,
                        borderWidth: 1,
                        borderRadius: 10,
                        borderColor: "#81CB9D",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 5,
                      }}
                    >
                      <Text>
                        <Icon name="star" size={15} color="#04973C" />
                      </Text>

                      <Text>5</Text>
                    </View>
                  </View>
                  <View style={styles.textContent}>
                    <Text style={styles.desText}>{item.desc}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate("vendorReview");
          }}
        >
          <Text style={styles.text}>Create your Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    paddingBottom: 20,
    paddingTop: 20,
  },
  
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#04973C",
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 14,
  },

  text: {
    fontSize: 16,
    color: "white",
  },
  imgRow: {
    flexDirection: "row",
   
    overflow: "visible",
    gap: 10,
    paddingRight: 70,
  
  },
  desText: {
    
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F6F6F6",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600"
  }
});

export default Review;

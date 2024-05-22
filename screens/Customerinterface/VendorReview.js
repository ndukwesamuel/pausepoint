import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput

} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Rating } from "react-native-elements";

const VendorReview = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Write description..."
        />
      </View>

      <View style={styles.rating}>
        <View>
          <Text style={styles.text}>Give a like?</Text>
          <Icon name="heart" size={20} color="green" style={styles.icon} />
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text style={styles.text}>Select Star rating</Text>
          <Text>
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
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Create your Review</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    marginTop: 180
  },

  buttonText: {
    fontSize: 16,
    color: "white",
  },
  input: {
    width: "100%",
   shadowColor: "#F7F9FA",backgroundColor: "#F7f9FA",
    borderColor: "gray",
    borderRadius: 5,
    padding: 20,
    height: "40%",
    
  },
  rating: {
    marginTop: 30
  },
  text:{
    fontSize: 20,
    fontWeight: "400",
    paddingBottom: 10,
    paddingTop: 10
  }

});

export default VendorReview
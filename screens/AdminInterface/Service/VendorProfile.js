import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const VendorProfile = ({ navigation }) => {
   const [categoryOpen, setCategoryOpen] = useState(false);
   const [categoryValue, setCategoryValue] = useState(null);
   const [categories, setCategories] = useState([
     { label: "Category 1", value: "category1" },
     { label: "Category 2", value: "category2" },
     { label: "Category 3", value: "category3" },
   ]);
   const [subCategoryOpen, setSubCategoryOpen] = useState(false);
   const [subCategoryValue, setSubCategoryValue] = useState(null);
   const [subCategories, setSubCategories] = useState([
     { label: "Sub-Category 1", value: "subcategory1" },
     { label: "Sub-Category 2", value: "subcategory2" },
     { label: "Sub-Category 3", value: "subcategory3" },
   ]);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/user.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Full Name" />

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.smallInput}
              placeholder="Enter Phone Number"
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Years of Experience</Text>
            <TextInput
              style={styles.smallInput}
              placeholder="Enter Years of Experience"
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Category</Text>
            <DropDownPicker
              open={subCategoryOpen}
              value={subCategoryValue}
              items={subCategories}
              setOpen={setSubCategoryOpen}
              setValue={setSubCategoryValue}
              setItems={setSubCategories}
              placeholder="Select"
              style={styles.dropdown}
              containerStyle={{ height: 40 }}
              dropDownStyle={{ backgroundColor: "#eee" }}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Sub-Category</Text>
            <DropDownPicker
              open={categoryOpen}
              value={categoryValue}
              items={categories}
              setOpen={setCategoryOpen}
              setValue={setCategoryValue}
              setItems={setCategories}
              placeholder="Select a category"
              style={styles.dropdown}
              containerStyle={{ height: 40 }}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
            />
          </View>
        </View>

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="55, Kennedy Lane, Whales Avenue, Lagos"
        />

        <Text style={styles.label}>Working Hours</Text>
        <TextInput
          style={styles.largeInput}
          placeholder="Monday-Friday, 08:00am - 09:00pm"
          multiline
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("VendorList")}
      >
        <Text style={styles.buttonText}>Create Vendor Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  formContainer: {
    padding: 20,
  },
  dropdown: {
    backgroundColor: "#eee",
    borderRadius: 5,
    marginBottom: 15,
    borderColor: "transparent",
     
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    padding: 15,
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#eee",
    marginBottom: 15,
  },
  smallInput: {
    fontSize: 16,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#eee",
    marginBottom: 5,
  },
  largeInput: {
    fontSize: 16,
    padding: 15,
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#eee",
    paddingVertical: 35,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  column: {
    flex: 1,
    marginHorizontal: 5,
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

export default VendorProfile;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
const API_BASEURL = process.env.EXPO_PUBLIC_API_URL;

import axios from "axios";
import Toast from "react-native-toast-message";
import { Market_Category_Fun } from "../../../Redux/UserSide/MarketSLice";
import { CustomTextArea } from "../../../components/shared/InputForm";

const CreateProduct = ({ navigation }) => {
  const dispatch = useDispatch();
  const { marketcategory__data } = useSelector((state) => state.MarketSLice);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categoryValue, setCategoryValue] = useState(null);
  const [categories, setCategories] = useState([
    { label: "Category 1", value: "category1" },
    { label: "Category 2", value: "category2" },
    { label: "Category 3", value: "category3" },
  ]);
  console.log({
    gggfg: marketcategory__data,
  });
  const [subCategoryOpen, setSubCategoryOpen] = useState(false);
  const [subCategoryValue, setSubCategoryValue] = useState(null);
  const [subCategories, setSubCategories] = useState([
    { label: "Sub-Category 1", value: "subcategory1" },
    { label: "Sub-Category 2", value: "subcategory2" },
    { label: "Sub-Category 3", value: "subcategory3" },
  ]);
  const [profileImage, setProfileImage] = useState(""); // Replace with the user's actual data

  useEffect(() => {
    dispatch(Market_Category_Fun());

    return () => {};
  }, []);

  const { get_all_admin_Service_data, categoryes_data } = useSelector(
    (state) => state.AdminServiceSlice
  );
  const {
    user_data,
    user_isError,
    user_isSuccess,
    user_isLoading,
    user_message,
  } = useSelector((state) => state.AuthSlice);

  const { userProfile_data } = useSelector((state) => state.ProfileSlice);

  console.log({
    dddd: marketcategory__data,
  });

  const formattedCategories = marketcategory__data?.map((category) => ({
    label: category?.name,
    value: category._id,
  }));

  console.log({
    ewe: userProfile_data?.currentClanMeeting?._id,
  });
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [quantity, setquantity] = useState("");

  const [phone_number, setphone_number] = useState("");
  const [years_of_experience, setyears_of_experience] = useState("");
  const [description, setdescription] = useState("");
  const [opens, setopens] = useState("");

  const handleSave = () => {
    // Handle the saving of user data here (e.g., make API calls).
    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category", subCategoryValue);
    formData.append("description", description);

    formData.append("clanId", userProfile_data?.currentClanMeeting?._id);
    // formData.append("about_me", about_me);
    // formData.append("gender", gender);

    if (profileImage) {
      const uri = profileImage;
      const type = "image/jpeg"; // Adjust the type based on the file type
      const name = "photo.jpg"; // Adjust the name as needed
      formData.append("images", { uri, type, name });
    }

    formData.append("condition", "Brand New");

    CreateVendor_Mutation.mutate(formData);
  };


  const CreateVendor_Mutation = useMutation(
    (data_info) => {
      let url = `${API_BASEURL}market/product/create`;

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user_data?.token}`,
        },
      };

      return axios.post(url, data_info, config);
    },
    {
      onSuccess: (success) => {
        Toast.show({
          type: "success",
          text1: "Event created successfully!",
        });

        navigation.goBack();
      },

      onError: (error) => {
        console.log({
          error: error?.response?.data,
        });
        Toast.show({
          type: "error",
          text1: `${error?.response?.data?.error}`,
        });
      },
    }
  );

  return (
    <>
    <View>
      <Text>sam</Text>

    </View>
    {/* <View style={styles.container}>
    <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Name kaka</Text>
            <TextInput
              style={styles.smallInput}
              placeholder="Enter Phone Number"
              value={name}
              onChangeText={setname}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}> Price</Text>
            <TextInput
              style={styles.smallInput}
              placeholder="Enter Years of Experience"
              value={price}
              onChangeText={setprice}
            />
          </View>
        </View>
      {/* <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/user.png")}
          style={styles.image}
        />
      </View> */}

      <View style={styles.formContainer}>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}>Name kaka</Text>
            <TextInput
              style={styles.smallInput}
              placeholder="Enter Phone Number"
              value={name}
              onChangeText={setname}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}> Price</Text>
            <TextInput
              style={styles.smallInput}
              placeholder="Enter Years of Experience"
              value={price}
              onChangeText={setprice}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.label}> Quantity</Text>
            <TextInput
              style={styles.smallInput}
              placeholder="Enter Quantity"
              value={quantity}
              onChangeText={setquantity}
            />
          </View>
          <View style={styles.column}>
            <Text style={styles.label}>Category</Text>
            <DropDownPicker
              open={subCategoryOpen}
              value={subCategoryValue}
              items={formattedCategories}
              setOpen={setSubCategoryOpen}
              setValue={setSubCategoryValue}
              setItems={setSubCategories}
              placeholder="Select"
              style={styles.dropdown}
              containerStyle={{ height: 40, zIndex: 10000 }}
              dropDownStyle={{ backgroundColor: "#eee", zIndex: 10000 }}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text style={styles.label}>Description</Text>

          <CustomTextArea
            placeholder="Write description..."
            value={description}
            onChangeText={setdescription}
            style={styles.largeInput}
            inputStyle={{
              backgroundColor: "#F6F8FAE5",
              paddingHorizontal: 10,
              paddingVertical: 20,
              height: 200,
              padding: 10,
              borderRadius: 6,
              fontSize: 16,
            }}
          />
        </View>

        <TouchableOpacity
          onPress={pickImage}
          style={{
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={{ width: 100, height: 100 }}
            />
          ) : (
            <Text> Input Product Image</Text>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        // onPress={() => navigation.navigate("VendorList")}
        onPress={handleSave}
      >
        {CreateVendor_Mutation.isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Create Vendor Profile</Text>
        )}
      </TouchableOpacity>
    </View> */}
  
  
    </>);
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  dropdown: {
    backgroundColor: "#eee",
    borderRadius: 5,
    marginBottom: 15,
    borderColor: "transparent",
    zIndex: 100,
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
    marginBottom: 15,
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

export default CreateProduct;




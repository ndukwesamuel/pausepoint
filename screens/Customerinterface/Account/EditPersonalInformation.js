

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Touchable, TouchableOpacity } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { FormLabel, Forminput } from '../../../components/shared/InputForm';
import AppScreen from '../../../components/shared/AppScreen';


const EditPersonalInformation = () => {
    const [name, setName] = useState('John Doe'); // Replace with the user's actual data
    const [email, setEmail] = useState('johndoe@example.com'); // Replace with the user's actual data
    const [address, setAddress] = useState('123 Main St, City, Country'); // Replace with the user's actual data
    const [gender, setGender] = useState('Male'); // Replace with the user's actual data
    const [profileImage, setProfileImage] = useState('https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'); // Replace with the user's actual data

    const [phone, setPhone] = useState('08056148116'); // Replace with the user's actual data


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
    };

    const handleSave = () => {
        // Handle the saving of user data here (e.g., make API calls).
    };

    return (
        <AppScreen>

            <View>

                <TouchableOpacity onPress={pickImage}>
                    <Image source={{ uri: profileImage }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                </TouchableOpacity>
                {/* <Button title="Change Profile Picture" onPress={pickImage} /> */}
                <View>
                    <FormLabel data='   Email Address ' />
                    <Forminput placeholder='Your Name' onChangeText={setEmail} value={email} />

                </View>

                <View>
                    <FormLabel data='   Phone Number ' />
                    <Forminput placeholder='Phone Number' onChangeText={setPhone} value={phone} />

                </View>

                <View>
                    <FormLabel data='   Address ' />
                    <Forminput placeholder='your address' onChangeText={setAddress} value={address} />

                </View>

                <View>
                    <FormLabel data='   Gender ' />
                    <Forminput placeholder='your address' onChangeText={setGender} value={gender} />

                </View>


                <Button title="Save" onPress={handleSave} />
            </View>

        </AppScreen>
    );
};

export default EditPersonalInformation;

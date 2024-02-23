






import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppScreen from '../components/shared/AppScreen'
import RegHeaders from '../components/shared/RegHeaders'
import { RegistraionHeadersText, RegistraionParagraphText } from '../components/shared/Registraion'
import { FormLabel, Formbutton, Forminput, Forminputpassword } from '../components/shared/InputForm'
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { authScreenChange } from '../Redux/OnboardingSlice'
import { useDispatch } from 'react-redux'

interface Registraionprops {
    mainPassword: string;
    confirmPassword: string;
}

const ForgottenPasswod = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const [remember, setRemember] = useState(false)

    const [passwords, setPasswords] = useState<Registraionprops>({
        mainPassword: '',
        confirmPassword: '',
    });

    const handlePasswordChange = (field: keyof Registraionprops, text: string) => {
        setPasswords((prevPasswords) => ({
            ...prevPasswords,
            [field]: text,
        }));
    };

    const handleSubmit = () => {
        console.log('Current Password:', passwords.mainPassword);
        console.log('New Password:', passwords.confirmPassword);
        // Add your password change logic here, e.g., sending it to a server
    };

    const handleInputChange = (text: string) => {
        setInputValue(text);
    };
    return (

        <AppScreen>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>

                    <View style={{ flex: 1 }}>

                        {/* <TouchableOpacity style={{ marginBottom: 30 }}
                            onPress={() => navigation.goBack()}> */}

                        <TouchableOpacity
                            style={{ marginBottom: 30 }}
                            onPress={() => dispatch(authScreenChange("LOGIN"))}>

                            <AntDesign name="arrowleft" size={28} color="black" />
                        </TouchableOpacity>


                        <RegistraionHeadersText data="Forgotten Passwod" textStyle={{}} />

                        <View style={{ flexDirection: "row", gap: 10, marginBottom: 30 }}>
                            <RegistraionParagraphText data="Please enter your email address below, we’ll send you a verification code." color="#8E8E8F" />



                        </View>



                        <View style={{ marginBottom: 15 }}>
                            <FormLabel data='Email ' />
                            <Forminput placeholder='Enter your email' onChangeText={setEmail} value={name} />
                        </View>


                    </View>





                    <View style={{ flex: 0.3 }}>



                        <Formbutton
                            buttonStyle={{ backgroundColor: '#04973C', paddingVertical: 14, alignItems: 'center', borderRadius: 5 }}
                            textStyle={{ color: 'white', fontWeight: "500", fontSize: 14, fontFamily: "RobotoSlab-Medium" }}
                            data='Submit'
                            onPress={() => {
                                navigation.navigate('OTP');
                                // Handle the button press here
                                console.log('Button pressed');
                                // You can call your custom function or navigate to another screen, etc.
                            }}
                        />
                    </View>

                </View>

            </KeyboardAvoidingView>
        </AppScreen >
    )
}

export default ForgottenPasswod

const styles = StyleSheet.create({






})
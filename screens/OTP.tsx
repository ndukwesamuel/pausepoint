






import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppScreen from '../components/shared/AppScreen'
import RegHeaders from '../components/shared/RegHeaders'
import { RegistraionHeadersText, RegistraionParagraphText } from '../components/shared/Registraion'
import { FormLabel, Formbutton, Forminput, Forminputpassword, Otpinput } from '../components/shared/InputForm'
import { Ionicons, AntDesign } from '@expo/vector-icons';

interface Registraionprops {
    mainPassword: string;
    confirmPassword: string;
}

const OTP = ({ navigation }: { navigation: any }) => {

    const [otpValue, setOTPValue] = useState('');

    const handleOTPChange = (otp: string) => {
        setOTPValue(otp);
    };


    console.log({ otpValue });





    return (

        <AppScreen>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>

                    <View style={{ flex: 1 }}>

                        <TouchableOpacity style={{ marginBottom: 30 }}
                            onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={28} color="black" />
                        </TouchableOpacity>


                        <RegistraionHeadersText data="OTP Code Verification" textStyle={{}} />

                        <View style={{ flexDirection: "row", gap: 10, marginBottom: 30 }}>
                            <RegistraionParagraphText data="We have sent an OTP code to your email address **********nne@gmail.com. Enter the OTP code below to verify." color="#8E8E8F" />



                        </View>




                        <View style={{ marginBottom: 15 }}>
                            <Otpinput onOTPChange={handleOTPChange}

                                containerView={{

                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}
                                inputStyle={{
                                    width: 70,
                                    height: 58,
                                    textAlign: 'center',
                                    borderWidth: 1,

                                    padding: 10,
                                    borderRadius: 5,
                                    fontSize: 16,
                                    backgroundColor: "#F6F8FAE5",
                                }}

                            />

                        </View>

                        <View style={{ alignItems: "center" }}>
                            <Text style={{ fontSize: 14, fontWeight: "400", fontFamily: "RobotoSlab-Medium" }}> Didn’t receive email?</Text>
                            <Text>You can resend code in 49 secs</Text>
                        </View>


                        <Formbutton
                            buttonStyle={{ backgroundColor: 'transparent', paddingVertical: 14, alignItems: 'center', borderRadius: 5, borderWidth: 1, borderColor: '#04973C' }}
                            textStyle={{ color: 'black', fontWeight: "500", fontSize: 14, fontFamily: "RobotoSlab-Medium" }}
                            data='Resend Code'
                            onPress={() => {
                                navigation.navigate('CreatePassword');
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

export default OTP

const styles = StyleSheet.create({






})
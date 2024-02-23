


import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform, Linking } from 'react-native'
import React, { useState } from 'react'
import { emergencydata } from '../../../components/Emergency/emdata'
import AppScreen from '../../../components/shared/AppScreen'
import EmergencyModal, { EmergencyModalTwo } from '../../../components/Emergency/Modal'
import { LightFontText, MediumFontText, RegularFontText } from "../../../components/shared/Paragrahp"
import DarkModeToggle from '../../../components/Account/DarkModeToggle'
import General from '../../../components/Account/General'
import { DeleteAccountModal } from '../../../components/Account/Modal'
import { Logout } from '../../../components/Account/Logout'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../navigation/AppNavigation'

import { FontAwesome5 } from '@expo/vector-icons';
import { CustomTextArea, Formbutton } from '../../../components/shared/InputForm'

type GeneralData = {
    id: number;
    label: string;
    link: string;
    des: string
};

const data: GeneralData[] = [
    {
        id: 1,
        label: 'Email Us',
        des: "Replies within 8hrs",
        link: 'PersonalInfo',

    },
    {
        id: 2,
        label: 'Email Us',
        des: "Replies within 8hrs",
        link: 'PersonalInfo',
    },

    {
        id: 3,
        label: 'Email Us',
        des: "Replies within 8hrs",
        link: 'PersonalInfo',
    },




];


let new_item = {
    id: 4,
    icon: 'logout-outline',
    label: 'Logout',
    icon_type: 'Ionicons',
    link: "Logout"
}



const ComplaintsandFeedback = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const [modalVisible, setModalVisible] = useState(false);
    const [modalformVisible, setModalFormVisible] = useState(false);
    const [text, setText] = useState('');

    const handleTextChange = (newText: string) => {
        setText(newText);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeFormModal = () => {
        setModalFormVisible(false);
    };



    const closeModal = () => {
        setModalVisible(false);
    };


    const handleDarkModeToggle = (isDarkMode: boolean) => {
        // Add logic to handle dark mode state in your app
        console.log(`Dark Mode is ${isDarkMode ? 'enabled' : 'disabled'}`);
        // You can update your app's theme or styles based on the isDarkMode state here.
    };




    const makePhoneCall = () => {
        Linking.openURL('tel:+1234567890');
    };







    return (

        <AppScreen>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>


                <View style={{ flex: 1, paddingHorizontal: 20 }}>
                    <MediumFontText data="We listen" textstyle={{ fontSize: 18, fontWeight: '500' }} />
                    <RegularFontText data="There is always room for Improvement!" textstyle={{ fontSize: 12 }} />
                    <RegularFontText data="Tell us about your experiences so far or how we can make Pausepoint better for you" textstyle={{ fontSize: 12 }} />




                    <View style={{ marginTop: 20 }}>
                        <CustomTextArea
                            placeholder="Leave a comment..."
                            value={text}
                            onChangeText={handleTextChange}
                            style={{ width: '80%', }}
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







                    <Formbutton
                        buttonStyle={{ backgroundColor: "#04973C", borderWidth: 1, borderColor: '#04973C', paddingVertical: 14, alignItems: 'center', borderRadius: 5, flexDirection: "row", justifyContent: "center", gap: 10 }}
                        textStyle={{ color: 'white', fontWeight: "500", fontSize: 14, fontFamily: "RobotoSlab-Medium" }}
                        data='Send'

                    />




                </View>





            </KeyboardAvoidingView>

        </AppScreen>
    )
}

export default ComplaintsandFeedback

const styles = StyleSheet.create({})
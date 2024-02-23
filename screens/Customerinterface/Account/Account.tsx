


import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { emergencydata } from '../../../components/Emergency/emdata'
import AppScreen from '../../../components/shared/AppScreen'
import EmergencyModal, { EmergencyModalTwo } from '../../../components/Emergency/Modal'
import { MediumFontText, RegularFontText } from "../../../components/shared/Paragrahp"
import DarkModeToggle from '../../../components/Account/DarkModeToggle'
import General from '../../../components/Account/General'
import { DeleteAccountModal } from '../../../components/Account/Modal'
import { Logout } from '../../../components/Account/Logout'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../navigation/AppNavigation'



type GeneralData = {
    id: number;
    icon: string;
    label: string;
    icon_type: string
    link: string
};

const data: GeneralData[] = [
    {
        id: 1,
        icon: 'user',
        label: 'Edit Personal Info',
        icon_type: 'AntDesign',
        // link: 'PersonalInfo',
        link: "comming"

    },
    {
        id: 2,
        icon: 'notifications-outline',
        label: 'Notification',
        icon_type: 'Ionicons',
        // link: 'notificationsettings',
        link: "comming"

    },

    {
        id: 3,
        icon: 'setting',
        label: 'Change Password',
        icon_type: 'Ionicons',
        // link: 'ChangePassowrd',
        link: "comming"

    },


    // Add more objects as needed
];


let new_item = {
    id: 4,
    icon: 'logout-outline',
    label: 'Logout',
    icon_type: 'Ionicons',
    link: "Logout"
}



const Account = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();


    const [modalVisible, setModalVisible] = useState(false);
    const [modalformVisible, setModalFormVisible] = useState(false);


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








    const RenderItem = ({ item }: { item: any }) => {


        return (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#CFCDCD', borderRadius: 6, paddingHorizontal: 10, gap: 10, paddingVertical: 20, marginBottom: 20 }}

                onPress={() => setModalVisible(true)
                }
            >

                <View style={{ borderWidth: 1, borderColor: '#CFCDCD', borderRadius: 6, justifyContent: 'center', alignItems: 'center', }}>

                    <Image source={item.image} style={{ width: 38, height: 40 }} />
                </View>

                <View style={{ width: '90%' }}>
                    <Text style={{ fontWeight: '500', fontSize: 14, fontFamily: 'RobotoSlab-Medium', marginBottom: 10 }}>{item.name}</Text>

                    <Text>{item.description}</Text>



                </View>

            </TouchableOpacity>
        )
    }


    return (

        <AppScreen>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>

                <View style={{ marginBottom: 20, justifyContent: 'center', alignItems: 'center', borderBottomColor: '#CFCDCD', borderBottomWidth: 1, paddingBottom: 10 }}>

                    <MediumFontText data="Account" textstyle={{ fontSize: 18 }} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 20 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Image source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={{ width: 68, height: 68, borderRadius: 50 }} />

                        <View>

                            <MediumFontText data="John Doe" textstyle={{ fontSize: 18, fontWeight: '500' }} />
                            <RegularFontText data="8975464" textstyle={{ fontSize: 14, fontWeight: '400' }} />

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 20 }}>
                        <Text>General</Text>
                        <View style={{ borderColor: '#CFCDCD', borderWidth: 1, width: '80%', }} />
                    </View>



                    <View style={{ gap: 40, marginBottom: 40 }}>
                        {data?.map((item, index) => (
                            <General key={item?.id} item={item} />
                        ))}
                    </View>

                    <DarkModeToggle onDarkModeToggle={handleDarkModeToggle} />
                    <View style={{ borderBottomColor: '#CFCDCD', borderBottomWidth: 1, marginBottom: 20 }} />

                    <Logout item={
                        new_item
                    } />





                    <View>
                        <TouchableOpacity
                            // onPress={() => navigation.navigate('DeleteAccount')}
                            onPress={() => navigation.navigate('comming')}


                            style={{ justifyContent: "flex-end", alignItems: 'center', flexDirection: 'row', gap: 10, marginTop: 20 }}>


                            <RegularFontText data="Delete Account" textstyle={{ fontSize: 14, fontWeight: '400', color: 'red', textDecorationColor: 'red', textDecorationLine: 'underline' }} />

                        </TouchableOpacity>
                    </View>



                </View>




                <EmergencyModalTwo visible={modalformVisible} onClose={closeFormModal} />


            </KeyboardAvoidingView>

        </AppScreen>
    )
}

export default Account

const styles = StyleSheet.create({})
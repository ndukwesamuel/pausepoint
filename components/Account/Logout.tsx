import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { MediumFontText, RegularFontText } from '../shared/Paragrahp';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigation';
import ForumModal from '../Forum/ForumModal';
import { reset_login } from '../../Redux/AuthSlice';
import { useDispatch } from 'react-redux';
import { reset_isOnboarding } from '../../Redux/DontwantToResetSlice';
import { reset_Admin_Get_All_User } from '../../Redux/Admin/UserSlice';
import { reset_ClanSlice } from '../../Redux/UserSide/ClanSlice';
import { reset_EventSlice } from '../../Redux/UserSide/EventSlice';
import { reset_ForumSlice } from '../../Redux/UserSide/ForumSlice';
import { reset_UserProfileSlice } from '../../Redux/UserSide/UserProfileSlice';
import { reset_ProfileSlice } from '../../Redux/ProfileSlice';


type GeneralData = {
    id: number;
    icon: string;
    label: string;
    icon_type: string
    link: string


};
// interface GeneralProps {
//     item: GeneralData;

// }




const Stack = createNativeStackNavigator<RootStackParamList>();
export const Logout = ({ item }: { item: GeneralData, }) => {
    console.log({ item });
    // const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const navigateToPersonalInfo = () => {

        console.log("this is to logout");


    };


    return (

        <>
            <TouchableOpacity
                onPress={toggleModal}
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>

                    <Ionicons name="log-out-outline" size={24} color="black" />
                    <MediumFontText data={item?.label} textstyle={{ fontSize: 17, fontWeight: '500' }} />
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </TouchableOpacity>

            <LogoutModal visible={isModalVisible} onClose={toggleModal} />

        </>
    )
}





export function LogoutModal({ visible, onClose }: { visible: boolean, onClose: () => void }) {
    const dispatch = useDispatch();
    let data = [
        {
            id: "1",
            title: "Hide this post",
            description: "This announcement will be deleted instantly",
            img: require("../../assets/images/trash.png"),
        },
        {
            id: "2",
            title: "Save for later",
            description: "Save this post to view later ",
            img: require("../../assets/images/save-add.png"),
        },
        {
            id: "3",
            title: "Mute John Doe",
            description: "Temporary mute the announcement author ",
            img: require("../../assets/images/volume-cross.png"),
        },
    ];

    const handleLogout = async () => {
        dispatch(reset_login());
        dispatch(reset_isOnboarding());
        dispatch(reset_Admin_Get_All_User());
        dispatch(reset_ClanSlice());
        dispatch(reset_EventSlice());
        dispatch(reset_ForumSlice());
        dispatch(reset_UserProfileSlice());
        dispatch(reset_ProfileSlice());



        // await AsyncStorage.removeItem("token");
        // await AsyncStorage.removeItem("userdata");log
        console.log("this is to logout");

    };
    return (
        <Modal transparent={true} animationType="slide" visible={visible}>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ marginBottom: 20, flexDirection: "row", alignItems: "center", borderBottomColor: '#CFCDCD', borderBottomWidth: 1, paddingBottom: 10, }}>


                            <MediumFontText data="Logout" textstyle={{ fontSize: 18, width: '80%', textAlign: 'center' }} />
                        </View>


                        <RegularFontText data="Are you sure you want to log out?" textstyle={{ fontSize: 14, fontWeight: "400", textAlign: "center" }} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 20, }}>
                            <TouchableOpacity style={{ backgroundColor: "#FDF2F3", paddingHorizontal: 12, paddingVertical: 12, borderRadius: 6 }}



                                onPress={handleLogout}>

                                <Text style={{ fontSize: 14, fontWeight: "400", fontFamily: "RobotoSlab-Regular", }}>Yes, Log out</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ backgroundColor: "#04973C", paddingHorizontal: 12, paddingVertical: 12, borderRadius: 6 }}

                                onPress={onClose}>


                                <Text style={{ fontSize: 14, fontWeight: "400", fontFamily: "RobotoSlab-Regular", color: "white" }}>No, I’m staying</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        width: "100%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: "30%",
    },
});

export default ForumModal;




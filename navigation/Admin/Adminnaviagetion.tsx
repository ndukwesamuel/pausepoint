import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import UserTabNavigation from './AdminTabNavigation';
import Neigborhood from '../../screens/Customerinterface/Neigborhood';
import { AntDesign } from '@expo/vector-icons';
import Chats from '../../screens/Customerinterface/Chats';
import Createclan from '../../screens/Customerinterface/Clan/Createclan.js';
import Joinclan from '../../screens/Customerinterface/Clan/Joinclan';
import ICEcontact from '../../screens/Customerinterface/ICEcontact';
import HelpSupport from '../../screens/Customerinterface/Help/HelpSupport';
import LiveSupport from '../../screens/Customerinterface/Help/LiveSupport';
import ComplaintsandFeedback from '../../screens/Customerinterface/Help/ComplaintsandFeedback';
import UserPolicy from '../../screens/Customerinterface/Help/UserPolicy';
import FAQ from '../../screens/Customerinterface/Help/FAQ';
import TermsConditions from '../../screens/Customerinterface/Help/TermsConditions';
import PrivacyPolicy from '../../screens/Customerinterface/Help/PrivacyPolicy';
import Share from '../../screens/Customerinterface/Help/Share';
import AdminTabNavigation from './AdminTabNavigation';
import UserDetails from '../../screens/AdminInterface/UserDetails';
import Emergencies from '../../screens/AdminInterface/Emergency/Emergencies';
import EmergencyDetails from '../../screens/AdminInterface/Emergency/EmergencyDetails';
import NotificatioSettings from '../../screens/Customerinterface/Account/NotificatioSettings';
import Notification from '../../screens/Customerinterface/Account/Notification';
import Announcement from '../../screens/AdminInterface/Announcement/Announcement';
import CreateAnnouncement from '../../screens/AdminInterface/Announcement/CreateAnnouncement';
import CommentScreen from '../../screens/SharedScreen/CommentScreen';

import UserClans from '../../screens/AdminInterface/Estate_Admin_Clan/UserClans';

const Stack = createStackNavigator();


const SingleScreenWithBackButton = (screenName: any, component: any, title: any) => {
    return {
        name: screenName,
        component: component,
        options: ({ navigation }: { navigation: any }) => ({
            title: title,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{
                        marginLeft: 10,
                    }}
                >
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
            ),
        }),
    };
};

const Adminnaviagetion = () => {

    // const ShareScreen = SingleScreenWithBackButton('adminUserDetails', UserDetails, 'User Details');


    return (
        <Stack.Navigator initialRouteName="AdminTabNavigation">

            <Stack.Screen {...SingleScreenWithBackButton('AdminMyclan', UserClans, 'Admin My Clans')} />
            <Stack.Screen {...SingleScreenWithBackButton('adminUserDetails', UserDetails, 'User Details')} />
            <Stack.Screen {...SingleScreenWithBackButton('AdminEmergencies', Emergencies, 'Emergencies')} />
            <Stack.Screen {...SingleScreenWithBackButton('EmergencyDetails', EmergencyDetails, '')} />
            <Stack.Screen {...SingleScreenWithBackButton('Adminnotification', Notification, 'Notification')} />
            <Stack.Screen {...SingleScreenWithBackButton('AdminAnnouncement', Announcement, 'Announcement')} />
            <Stack.Screen {...SingleScreenWithBackButton('AdmincreateAnnouncement', CreateAnnouncement, 'Create Announcement')} />



            {/* <Stack.Screen name="Welcome" component={Onboarding} />
                <Stack.Screen name="Registraion" component={Registraion} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Forgotten" component={ForgottenPasswod} />
                <Stack.Screen name="OTP" component={OTP} />
                <Stack.Screen name="CreatePassword" component={CreatePassword} /> */}
            {/* <Stack.Screen name="usertab" component={UserTabNavigation} />
                <Stack.Screen name="PersonalInfo" component={EditPersonalInformation} />
                <Stack.Screen name="notificationsettings" component={NotificatioSettings} />
                <Stack.Screen name="ChangePassowrd" component={ChangePassowrd} />
                <Stack.Screen name="DeleteAccount" component={DeleteAccount} /> */}
            <Stack.Screen
                options={
                    {
                        headerShown: false
                    }
                }
                name="AdminTabNavigation" component={AdminTabNavigation} />

            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Neigborhood Directory',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (
                        // <Button
                        //     onPress={() => navigation.navigate('Home')}
                        //     title="Back"
                        // />

                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="Neigborhood" component={Neigborhood} />



            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Chats',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="Chats" component={Chats} />


            {/* 
            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Myclan',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="myclan" component={Myclan} /> */}

            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Create Clan',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="createclan" component={Createclan} />


            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Join Clan',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="joinclan" component={Joinclan} />


            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'ICE Contact',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="icecontact" component={ICEcontact} />


            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Help Support',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="HelpSupport" component={HelpSupport} />

            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Live Support',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="LiveSupport" component={LiveSupport} />





            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Complaints and Feedback',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="ComplaintsFeedback" component={ComplaintsandFeedback} />





            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'User Policy',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="UserPolicy" component={UserPolicy} />

            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'FAQ’s',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="FAQ" component={FAQ} />



            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Terms and Conditions',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="Terms&Conditions" component={TermsConditions} />


            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Privacy Policy',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="PrivacyPolicy" component={PrivacyPolicy} />



            <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Share this app with friends',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="Share" component={Share} />



            {/* <Stack.Screen
                options={({ navigation }) => ({
                    title: 'Share this app with friends',
                    headerStyle: {
                        backgroundColor: 'white',
                    },
                    headerLeft: () => (


                        <TouchableOpacity onPress={() => navigation.goBack()}
                            style={{
                                marginLeft: 10
                            }}
                        >

                            <AntDesign name="arrowleft" size={24} color="black" />
                        </TouchableOpacity>
                    ),
                })}

                name="adminUserDetails" component={UserDetails} /> */}



            {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
    );
};


export default Adminnaviagetion

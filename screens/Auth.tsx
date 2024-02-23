import { View, Text, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LoginScreen from './LoginScreen'
import Registraion from './Registraion'
import { useSelector } from 'react-redux'
import ForgottenPasswod from './ForgottenPasswod'
import Toast from 'react-native-toast-message'

const Auth = () => {
    const { userlogin } = useSelector((state: any) => state.OnboardingSlice)
    // console.log({ data });

    return (


        <View style={{ flex: 1 }}>






            {/* <Button
                title="Show Toast"
                // onPress={() => Toast.show({
                //     type: 'success',
                //     text1: 'Hello World',
                //     text2: 'Toast message',

                // })}

                // style={{ backgroundColor: 'red' }}
                onPress={() => console.log("skdjskjd")}
                color="red"

            /> */}

            {/* <TouchableOpacity
                style={{ backgroundColor: 'red', marginTop: 100 }}
                // onPress={() => console.log("skdjskjd")}

                onPress={() => Toast.show({
                    type: 'success',
                    text1: 'best',
                    text2: 'Toast message',

                })}
            >
                <Text>sam</Text>

            </TouchableOpacity> */}

            {userlogin === "LOGIN" && <LoginScreen />}
            {userlogin === "REGISTER" && <Registraion />}
            {userlogin === "FORGOTTENPASSWOD" && <ForgottenPasswod />}
        </View>
    )
}

export default Auth
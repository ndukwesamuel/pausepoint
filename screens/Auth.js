import { View, Text, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import LoginScreen from "./LoginScreen";
import Registraion from "./Registraion";
import ForgottenPasswod from "./ForgottenPasswod";
import Toast from "react-native-toast-message";
import { reset_isOnboardings } from "../Redux/DontwantToResetSlice";
import { useDispatch, useSelector } from "react-redux";
import { reset_login } from "../Redux/AuthSlice";
import OTP from "./OTP";
import { authScreenChange } from "../Redux/OnboardingSlice";
import CreatePassword from "./CreatePassword";

const Auth = () => {
  const { userlogin } = useSelector((state) => state?.OnboardingSlice);
  const ss = useSelector((state) => state.DontwantToResetSlice);
  // console.log({ data });OnboardingSlice
  const dispatch = useDispatch();
  const {
    user_data,
    user_isError,
    user_isSuccess,
    user_isLoading,
    user_message,
  } = useSelector((state) => state.AuthSlice);

  useEffect(() => {
    if (user_message === "Email Not Verified") {
      dispatch(authScreenChange("OTP"));
    }
    return () => {};
  }, [user_data, user_message]);

  return (
    <View style={{ flex: 1 }}>
      {userlogin === "LOGIN" && <LoginScreen />}
      {userlogin === "OTP" && <OTP />}

      {userlogin === "REGISTER" && <Registraion />}

      {userlogin === "FORGOTTENPASSWOD" && <ForgottenPasswod />}
      {userlogin === "CREATEPASSWORD" && <CreatePassword />}
    </View>
  );
};

export default Auth;

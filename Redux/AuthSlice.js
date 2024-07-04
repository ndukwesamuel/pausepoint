// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleApiError } from "./shareApi";
const API_BASEURL = process.env.EXPO_PUBLIC_API_URL;

import { AnyIfEmpty } from "react-redux";
import Toast from "react-native-toast-message";

// import { Alert } from "react-native";

// let userAPi = process.env.APIBASEURL + "user/login";

const initialState = {
  user_data: null,
  user_isError: false,
  user_isSuccess: false,
  user_isLoading: false,
  user_message: null,
};

const Login_Fun_Service = async (data) => {
  let url = `${API_BASEURL}login`;

  console.log({ dd: url });

  try {
    const response = await axios.post(url, data);

    return response.data;
  } catch (error) {
    // console.log({ error: error?.response });

    throw error;
  }
};

export const Login_Fun = createAsyncThunk(
  "auth/Login_Fun",
  async (data, thunkAPI) => {
    try {
      return await Login_Fun_Service(data);
    } catch (error) {
      console.log({
        fff: error?.response?.data,
      });
      const errorMessage = handleApiError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset_login: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login_Fun.pending, (state) => {
        state.user_isLoading = true;
      })
      .addCase(Login_Fun.fulfilled, (state, action) => {
        state.user_isLoading = false;
        state.user_isSuccess = true;
        state.user_isError = false;
        state.user_message = null;
        state.user_data = action.payload;
      })
      .addCase(Login_Fun.rejected, (state, action) => {
        state.user_isLoading = false;
        state.user_isError = true;
        state.user_message = action.payload;
        state.user_data = null;
        state.user_isSuccess = false;
      });
  },
});

export const { reset_login } = AuthSlice.actions;

export default AuthSlice.reducer;

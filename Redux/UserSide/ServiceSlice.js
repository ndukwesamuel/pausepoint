// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASEURL } from "@env";
import { AnyIfEmpty } from "react-redux";
import Toast from "react-native-toast-message";
import { handleApiError } from "../shareApi";

// import { Alert } from "react-native";

// let userAPi = process.env.APIBASEURL + "user/login";

const initialState = {
  all_service_category_data: null,
  all_service_category_isError: false,
  all_service_category_isSuccess: false,
  all_service_category_isLoading: false,
  all_service_category_message: null,

  all_service__data: null,
  all_service__isError: false,
  all_service__isSuccess: false,
  all_service__isLoading: false,
  all_service__message: null,
};

export const All_service_category_data_Fun = createAsyncThunk(
  "ServiceSlice/All_service_category_data_Fun",
  async (data, thunkAPI) => {
    try {
      let mydata = thunkAPI.getState().AuthSlice.user_data;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${mydata?.token}`,
        },
      };

      const response = await axios.get(
        `${API_BASEURL}services/category/all`,
        config
      );

      return response.data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const All_service__data_Fun = createAsyncThunk(
  "ServiceSlice/All_service__data_Fun",
  async (data, thunkAPI) => {
    try {
      let mydata = thunkAPI.getState().AuthSlice.user_data;
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${mydata?.token}`,
        },
      };

      const response = await axios.get(
        `${API_BASEURL}services/vendors`,
        config
      );

      return response.data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const ServiceSlice = createSlice({
  name: "ServiceSlice",
  initialState,
  reducers: {
    reset_ServiceSlice: (state) => initialState,

    // reste_Get_Singel_Public__events_Fun: (state) => {
    //   state.single_public_event_isLoading = false;
    //   state.single_public_event_isError = false;
    //   state.single_public_event_message = null;
    //   state.single_public_event = null;
    //   state.single_public_event_isSuccess = false;
    // },
  },
  extraReducers: (builder) => {
    builder

      .addCase(All_service_category_data_Fun.pending, (state) => {
        state.all_service_category_isLoading = true;
      })
      .addCase(All_service_category_data_Fun.fulfilled, (state, action) => {
        state.all_service_category_isLoading = false;
        state.all_service_category_isSuccess = true;
        state.all_service_category_isError = false;
        state.all_service_category_message = null;
        state.all_service_category_data = action.payload;
      })
      .addCase(All_service_category_data_Fun.rejected, (state, action) => {
        state.all_service_category_isLoading = false;
        state.all_service_category_isError = true;
        state.all_service_category_message = action.payload;
        state.all_service_category_data = null;
        state.all_service_category_isSuccess = false;
      })
      .addCase(All_service__data_Fun.pending, (state) => {
        state.all_service__isLoading = true;
      })
      .addCase(All_service__data_Fun.fulfilled, (state, action) => {
        state.all_service__isLoading = false;
        state.all_service__isSuccess = true;
        state.all_service__isError = false;
        state.all_service__message = null;
        state.all_service__data = action.payload;
      })
      .addCase(All_service__data_Fun.rejected, (state, action) => {
        state.all_service__isLoading = false;
        state.all_service__isError = true;
        state.all_service__message = action.payload;
        state.all_service__data = null;
        state.all_service__isSuccess = false;
      });
  },
});

export const { reset_ClanSlice } = ServiceSlice.actions;

export default ServiceSlice.reducer;

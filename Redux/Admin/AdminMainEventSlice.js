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
  Adminuserevent_data: null,
  Adminuserevent_isError: false,
  Adminuserevent_isSuccess: false,
  Adminuserevent_isLoading: false,
  Adminuserevent_message: null,

  AdminsingleEvent_Data: null,
  AdminsingleEvent_isError: false,
  AdminsingleEvent_isSuccess: false,
  AdminsingleEvent_isLoading: false,
  AdminsingleEvent_message: null,
};

export const Admin_Get_AllEvent_Fun = createAsyncThunk(
  "AdminMainEventSlice/Admin_Get_AllEvent_Fun",
  async (_, thunkAPI) => {
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
        `${API_BASEURL}resident-event/admin`,
        config
      );

      return response.data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const Get_Single_UserEvent_Fun = createAsyncThunk(
  "MainEventSlice/Get_Single_UserEvent_Fun",
  async (id, thunkAPI) => {
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
        `${API_BASEURL}resident-event/${id}`,
        config
      );
      console.log({
        hh: response.data,
      });
      return response.data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const Get_GeneralEvent_Fun = createAsyncThunk(
  "MainEventSlice/Get_GeneralEvent_Fun",
  async (_, thunkAPI) => {
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
        `${API_BASEURL}resident-event/generalevent`,
        config
      );

      return response.data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const AdminMainEventSlice = createSlice({
  name: "AdminMainEventSlice",
  initialState,
  reducers: {
    reset_MainEventSlice: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(Admin_Get_AllEvent_Fun.pending, (state) => {
        state.Adminuserevent_isLoading = true;
      })
      .addCase(Admin_Get_AllEvent_Fun.fulfilled, (state, action) => {
        state.Adminuserevent_isLoading = false;
        state.Adminuserevent_isError = false;
        state.Adminuserevent_isSuccess = true;
        state.Adminuserevent_data = action.payload;
        state.Adminuserevent_message = null;
      })
      .addCase(Admin_Get_AllEvent_Fun.rejected, (state, action) => {
        state.Adminuserevent_isLoading = false;
        state.Adminuserevent_isError = true;
        state.Adminuserevent_message = action.payload;
        state.Adminuserevent_data = null;
        state.Adminuserevent_isSuccess = false;
      });
  },
});

export const { reset_MainEventSlice } = AdminMainEventSlice.actions;

export default AdminMainEventSlice.reducer;

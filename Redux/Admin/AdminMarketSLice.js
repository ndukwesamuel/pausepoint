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
  Admin_Market_data: null,
  Admin_Market_isError: false,
  Admin_Market_isSuccess: false,
  Admin_Market_isLoading: false,
  Admin_Market_message: null,
};

export const AdminMarket_data_Fun = createAsyncThunk(
  "AdminMarketSLice/AdminMarket_data_Fun",
  async (data, thunkAPI) => {
    try {
      let mydata = thunkAPI.getState().AuthSlice.user_data;
      let clan_id =
        thunkAPI.getState()?.ProfileSlice?.userProfile_data
          ?.AdmincurrentClanMeeting;
      console.log({
        fdfdf: clan_id,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${mydata?.token}`,
        },
      };

      const response = await axios.get(
        `${API_BASEURL}market/product/${clan_id}/all`,
        config
      );

      return response.data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const AdminMarketSLice = createSlice({
  name: "AdminMarketSLice",
  initialState,
  reducers: {
    MarketSLice: (state) => initialState,

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

      .addCase(AdminMarket_data_Fun.pending, (state) => {
        state.Admin_Market_isLoading = true;
        state.Admin_Market_isError = false;
        state.Admin_Market_isSuccess = false;
        state.Admin_Market_message = null;
        state.Admin_Market_data = null;
      })
      .addCase(AdminMarket_data_Fun.fulfilled, (state, action) => {
        state.Admin_Market_isLoading = false;
        state.Admin_Market_isError = false;
        state.Admin_Market_isSuccess = true;
        state.Admin_Market_message = null;
        state.Admin_Market_data = action.payload;
      })
      .addCase(AdminMarket_data_Fun.rejected, (state, action) => {
        state.Admin_Market_isLoading = false;
        state.Admin_Market_isError = true;
        state.Admin_Market_message = action.payload;
        state.Admin_Market_data = null;
        state.Admin_Market_isSuccess = false;
      });
  },
});

export const { reset_ClanSlice } = AdminMarketSLice.actions;

export default AdminMarketSLice.reducer;

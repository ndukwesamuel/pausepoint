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
  Market_data: null,
  Market_isError: false,
  Market_isSuccess: false,
  Market_isLoading: false,
  Market_message: null,

  marketcategory__data: null,
  marketcategory__isError: false,
  marketcategory__isSuccess: false,
  marketcategory__isLoading: false,
  marketcategory__message: null,
};

export const Market_data_Fun = createAsyncThunk(
  "MarketSLice/Market_data_Fun",
  async (data, thunkAPI) => {
    try {
      let mydata = thunkAPI.getState().AuthSlice.user_data;
      let clan_id =
        thunkAPI.getState()?.ProfileSlice?.userProfile_data?.currentClanMeeting
          ?._id;
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

export const Market_Category_Fun = createAsyncThunk(
  "MarketSLice/Market_Category_Fun",
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
        `${API_BASEURL}market/category/all`,
        config
      );
      console.log({
        response: response.data,
      });

      return response.data;
    } catch (error) {
      const errorMessage = handleApiError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const MarketSLice = createSlice({
  name: "MarketSLice",
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

      .addCase(Market_data_Fun.pending, (state) => {
        state.Market_isLoading = true;
      })
      .addCase(Market_data_Fun.fulfilled, (state, action) => {
        state.Market_isLoading = false;
        state.Market_isSuccess = true;
        state.Market_isError = false;
        state.Market_message = null;
        state.Market_data = action.payload;
      })
      .addCase(Market_data_Fun.rejected, (state, action) => {
        state.Market_isLoading = false;
        state.Market_isError = true;
        state.Market_message = action.payload;
        state.Market_data = null;
        state.Market_isSuccess = false;
      })
      .addCase(Market_Category_Fun.pending, (state) => {
        state.marketcategory__isLoading = true;
      })
      .addCase(Market_Category_Fun.fulfilled, (state, action) => {
        state.marketcategory__isLoading = false;
        state.marketcategory__isSuccess = true;
        state.marketcategory__isError = false;
        state.marketcategory__message = null;
        state.marketcategory__data = action.payload;
      })
      .addCase(Market_Category_Fun.rejected, (state, action) => {
        state.marketcategory__isLoading = false;
        state.marketcategory__isError = true;
        state.marketcategory__message = action.payload;
        state.marketcategory__data = null;
        state.marketcategory__isSuccess = false;
      });
  },
});

export const { reset_ClanSlice } = MarketSLice.actions;

export default MarketSLice.reducer;

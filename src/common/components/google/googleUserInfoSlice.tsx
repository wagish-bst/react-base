import { createSlice } from "@reduxjs/toolkit";
export interface GoogleUserInfoState {
  credential: string;
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}
const initialState: GoogleUserInfoState = {
  credential: "",
  email: "",
  name: "",
  given_name: "",
  family_name: "",
  picture: "",
};
export const GoogleUserInfoSlice = createSlice({
  name: "gooleUserInfo",
  initialState,
  reducers: {
    setGoogleUserInfo: (state, action) => {
      state.credential = action.payload.credential;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.given_name = action.payload.name;
      state.family_name = action.payload.family_name;
      state.picture = action.payload.picture;
    },
    removeGoogleUserInfo: (state) => {
      state.credential = "";
      state.email = "";
      state.name = "";
      state.given_name = "";
      state.family_name = "";
      state.picture = "";
    },
  },
});

export const { setGoogleUserInfo, removeGoogleUserInfo } =
  GoogleUserInfoSlice.actions;

export const getGoogleUserInfo = (state: any) => state.googleUserInfo;

export default GoogleUserInfoSlice.reducer;

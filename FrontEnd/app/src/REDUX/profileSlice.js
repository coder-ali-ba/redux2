import {createSlice} from "@reduxjs/toolkit";
const initialState = {
  profiles: [],
};
const profileSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    addProfile: (state , actions)=>{
        state.profiles.push(actions.payload)
    }
  },
});

export const {addProfile} = profileSlice.actions

export const profileReducer = profileSlice.reducer

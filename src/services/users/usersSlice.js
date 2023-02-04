import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users:[]
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
        state.users = action.payload;
    },
  },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;

export const getUsersAPI = () => (dispatch) => {
 
  axios.get("http://localhost:3000/usuarios", {
    headers: {
        Authorization: "Bearer " + localStorage.getItem('token'),
    }
  }).then((response) => {
    dispatch(getUsers(response.data));
  });
};

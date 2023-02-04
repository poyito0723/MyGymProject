import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  usuario: null,
  password: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    doLogin: (state, action) => {
      state.usuario = action.payload.usuario;
      state.password = action.payload.password;
    },
    doLogout: (state, action) => {
      state.usuario = null;
      state.password = null;
    },
  },
});

export const { doLogin, doLogout } = authSlice.actions;

export default authSlice.reducer;

export const doLoginAxios = (userToLogin) => (dispatch) => {
  const body = userToLogin;
  axios.post("http://localhost:3000/getToken", body).then((response) => {
    const body = {};
    axios
      .post("http://localhost:3000/login", body, {
        headers: {
          Authorization: "Bearer " + response.data.token,
        },
      })
      .then((response) => {
        localStorage.setItem("token", response.data.tokenUser);
        dispatch(doLogin(response.data.data));
      });
  });
};

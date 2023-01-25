import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  pass: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    doLogin: (state, action) => {
      //aquí iría la llamada a la api y después se llenaria el initialState del auth con los datos desde la api
      state.email = action.payload.email;
      state.pass = action.payload.pass;
    },
    doLogout: (state, action) => {
      state.email = null;
      state.pass = null;
    },
  },
});

export const { doLogin, doLogout } = authSlice.actions;

export default authSlice.reducer;

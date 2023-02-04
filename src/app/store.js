import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../services/auth/authSlice";
import usersSlice from "../services/users/usersSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice,
        users: usersSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../services/auth/authSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice
    }
})
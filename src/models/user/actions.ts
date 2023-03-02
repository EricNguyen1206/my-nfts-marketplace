import { createAsyncThunk } from "@reduxjs/toolkit";

// INTERNAL
import { getUserData } from "services/userApi";
import { User } from "./typings";

export const loadUserData = createAsyncThunk(
    "user/loadUserData",
    async (address: string) => {
        const data: User = await getUserData(address);
        return data;
    }
);

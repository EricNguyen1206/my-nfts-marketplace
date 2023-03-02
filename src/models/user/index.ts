import { createSlice } from "@reduxjs/toolkit";

// INTERNAL
import { Model } from "models/typings";
import { User } from "./typings";
import { loadUserData } from "./actions";
import reducers, { initialState } from "./reducers";

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(loadUserData.pending, (state: Model<User>, action) => {
                state.pending = true;
            })
            .addCase(loadUserData.fulfilled, (state, action) => {
                state.pending = false;
                state.data = action.payload;
            })
            .addCase(loadUserData.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export { loadUserData };
export const { disconectUser } = userSlice.actions;
export default userSlice.reducer;

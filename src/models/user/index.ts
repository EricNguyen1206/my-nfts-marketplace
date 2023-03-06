import { createSlice } from "@reduxjs/toolkit";

// INTERNAL
import { Model } from "models/typings";
import { User } from "./typings";
import { createNewCollection, readUserData } from "./actions";
import reducers, { initialState } from "./reducers";

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(readUserData.pending, (state: Model<User>, action) => {
                state.pending = true;
            })
            .addCase(readUserData.fulfilled, (state, action) => {
                state.pending = false;
                state.data = action.payload;
            })
            .addCase(readUserData.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            })
            .addCase(
                createNewCollection.pending,
                (state: Model<User>, action) => {
                    state.pending = true;
                }
            )
            .addCase(
                createNewCollection.fulfilled,
                (state: Model<User>, action) => {
                    state.pending = false;
                }
            )
            .addCase(
                createNewCollection.rejected,
                (state: Model<User>, action) => {
                    state.pending = false;
                    state.error = true;
                }
            );
    },
});

export { createNewCollection, readUserData };
export const { disconectUser } = userSlice.actions;
export default userSlice.reducer;

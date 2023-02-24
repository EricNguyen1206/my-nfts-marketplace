import { createSlice } from "@reduxjs/toolkit";

// INTERNAL EXPORT
import reducers from "./reducers";
import { initialUserState } from "./typings";

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: reducers,
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;

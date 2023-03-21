import { createSlice } from "@reduxjs/toolkit";
import { loadCollectionListByCategory } from "./actions";

// INTERNAL
import reducers, { initialState } from "./reducers";

const collectionListSlice = createSlice({
    name: "collectionList",
    initialState,
    reducers: reducers,
    extraReducers: (builder) => {
        builder.addCase(
            loadCollectionListByCategory.fulfilled,
            (state, action) => {
                state[action.payload.category] = action.payload.data;
            }
        );
    },
});

export { loadCollectionListByCategory };
export default collectionListSlice.reducer;

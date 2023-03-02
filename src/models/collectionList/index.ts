import { createSlice } from "@reduxjs/toolkit";
import { loadNewCollectionList } from "./actions";

// INTERNAL
import reducers, { initialState } from "./reducers";

const collectionListSlice = createSlice({
    name: "collectionList",
    initialState,
    reducers: reducers,
    extraReducers: (builder) => {
        builder.addCase(loadNewCollectionList.fulfilled, (state, action) => {
            state.new = action.payload;
        });
    },
});

export { loadNewCollectionList };
export default collectionListSlice.reducer;

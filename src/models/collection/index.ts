import { createSlice } from "@reduxjs/toolkit";

// INTERNAL
import { loadCollectionData, loadNftListByContract } from "./actions";
import reducers, { initialState } from "./reducers";

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(loadCollectionData.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(loadCollectionData.fulfilled, (state, action) => {
                state.pending = false;
                state.data = action.payload;
            })
            .addCase(loadCollectionData.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            })
            .addCase(loadNftListByContract.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(loadNftListByContract.fulfilled, (state, action) => {
                state.pending = false;
                state.nftList = action.payload;
            })
            .addCase(loadNftListByContract.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export { loadCollectionData, loadNftListByContract };
export default collectionSlice.reducer;

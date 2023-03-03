import { createSlice } from "@reduxjs/toolkit";

// INTERNAL
import { loadNFTData } from "./actions";
import reducers, { initialState } from "./reducers";

const nftSlice = createSlice({
    name: "nft",
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(loadNFTData.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(loadNFTData.fulfilled, (state, action) => {
                state.pending = false;
                if (action.payload) {
                    state.data = action.payload;
                }
            })
            .addCase(loadNFTData.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export { loadNFTData };
export default nftSlice.reducer;

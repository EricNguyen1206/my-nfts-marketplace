import { createSlice } from "@reduxjs/toolkit";

// INTERNAL
import { readNFTData } from "./actions";
import reducers, { initialState } from "./reducers";

const nftSlice = createSlice({
    name: "nft",
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(readNFTData.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(readNFTData.fulfilled, (state, action) => {
                state.pending = false;
                if (action.payload) {
                    state.data = action.payload;
                }
            })
            .addCase(readNFTData.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            });
    },
});

export { readNFTData };
export default nftSlice.reducer;

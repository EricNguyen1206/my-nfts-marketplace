import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// INTERNAL
import {
    createNewNftOfCollection,
    readCollectionData,
    readNftListDataByCollection,
    readActiveNftListDataByMarketplace,
} from "./actions";
import reducers, { initialState } from "./reducers";

const collectionSlice = createSlice({
    name: "collection",
    initialState,
    reducers,
    extraReducers: (builder) => {
        builder
            .addCase(readCollectionData.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(readCollectionData.fulfilled, (state, action) => {
                state.pending = false;
                state.data = { ...state.data, ...action.payload };
            })
            .addCase(readCollectionData.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            })
            .addCase(
                readActiveNftListDataByMarketplace.pending,
                (state, action) => {
                    state.pending = true;
                }
            )
            .addCase(
                readActiveNftListDataByMarketplace.fulfilled,
                (state, action) => {
                    state.pending = false;
                    state.nftList = action.payload;
                }
            )
            .addCase(
                readActiveNftListDataByMarketplace.rejected,
                (state, action) => {
                    state.pending = false;
                    state.error = true;
                }
            )
            .addCase(readNftListDataByCollection.pending, (state, action) => {
                state.pending = true;
            })
            .addCase(readNftListDataByCollection.fulfilled, (state, action) => {
                console.log("action.payload", action.payload);
                state.pending = false;
                state.nftList = action.payload;
            })
            .addCase(readNftListDataByCollection.rejected, (state, action) => {
                state.pending = false;
                state.error = true;
            })
            .addCase(createNewNftOfCollection.pending, (state, action) => {
                toast.loading("Transaction processing...", { duration: 1500 });
                state.pending = true;
            })
            .addCase(createNewNftOfCollection.fulfilled, (state, action) => {
                console.log("action.payload", action.payload);
                toast.success("Transaction success!", { duration: 1500 });
                state.pending = false;
            })
            .addCase(createNewNftOfCollection.rejected, (state, action) => {
                toast.error("Error occurred while minting your NFT 😥", {
                    duration: 1500,
                });
                state.pending = false;
                state.error = true;
            });
    },
});

export {
    readCollectionData,
    readActiveNftListDataByMarketplace,
    createNewNftOfCollection,
};
export default collectionSlice.reducer;

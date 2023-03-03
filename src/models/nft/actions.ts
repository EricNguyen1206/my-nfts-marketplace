import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNftByTokenId } from "services/nftsApi";
import { NftListing } from "./typings";

// INTERNAL

export const loadNFTData = createAsyncThunk(
    "nft/loadNFTData",
    async ({ contract, tokenId }: { contract: any; tokenId: string }) => {
        const nft: NftListing = await getNftByTokenId(contract, tokenId);
        return nft;
    }
);

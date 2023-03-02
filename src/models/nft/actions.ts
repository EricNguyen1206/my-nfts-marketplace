import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNftByTokenId } from "services/nftsApi";
import { Nft } from "./typings";

// INTERNAL

export const loadNFTData = createAsyncThunk(
    "nft/loadNFTData",
    async ({ contract, tokenId }: { contract: any; tokenId: string }) => {
        const nft: Nft = await getNftByTokenId(contract, tokenId);
        return nft;
    }
);

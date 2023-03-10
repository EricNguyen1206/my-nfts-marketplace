import { createAsyncThunk } from "@reduxjs/toolkit";

// INTERNAL
import { getNftByTokenId } from "services/nftsApi";
import type { NftListing } from "./typings";

const readNFTData = createAsyncThunk(
    "nft/readNFTData",
    async ({ contract, tokenId }: { contract: any; tokenId: string }) => {
        const nft: NftListing = await getNftByTokenId(contract, tokenId);
        return nft;
    }
);

export { readNFTData };

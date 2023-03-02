import { createAsyncThunk } from "@reduxjs/toolkit";

// INTERNAL
import { Collection } from "./typings";
import { getCollection, getNftListByContract } from "services/collectionApi";

export const loadCollectionData = createAsyncThunk(
    "collection/loadCollectionData",
    async (contract: any) => {
        const data: Collection = await getCollection(contract);
        return data;
    }
);

export const loadNftListByContract = createAsyncThunk(
    "collection/loadNftListByContract",
    async ({ contract, address }: { contract: any; address: string }) => {
        const nftList = await getNftListByContract(contract, address);
        return nftList;
    }
);

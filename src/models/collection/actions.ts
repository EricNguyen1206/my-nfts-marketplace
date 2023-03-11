import { createAsyncThunk } from "@reduxjs/toolkit";

// INTERNAL
import {
    getCollectionMetadata,
    getNftActiveListByContract,
    getNftListOfCollection,
} from "services/collectionApi";
import { postNewNft, putDirectListing } from "services/nftsApi";
import type { Collection } from "./typings";
import type { MintableNftMetadata } from "models/nft/typings";
import { Marketplace, NFTCollection } from "@thirdweb-dev/sdk";

/**
 * @param {NFTCollection} contract
 */
const readCollectionData = createAsyncThunk(
    "collection/readCollectionData",
    async (contract: NFTCollection) => {
        const data: Collection = await getCollectionMetadata(contract);
        return data;
    }
);

const readActiveNftListDataByMarketplace = createAsyncThunk(
    "collection/readActiveNftListDataByMarketplace",
    async ({
        contract,
        address,
    }: {
        contract: Marketplace;
        address: string;
    }) => {
        const nftList = await getNftActiveListByContract(contract, address);
        return nftList;
    }
);

const readNftListDataByCollection = createAsyncThunk(
    "collection/readNftListDataByCollection",
    async ({ collection }: { collection: NFTCollection }) => {
        const nftList = await getNftListOfCollection(collection);
        return nftList;
    }
);

/**
 * @createNewNftOfCollection mint nft of collection
 * @return {void}
 */
const createNewNftOfCollection = createAsyncThunk(
    "collection/createNewNftOfCollection",
    async ({
        contract,
        walletAddress,
        data,
    }: {
        contract: any;
        walletAddress: string;
        data: MintableNftMetadata;
    }) => {
        try {
            const result = await postNewNft(contract, walletAddress, data);
            return result;
        } catch (e: any) {
            throw new Error("Mint NFT action failed 😥", e);
        }
    }
);

const updateNftInCollectionToListing = createAsyncThunk(
    "collection/updateNftInCollectionToListing",
    async ({
        contract,
        assetContractAddress,
        walletAddress,
        price,
    }: {
        contract: Marketplace;
        assetContractAddress: string;
        walletAddress: string;
        price: number;
    }) => {
        try {
            const result = await putDirectListing(
                contract,
                assetContractAddress,
                walletAddress,
                price
            );
            console.log("List NFT result", result);
        } catch (e: any) {
            throw new Error("List NFT failed 😥", e);
        }
    }
);

export {
    readCollectionData,
    readActiveNftListDataByMarketplace,
    readNftListDataByCollection,
    createNewNftOfCollection,
    updateNftInCollectionToListing,
};

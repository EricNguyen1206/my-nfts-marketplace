/* eslint-disable camelcase */
import { Marketplace, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { child, ref, query, get } from "firebase/database";
// import { equalTo } from "@firebase/database"; // function to query data from firebase

// INTERNAL
import { firebaseDatabase } from "./firebase";
import { Collection } from "models/collection/typings";
import { NftListing } from "models/nft/typings";

/**
 * @getNewCollections return list of collection
 * @return {Promise<Collection[]>}
 */
const getNewCollections = async (): Promise<Collection[]> => {
    try {
        const dbRef = ref(firebaseDatabase);
        const snapshot = await get(child(dbRef, `collections`));
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
};

/**
 * @getCollection return Contract metadata
 * @param {any} contract the contract of collection from address and sdk
 * @return {Promise<Collection>}
 */
export const getCollection = async (contract: any): Promise<Collection> => {
    try {
        if (contract) {
            const data = contract.metadata.get();
            return data;
        } else {
            throw new Error("Invalid contract!");
        }
    } catch (e) {
        throw new Error("Invalid contract!");
    }
};

/**
 * @getNftListByContract return list of  NFT that contract was listing for sale from collection address
 * @param {Marketplace | undefined} contract the marketplace contract from sdk
 * @param {string} address contract address of collection
 * @return {Promise<NftListing[]>}
 */
const getNftListByContract = async (
    contract: Marketplace | undefined,
    address: string
): Promise<NftListing[]> => {
    try {
        const data: any = await contract?.getActiveListings({
            tokenContract: address,
        });
        console.log("data", data);
        if (data) {
            return data;
        } else {
            return [];
        }
    } catch (e) {
        console.error(e);
        throw new Error("Invalid contract collection!");
    }
};

/**
 * @getCollectionNftList return the list all nft of that function was minted
 * @param {any} contract the contract of collection from address and sdk
 * @return {Promise<NftListing[]>}
 */
const getCollectionNftList = async (contract: any): Promise<NftListing[]> => {
    try {
        if (contract) {
            const data = contract.getAll();
            return data;
        } else {
            return [];
        }
    } catch (e) {
        return [];
    }
};

/**
 * @getCollectionListByAddress get collection list by user address,
 * get data from firebase
 * @param {string} address user address
 * @return {Promise<Collection[]>}
 */
const getCollectionListByAddress = async (
    address: string
): Promise<Collection[]> => {
    try {
        const dbRef = ref(firebaseDatabase, `collections`);
        const snapshot = await get(query(dbRef));
        if (snapshot && snapshot.val()) {
            return snapshot
                .val()
                .filter((item: Collection) => item.creator === address);
        } else {
            throw new Error("Fetching resource error!");
        }
    } catch (e) {
        throw new Error("Fetching resource error!");
    }
};

/**
 * @getCollectionListByCategory get collection list from firebase by category
 * @param {string} category
 * @return {Promise<Collection[]>}
 */
const getCollectionListByCategory = async (
    category: string
): Promise<Collection[]> => {
    try {
        const dbRef = ref(firebaseDatabase, `collections`);
        const snapshot = await get(query(dbRef));
        console.log("category", category);
        if (snapshot && snapshot.val()) {
            return snapshot
                .val()
                .filter((item: Collection) => item.category === category);
        } else {
            throw new Error("Fetching resource error!");
        }
    } catch (e) {
        throw new Error("Fetching resource error!");
    }
};

/**
 * @createNewCollection deploy contract to ETH Goerly chain
 * @param {any} sdk
 * @param {string} name
 * @param {string} description
 * @param {any} image
 * @param {number} fee_recipient
 * @param {string} primary_sale_recipient
 * @return {Promise<any>}
 */
const postNewCollection = async (
    sdk: ThirdwebSDK,
    name: string,
    description: string,
    image: any,
    fee_recipient: string,
    primary_sale_recipient: string
): Promise<any> => {
    try {
        const result = sdk?.deployer.deployNFTCollection({
            name,
            description,
            image,
            fee_recipient,
            primary_sale_recipient,
        });
        return result;
    } catch (e: any) {
        console.error("error", e);
        throw new Error("Deploy contract failed!", e);
    }
};

export {
    getNewCollections,
    getNftListByContract,
    getCollectionNftList,
    getCollectionListByAddress,
    getCollectionListByCategory,
    postNewCollection,
};

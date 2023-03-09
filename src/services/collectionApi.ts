/* eslint-disable camelcase */
import { Marketplace, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { child, ref, query, get, set, push } from "firebase/database";
// import { equalTo } from "@firebase/database"; // function to query data from firebase

// INTERNAL
import { firebaseDatabase } from "utils/firebase";
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
            const data = snapshot.val();
            return Object.values(data);
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
        if (data) {
            return data;
        } else {
            return [];
        }
    } catch (e) {
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
            return Object.values<Collection>(snapshot.val()).filter(
                (item: Collection) => item.creator === address
            );
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
        if (snapshot && snapshot.val()) {
            return Object.values<Collection>(snapshot.val()).filter(
                (item: Collection) => item.category === category
            );
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
 * @param {any} image
 * @param {string} category
 * @param {string} description
 * @param {number} fee_recipient
 * @param {string} primary_sale_recipient
 * @param {number} seller_fee_basis_points
 * @return {Promise<Collection>}
 */
const postNewCollection = async (
    sdk: ThirdwebSDK,
    name: string,
    image: any,
    category: string,
    description: string,
    fee_recipient: string,
    primary_sale_recipient: string,
    seller_fee_basis_points: number
): Promise<any> => {
    try {
        const result = await sdk?.deployer.deployNFTCollection({
            name,
            image,
            description,
            fee_recipient,
            primary_sale_recipient,
            seller_fee_basis_points,
        });
        const collectionData = await sdk.getContract(result, "nft-collection");
        if (collectionData) {
            const firebaseCollectionData: Collection = {
                category: category,
                contractAddress: result,
                creator: fee_recipient,
                floor: 0,
                image: (await collectionData.metadata.get()).image,
                name: name,
            };
            const collectionListRef = ref(firebaseDatabase, "collections");
            const newCollectionRef = await push(collectionListRef);
            await set(newCollectionRef, firebaseCollectionData);
            return firebaseCollectionData;
        } else {
            throw new Error("Deploy contract failed!");
        }
    } catch (e: any) {
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

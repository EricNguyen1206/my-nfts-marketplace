import { Marketplace } from "@thirdweb-dev/sdk";
import { child, ref, query, get } from "firebase/database";
// import { equalTo } from "@firebase/database";

// INTERNAL
import { firebaseDatabase } from "./firebase";
import { Collection } from "models/collection/typings";

/**
 *
 * @return {Array} return list of collection
 */
export const getNewCollections = async () => {
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
 *
 * @param {any} contract the contract of collection from address and sdk
 * @return {Collection} return Contract metadata
 */
export const getCollection = async (contract: any) => {
    try {
        if (contract) {
            const data = contract.metadata.get();
            return data;
        } else {
            return {};
        }
    } catch (e) {
        return {};
    }
};

/**
 * getNftListByContract
 * @param {any} contract the marketplace contract from sdk
 * @param {string} address contract address of collection
 * @return {Array} return list of  NFT that contract was listing for sale
 */
export const getNftListByContract = async (
    contract: Marketplace | undefined,
    address: string
) => {
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
 *
 * @param {any} contract the contract of collection from address and sdk
 * @return {Array} return the list all nft of that function was minted
 */
export const getCollectionNftList = async (contract: any) => {
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

export const getCollectionListByAddress = async (
    address: string
): Promise<Collection[]> => {
    try {
        const dbRef = ref(firebaseDatabase, `collections`);
        const snapshot = await get(query(dbRef));
        if (snapshot && snapshot.val()) {
            console.log("snapshot.val()", address);
            return snapshot
                .val()
                .filter((item: Collection) => item.creator === address);
        } else {
            return [];
        }
    } catch (e) {
        throw new Error("Fetching resource error!");
    }
};

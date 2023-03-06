// INTERNAL
import { NftListing } from "models/nft/typings";

/**
 * @getNftByTokenId get nft by tokenId from marketplace
 * @param {any} contract
 * @param {string} id
 * @return {Promise<NftListing>}
 */
const getNftByTokenId = async (
    contract: any,
    id: string
): Promise<NftListing> => {
    try {
        if (contract) {
            const data: NftListing = await contract.getListing(id);
            return data;
        }
        throw new Error("Contract invalid!");
    } catch (e: any) {
        throw new Error("Get resource failed!", e);
    }
};

/**
 * @getListNftByAddress get list nft by collection contract address
 * @param {any} contract
 * @param {string} address
 * @return {Promise<NftListing[]>}
 */
const getListNftByAddress = async (
    contract: any,
    address: string
): Promise<NftListing[]> => {
    try {
        if (contract) {
            const data: NftListing[] = await contract.getAllListings({
                seller: address,
            });
            return data;
        }
        throw new Error("Contract invalid!");
    } catch (e: any) {
        throw new Error("Get resource failed", e);
    }
};

// export const buyNft = async (contract: any, id: string) => {
//     try {
//         const result: any = await contract?.buyoutListing(id, 1);
//         return result;
//     } catch (e: any) {
//         throw new Error("Contract invalid!", e);
//     }
// };

export { getNftByTokenId, getListNftByAddress };

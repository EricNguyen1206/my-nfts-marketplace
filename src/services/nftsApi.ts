// INTERNAL
import { NftListing, NftMetadata } from "models/nft/typings";

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

const postNewNft = async (
    contract: any,
    walletAddress: string,
    data: NftMetadata
) => {
    try {
        const result = await contract.mintTo(walletAddress, data);
        return result;
    } catch (e: any) {
        throw new Error("Mint Nft Failed!", e);
    }
};

export { getNftByTokenId, getListNftByAddress, postNewNft };

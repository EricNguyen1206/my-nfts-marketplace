import { NFT, NFTCollection, TransactionResultWithId } from "@thirdweb-dev/sdk";

// INTERNAL
import type { MintableNftMetadata, NftListing } from "models/nft/typings";

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

/**
 * @postNewNft mint NFT to collection contract
 * @param {NFTCollection} contract
 * @param {string} walletAddress
 * @param {MintableNftMetadata} data
 * @return {Promise<TransactionResultWithId<NFT>>}
 */
const postNewNft = async (
    contract: NFTCollection,
    walletAddress: string,
    data: MintableNftMetadata
): Promise<TransactionResultWithId<NFT>> => {
    try {
        console.log("walletAddress", walletAddress);
        const result = await contract.mintTo(walletAddress, {
            name: data.name,
            description: data.description,
            image: data.image,
        });
        return result;
    } catch (e: any) {
        console.error("error occurred!", e);

        throw new Error("Mint Nft Failed!", e);
    }
};

export { getNftByTokenId, getListNftByAddress, postNewNft };

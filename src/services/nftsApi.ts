import {
    Marketplace,
    NewDirectListing,
    NFT,
    NFTCollection,
    TransactionResultWithId,
} from "@thirdweb-dev/sdk";

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
        const result = await contract.mintTo(walletAddress, {
            name: data.name,
            description: data.description,
            image: data.image,
        });
        return result;
    } catch (e: any) {
        throw new Error("Mint Nft Failed!", e);
    }
};

const putDirectListing = async (
    contract: Marketplace,
    assetContractAddress: string,
    walletAddress: string,
    price: number
) => {
    try {
        // Data of the listing you want to create
        const listing: NewDirectListing = {
            // address of the NFT contract the asset you want to list is on
            assetContractAddress,
            // token ID of the asset you want to list
            tokenId: (await contract.getTotalCount()) + "",
            // when should the listing open up for offers
            startTimestamp: new Date(),
            // how long the listing will be open for
            listingDurationInSeconds: 0,
            // how many of the asset you want to list
            quantity: 1,
            // address of the currency contract that will be used to pay for the listing
            currencyContractAddress: walletAddress,
            // how much the asset will be sold for
            buyoutPricePerToken: price + "",
        };
        console.log("listing", listing);
        console.log("contract", contract.metadata);
        const tx = await contract.direct.createListing(listing);
        return tx;
    } catch (e: any) {
        console.log("e", e);
        throw new Error("Listing Request Error", e);
    }
};

export { getNftByTokenId, getListNftByAddress, postNewNft, putDirectListing };

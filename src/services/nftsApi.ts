import { NftListing } from "models/nft/typings";

export const getNftByTokenId = async (contract: any, id: string) => {
    try {
        if (contract) {
            const data: NftListing = await contract.getListing(id);
            console.log("data", data);
            return data;
        }
        throw new Error("Contract invalid!");
    } catch (e) {
        console.error(e);
        throw new Error("Contract invalid!");
    }
};

export const buyNft = async (contract: any, id: string) => {
    try {
        const result: any = await contract?.buyoutListing(id, 1);
        return result;
    } catch (e) {
        console.log("e", e);
    }
};

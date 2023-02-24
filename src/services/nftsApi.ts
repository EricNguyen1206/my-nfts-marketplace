import { Nft } from "models/nft/typings";
import axiosCLient from "./axiosClient";

export const getNfts = async (address: string) => {
    const url = `/nftCollection/${address}/nft`;
    try {
        const nfts: Nft[] = await axiosCLient.get(url);
        return nfts;
    } catch (e) {
        console.log("e", e);
        return [];
    }
};

export const buyNft = async (contract: any, id: string) => {
    try {
        const result = await contract?.buyoutListing(id, 1);
        console.log("result", result);
    } catch (e) {
        console.log("e", e);
    }
};

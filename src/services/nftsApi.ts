export const getNftByTokenId = async (contract: any, id: string) => {
    try {
        const data = await contract.getActiveListing(contract, {
            tokenId: id,
        });
        return data;
    } catch (e) {
        console.error(e);
        return {};
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

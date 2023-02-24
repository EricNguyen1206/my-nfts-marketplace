export interface Collection {
    contractAddress: string;
    name: string;
    image?: string | undefined;
    description?: string | undefined;
    seller_fee_basis_points?: number;
    fee_recipient?: string;
    symbol?: string;
    floor?: number;
    external_link?: string | undefined;
}

export interface CollectionModel {
    nftList: Nft[];
    data: Collection | null;
    isLoading: boolean;
    error: boolean;
}

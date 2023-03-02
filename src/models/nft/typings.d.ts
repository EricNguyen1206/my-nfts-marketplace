export interface NftMetadata {
    name: string;
    description: string;
    image: string;
    id: string;
    uri: string;
    attributes: Array<NftAttributes>;
    external_url: string;
    background_color: string;
}

export interface Nft {
    owner: string;
    metadata: NftMetadata;
    type: string;
    supply: number;
    isListing: boolean;
}

export interface NftAttributes {
    trait_type: string;
    value: string;
}

export interface BuyOutData {
    name: String;
    symbol: string;
    decimals: number;
    displayValue: string;
}

export interface NftListing {
    asset: NftMetadata;
    assetContractAddress: string;
    buyoutCurrencyValuePerToken: BuyOutData;
    currencyContractAddress: string;
    id: string;
}

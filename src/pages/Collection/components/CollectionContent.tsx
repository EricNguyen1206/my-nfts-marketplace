import React from "react";
import { Skeleton, Grid } from "@mui/material";

// INTERNAL
import "../styles/CollectionContent.scss";
import NFTActiveCard from "components/NFTActiveCard";
import { CollectionModel } from "models/collection/typings";
import type { NftListing } from "models/nft/typings";
import { useHandleBuy } from "hooks/useHandleBuy";
import { useAppDispatch } from "hooks/useStoreHooks";
import { readActiveNftListDataByMarketplace } from "models/collection";
import useMarketplace from "hooks/useMarketplace";

type Props = {
    param: any;
    collection: CollectionModel;
};

const CollectionContent = ({ param, collection }: Props) => {
    const dispatch = useAppDispatch();
    const handleBuy = useHandleBuy();
    const marketplace = useMarketplace();

    const handleBuyNftInCollection = (tokenId: string) => {
        handleBuy(tokenId, () =>
            dispatch(
                readActiveNftListDataByMarketplace({
                    contract: marketplace,
                    address: param.address + "",
                })
            )
        );
    };

    return (
        <div className="collection__content">
            {collection.pending ? (
                <Skeleton />
            ) : (
                <Grid container spacing={3} className="">
                    {collection.nftList.map((nft: NftListing) => (
                        <Grid item lg={3} md={4} xs={6} key={nft.id}>
                            <NFTActiveCard
                                nft={nft}
                                handleBuyNftInCollection={
                                    handleBuyNftInCollection
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default CollectionContent;

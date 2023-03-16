import React from "react";
import { Skeleton, Grid } from "@mui/material";

// INTERNAL
import "../styles/CollectionContent.scss";
import NFTActiveCard from "components/NFTActiveCard";
import { CollectionModel } from "models/collection/typings";
import type { Nft, NftListing } from "models/nft/typings";
import { useHandleBuy } from "hooks/useHandleBuy";
import { useAppDispatch } from "hooks/useStoreHooks";
import { readActiveNftListDataByMarketplace } from "models/collection";
import useMarketplace from "hooks/useMarketplace";
import { Model } from "models/typings";
import { User } from "models/user/typings";
import NFTCard from "components/NFTCard";
import ListableNFTCard from "components/ListableNFTCard";

type Props = {
    param: any;
    user: Model<User>;
    collection: CollectionModel;
};

const CollectionContent = ({ param, user, collection }: Props) => {
    const dispatch = useAppDispatch();
    const handleBuy = useHandleBuy();
    const marketplace = useMarketplace();

    const handleBuyNftInCollection = (tokenId: string) => {
        handleBuy(tokenId, () => {
            if (marketplace) {
                dispatch(
                    readActiveNftListDataByMarketplace({
                        contract: marketplace,
                        address: param.address + "",
                    })
                );
            }
        });
    };

    const checkOwner = () => {
        return (
            user.data &&
            collection.data &&
            user.data.address === collection.data.fee_recipient
        );
    };

    return (
        <div className="collection__content">
            {collection.pending ? (
                <Skeleton />
            ) : (
                <Grid container spacing={3} className="">
                    {checkOwner()
                        ? collection.nftList?.map((nft: Nft, index) => (
                              <Grid
                                  item
                                  lg={3}
                                  md={4}
                                  xs={6}
                                  key={nft.metadata?.id || index}
                              >
                                  {nft.owner === user.data?.address ? (
                                      <ListableNFTCard
                                          nft={nft}
                                          collection={collection}
                                      />
                                  ) : (
                                      <NFTCard nft={nft.metadata} />
                                  )}
                              </Grid>
                          ))
                        : collection.nftList?.map((nft: NftListing) => (
                              <Grid
                                  item
                                  lg={3}
                                  md={4}
                                  xs={6}
                                  key={nft.id}
                                  sx={{ margin: "auto" }}
                              >
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

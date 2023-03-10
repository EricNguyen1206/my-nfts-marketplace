import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "@mui/material";

// INTERNAL
// import "./NFTActiveCard.scss";
import { NftListing } from "models/nft/typings";
import NFTCard from "components/NFTCard";

export type NFTCartProps = {
    nft: NftListing;
    handleBuyNftInCollection: any;
};

const NFTActiveCard = ({ nft, handleBuyNftInCollection }: NFTCartProps) => {
    const navigate = useNavigate();
    return (
        <NFTCard
            nft={nft.asset}
            action={
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    sx={{
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    <Button
                        sx={{
                            width: "100%",
                            height: "100%",
                            minWidth: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            overflow: "hidden",
                            borderRadius: 0,
                        }}
                        onClick={() => navigate(`/nft/${nft.id}`)}
                    >
                        Detail
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            flex: "0 0 60px",
                            borderRadius: 0,
                            borderLeft: "1px solid #fff",
                            transition: "ease .5s",
                            "&:hover": {
                                flex: "1 0 100%",
                                borderLeft: "none",
                            },
                        }}
                        onClick={() => handleBuyNftInCollection(nft.id)}
                    >
                        Buy
                    </Button>
                </Stack>
            }
        />
    );
};

export default NFTActiveCard;

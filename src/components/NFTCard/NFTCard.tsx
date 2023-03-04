import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    useTheme,
} from "@mui/material";

// INTERNAL
import "./NFTCard.scss";
import { NftListing } from "models/nft/typings";

export type NFTCartProps = {
    nft: NftListing;
};

const NFTCard = ({ nft }: NFTCartProps) => {
    const theme = useTheme();
    return (
        <Card
            sx={{
                maxWidth: 278,
                backgroundColor: theme.palette.background.paper,
                borderRadius: "8px",
            }}
            className="nft-list__card"
        >
            <div
                style={{
                    overflow: "hidden",
                    width: "100%",
                }}
            >
                <CardMedia
                    sx={{
                        height: 278,
                        cursor: "pointer",
                        transition: "ease .5s",
                        "&:hover": {
                            scale: "1.1 !important",
                        },
                    }}
                    image={nft.asset.image}
                    title={nft.asset.name}
                    className="nft-list__card--img"
                />
            </div>
            <CardContent sx={{ paddingBottom: "8px" }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        fontSize: ".8rem",
                        fontWeight: 600,
                    }}
                >
                    {nft.asset.name}
                </Typography>
                <Typography
                    variant="body2"
                    component="span"
                    color="text.primary"
                    sx={{
                        fontSize: "1rem",
                        fontWeight: 600,
                    }}
                >
                    {nft.asset.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default NFTCard;

import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    useTheme,
} from "@mui/material";

// INTERNAL
import "./NFTCard.scss";
import { NftMetadata } from "models/nft/typings";
import { stringMinify } from "utils/stringMinify";

export type NFTCartProps = {
    nft: NftMetadata;
    action?: JSX.Element;
};

const NFTCard = ({ nft, action }: NFTCartProps) => {
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
            <CardMedia
                sx={{
                    height: 278,
                    cursor: "pointer",
                    transition: "ease .5s",
                    "&:hover": {
                        transform: "scale(1.1) translateY(-4%) !important",
                    },
                }}
                image={nft.image}
                title={nft.name}
                className="nft-list__card--img"
            />
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
                    {nft.name}
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
                    {stringMinify(nft.description, 40)}
                </Typography>
            </CardContent>
            {action && <CardActions sx={{ padding: 0 }}>{action}</CardActions>}
        </Card>
    );
};

export default NFTCard;

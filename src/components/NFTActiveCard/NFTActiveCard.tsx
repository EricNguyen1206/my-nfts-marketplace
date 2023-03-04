import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";

// INTERNAL
import "./NFTActiveCard.scss";
import { NftListing } from "models/nft/typings";

export type NFTCartProps = {
    nft: NftListing;
    handleBuyNftInCollection: any;
};

const NFTActiveCard = ({ nft, handleBuyNftInCollection }: NFTCartProps) => {
    const theme = useTheme();
    const navigate = useNavigate();
    // const [showModal, setShowModal] = useState<boolean>(false);

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
                    {nft.buyoutCurrencyValuePerToken.displayValue +
                        " " +
                        nft.buyoutCurrencyValuePerToken.symbol}
                </Typography>
            </CardContent>
            <CardActions
                className="nft-list__card--action"
                sx={{
                    padding: 0,
                }}
            >
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
            </CardActions>
        </Card>
    );
};

export default NFTActiveCard;

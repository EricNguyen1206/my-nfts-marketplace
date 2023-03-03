import React, { Fragment } from "react";
import {
    Box,
    Button,
    Container,
    Skeleton,
    Stack,
    Typography,
    Divider,
    Grid,
    useTheme,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

// INTERNAL
import useNFT from "./hooks/useNFT";
import "./NFT.scss";

type Props = {
    title: string;
    data: string;
};

const CardBox = (props: Props) => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                border: "1px solid",
                borderColor: theme.palette.primary.main,
                borderRadius: "8px",
                padding: "8px",
            }}
        >
            <Typography
                variant="h3"
                component="span"
                sx={{ color: theme.palette.text.secondary, fontSize: "14px" }}
            >
                {props.title}
            </Typography>
            <Typography
                variant="subtitle2"
                component="p"
                sx={{ color: theme.palette.text.primary, fontSize: "20px" }}
            >
                {props.data}
            </Typography>
        </Box>
    );
};

const NFT = () => {
    const { theme, nft, handleBuyNft } = useNFT();
    return (
        <Container className="nft">
            <Stack
                direction={{ sx: "column", md: "row" }}
                spacing={2}
                className="nft__wrapper"
            >
                <div className="nft__image">
                    {nft.pending ? (
                        <Skeleton
                            variant="rectangular"
                            width={"100%"}
                            height={"100%"}
                        />
                    ) : (
                        <img src={nft.data?.asset.image} alt="nft" />
                    )}
                </div>
                <div className="nft__detail">
                    <div className="nft__info">
                        {nft.pending ? (
                            <Skeleton variant="rectangular" width={"100%"} />
                        ) : (
                            <Fragment>
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    sx={{ color: theme.palette.text.primary }}
                                >
                                    {nft.data?.asset.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="h2"
                                    sx={{ color: theme.palette.text.secondary }}
                                >
                                    Owner by<span> </span>
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                        sx={{
                                            color: theme.palette.primary.main,
                                        }}
                                    >
                                        {nft.data?.sellerAddress}
                                    </Typography>
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    sx={{ color: theme.palette.text.primary }}
                                >
                                    {nft.data?.asset.description}
                                </Typography>
                            </Fragment>
                        )}
                    </div>
                    <Box
                        className="nft__action"
                        sx={{ backgroundColor: theme.palette.background.paper }}
                    >
                        {nft.pending ? (
                            <Skeleton
                                variant="rectangular"
                                width={"100%"}
                                height={"300px"}
                            />
                        ) : (
                            <Fragment>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: theme.palette.text.secondary }}
                                    className="nft__action--title"
                                >
                                    Current price
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: theme.palette.text.primary }}
                                    className="nft__action--price"
                                >
                                    {
                                        nft.data?.buyoutCurrencyValuePerToken
                                            .displayValue
                                    }
                                    <span> </span>
                                    {
                                        nft.data?.buyoutCurrencyValuePerToken
                                            .symbol
                                    }
                                </Typography>
                                <Button
                                    variant="contained"
                                    size="large"
                                    className="nft__action--btn"
                                    onClick={() => handleBuyNft()}
                                >
                                    <AccountBalanceWalletIcon />{" "}
                                    <Typography
                                        variant="body1"
                                        component="p"
                                        sx={{
                                            color: theme.palette.text.primary,
                                            marginLeft: 1,
                                        }}
                                    >
                                        Buy
                                    </Typography>
                                </Button>
                                <Divider />
                                <Grid
                                    container
                                    spacing={2}
                                    className="nft__properties"
                                >
                                    {nft.data?.asset.attributes.map((item) => (
                                        <Grid key={item.trait_type} item xs={4}>
                                            <CardBox
                                                title={item.trait_type}
                                                data={item.value + ""}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Fragment>
                        )}
                    </Box>
                </div>
            </Stack>
        </Container>
    );
};

export default NFT;

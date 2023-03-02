import React from "react";
import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Divider,
    Grid,
    useTheme,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

// INTERNAL
import img01 from "assets/images/img-01.jpg";
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
    const { theme } = useNFT();
    return (
        <Container className="nft">
            <Stack
                direction={{ sx: "column", md: "row" }}
                spacing={2}
                className="nft__wrapper"
            >
                <div className="nft__image">
                    <img src={img01} alt="nft" />
                </div>
                <div className="nft__detail">
                    <div className="nft__info">
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            Bore ape yark club #111
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            component="h2"
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            Owner by
                            <Typography
                                variant="subtitle1"
                                component="span"
                                sx={{ color: theme.palette.primary.main }}
                            >
                                ERIC Nguyen
                            </Typography>
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            sx={{ color: theme.palette.text.primary }}
                        >
                            Bore ape yark club #111. By Lorem
                        </Typography>
                    </div>
                    <Box
                        className="nft__action"
                        sx={{ backgroundColor: theme.palette.background.paper }}
                    >
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
                            0.333 ETH
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            className="nft__action--btn"
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
                        <Grid container spacing={2} className="nft__properties">
                            {[3, 5, 6].map((item) => (
                                <Grid key={item} item xs={4}>
                                    <CardBox
                                        title="Property"
                                        data={item + ""}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </div>
            </Stack>
        </Container>
    );
};

export default NFT;

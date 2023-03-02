import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import { Toaster } from "react-hot-toast";
import React from "react";

// INTERNAL
import "./Collection.scss";
import useCollection from "./hooks/useCollection";
import { NftListing } from "models/nft/typings";

const Collection = () => {
    const { collection, theme, handleBuy, handleDetailNavigate } =
        useCollection();

    return (
        <React.Fragment>
            <Toaster />
            <Container className="collection">
                <Grid container className="collection__overview">
                    <Grid item lg={2} md={3} className="collection__img">
                        <div>
                            {collection.pending || collection.error ? (
                                <Skeleton
                                    variant="rectangular"
                                    width={168}
                                    height={168}
                                />
                            ) : (
                                <img
                                    src={collection.data?.image}
                                    alt="collection image"
                                />
                            )}
                        </div>
                    </Grid>
                    <Grid item lg={10} md={9} className="collection__info">
                        {collection.pending || collection.error ? (
                            <React.Fragment>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    className="collection__info--name"
                                    sx={{
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    {collection.data?.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    className="collection__info--creator"
                                    sx={{
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    By {collection.data?.fee_recipient}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    className="collection__info--description"
                                    sx={{
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    {collection.data?.description}
                                </Typography>
                                <Grid container className="collection__index">
                                    <Grid
                                        item
                                        lg={3}
                                        className="collection__index--volume"
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                color: theme.palette.text
                                                    .primary,
                                            }}
                                        >
                                            124 GOR
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: theme.palette.text
                                                    .disabled,
                                            }}
                                        >
                                            Total volume
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        lg={3}
                                        className="collection__index--floor"
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                color: theme.palette.text
                                                    .primary,
                                            }}
                                        >
                                            124 GOR
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: theme.palette.text
                                                    .disabled,
                                            }}
                                        >
                                            Floor price
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        lg={3}
                                        className="collection__index--percent"
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                color: theme.palette.text
                                                    .primary,
                                            }}
                                        >
                                            {
                                                collection.data
                                                    ?.seller_fee_basis_points
                                            }
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: theme.palette.text
                                                    .disabled,
                                            }}
                                        >
                                            Creator earnings
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        lg={3}
                                        className="collection__index--category"
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                color: theme.palette.text
                                                    .primary,
                                            }}
                                        >
                                            Art
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: theme.palette.text
                                                    .disabled,
                                            }}
                                        >
                                            Category
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        )}
                    </Grid>
                </Grid>
                <Divider light />
                <div className="collection__content">
                    {collection.pending ? (
                        <Skeleton />
                    ) : (
                        <Grid container spacing={3} className="">
                            {collection.nftList.map((nft: NftListing) => (
                                <Grid item lg={3} md={4} sm={6} key={nft.id}>
                                    <Card
                                        sx={{
                                            maxWidth: 278,
                                            backgroundColor:
                                                theme.palette.background.paper,
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
                                        <CardContent
                                            sx={{ paddingBottom: "8px" }}
                                        >
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
                                                {nft.buyoutCurrencyValuePerToken
                                                    .displayValue +
                                                    " " +
                                                    nft
                                                        .buyoutCurrencyValuePerToken
                                                        .symbol}
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
                                                    onClick={() =>
                                                        handleDetailNavigate(
                                                            nft.id
                                                        )
                                                    }
                                                >
                                                    Detail
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    sx={{
                                                        flex: "0 0 60px",
                                                        borderRadius: 0,
                                                        borderLeft:
                                                            "1px solid #fff",
                                                        transition: "ease .5s",
                                                        "&:hover": {
                                                            flex: "1 0 100%",
                                                            borderLeft: "none",
                                                        },
                                                    }}
                                                    onClick={() =>
                                                        handleBuy(nft.id)
                                                    }
                                                >
                                                    Buy
                                                </Button>
                                            </Stack>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Collection;

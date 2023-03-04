import React from "react";
import { Container, Divider, Grid, Skeleton, Typography } from "@mui/material";

// INTERNAL
import "./Collection.scss";
import useCollection from "./hooks/useCollection";
import { NftListing } from "models/nft/typings";
import NFTActiveCard from "components/NFTActiveCard/NFTActiveCard";

const Collection = () => {
    const { collection, theme, handleBuyNftInCollection } = useCollection();

    return (
        <React.Fragment>
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
            </Container>
        </React.Fragment>
    );
};

export default Collection;

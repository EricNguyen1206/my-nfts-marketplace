import { Container, Divider } from "@mui/material";
import { Toaster } from "react-hot-toast";
import React from "react";

// INTERNAL
import "./Collection.scss";
// import NFTCardList from "components/NFTCardList";
import useCollection from "./hooks/useCollection";

const Collection = () => {
    const { collection, theme } = useCollection();
    console.log("collection", collection);
    console.log("theme", theme);

    return (
        <React.Fragment>
            <Toaster />
            <Container className="collection">
                {/* <Grid container className="collection__overview">
                    <Grid item lg={2} md={3} className="collection__img">
                        <div>
                            {nfts.isFetching || nfts.error ? (
                                <Skeleton
                                    variant="rectangular"
                                    width={168}
                                    height={168}
                                />
                            ) : (
                                <img
                                    src={nfts.data?.collection?.image}
                                    alt="collection image"
                                />
                            )}
                        </div>
                    </Grid>
                    <Grid item lg={10} md={9} className="collection__info">
                        {nfts.isFetching || nfts.error ? (
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
                                    {nfts.data?.collection?.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    component="span"
                                    className="collection__info--creator"
                                    sx={{
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    By {nfts.data?.collection?.fee_recipient}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    component="p"
                                    className="collection__info--description"
                                    sx={{
                                        color: theme.palette.text.primary,
                                    }}
                                >
                                    {nfts.data?.collection?.description}
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
                                                nfts.data?.collection
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
                </Grid> */}
                <Divider light />
                {/* <div className="collection__content">
                    {nfts.isFetching ? (
                        <Skeleton />
                    ) : (
                        <NFTCardList nfts={nfts.data?.list || []} />
                    )}
                </div> */}
            </Container>
        </React.Fragment>
    );
};

export default Collection;

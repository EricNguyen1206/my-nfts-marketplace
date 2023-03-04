import React from "react";
import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";

// INTERNAL
import "./Profile.scss";
import bg from "assets/images/bg.jpg";
import avt1 from "assets/images/ava-01.png";
import useProfile from "./hooks/useProfile";
import CollectionCard from "components/CollectionCard";
import NFTCard from "components/NFTCard/NFTCard";
import { NftListing } from "models/nft/typings";

const Profile = () => {
    const { theme, collectionList, nftList } = useProfile();
    console.log("nftList", nftList);
    return (
        <Container className="profile">
            <section className="profile-images">
                <div className="profile-images__background">
                    <img src={bg} alt="background" />
                </div>
                <Avatar
                    alt="Remy Sharp"
                    src={avt1}
                    className="profile-images__avatar"
                    sx={{
                        bgcolor: theme.palette.background.paper,
                        width: 150,
                        height: 150,
                    }}
                />
            </section>

            <section className="profile-info">
                <Typography
                    variant="h1"
                    component="h1"
                    className="profile-info__name"
                    sx={{ color: theme.palette.text.primary }}
                >
                    Sam Remy
                </Typography>
                <br />
                <Typography
                    variant="subtitle1"
                    component="span"
                    className="profile-info__address"
                    sx={{
                        color: theme.palette.text.secondary,
                        bgcolor: theme.palette.primary.main,
                    }}
                >
                    0x99asdfjhasfafajfasjkfa
                </Typography>
                <Grid container spacing={2} className="nft__properties">
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <span
                                className="profile-info__detail--index"
                                style={{ color: theme.palette.text.primary }}
                            >
                                0.59 GOR
                            </span>
                            <h2
                                className="profile-info__detail--script"
                                style={{ color: theme.palette.text.secondary }}
                            >
                                Balance
                            </h2>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <span
                                className="profile-info__detail--index"
                                style={{ color: theme.palette.text.primary }}
                            >
                                9
                            </span>
                            <h2
                                className="profile-info__detail--script"
                                style={{ color: theme.palette.text.secondary }}
                            >
                                Collections
                            </h2>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <span
                                className="profile-info__detail--index"
                                style={{ color: theme.palette.text.primary }}
                            >
                                9
                            </span>
                            <h2
                                className="profile-info__detail--script"
                                style={{ color: theme.palette.text.secondary }}
                            >
                                NFTs
                            </h2>
                        </Stack>
                    </Grid>
                </Grid>
            </section>

            <section className="profile-created">
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Typography
                            variant="h3"
                            component="h3"
                            sx={{ color: theme.palette.text.primary }}
                            className="profile-created__title"
                        >
                            Created
                        </Typography>
                    </Grid>
                    {collectionList?.map((item) => (
                        <Grid
                            item
                            lg={3}
                            md={4}
                            sm={6}
                            key={item.name}
                            className="profile-created__item"
                        >
                            <CollectionCard collection={item} />
                        </Grid>
                    ))}
                </Grid>
            </section>

            <section className="profile-collected">
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Typography
                            variant="h3"
                            component="h3"
                            sx={{ color: theme.palette.text.primary }}
                            className="profile-collected__title"
                        >
                            Collected
                        </Typography>
                    </Grid>
                    {nftList.map((nft: NftListing) => (
                        <Grid item lg={3} md={4} sm={6} key={nft.id}>
                            <NFTCard nft={nft} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </Container>
    );
};

export default Profile;

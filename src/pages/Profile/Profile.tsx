/* eslint-disable camelcase */
import React from "react";
import {
    Avatar,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// INTERNAL
import "./Profile.scss";
import bg from "assets/images/bg.jpg";
import CollectionCard from "components/CollectionCard";
import { NftListing } from "models/nft/typings";
import DeployCollectionForm from "components/DeployCollectionForm";
import useProfile from "./hooks/useProfile";
import NFTCard from "components/NFTCard";

const Profile = () => {
    const { user, theme, collectionList, nftList } = useProfile();
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    const toggleDrawer = (open: boolean) => {
        setOpenDrawer(open);
    };

    return (
        <Container className="profile">
            <DeployCollectionForm
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
            />
            <section className="profile-images">
                <div className="profile-images__background">
                    <img src={bg} alt="background" />
                </div>
                <Avatar
                    alt="Remy Sharp"
                    src={user.data?.avatar}
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
                    {user.data?.name}
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
                    {user.data?.address}
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
                                <>{user.data?.balance} GOR</>
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
                                {collectionList.length}
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
                                {nftList.length}
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
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography
                                variant="h3"
                                component="h3"
                                sx={{ color: theme.palette.text.primary }}
                                className="profile-created__title"
                            >
                                Created
                            </Typography>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => toggleDrawer(true)}
                            >
                                Deploy new
                            </Button>
                        </Stack>
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
                            <NFTCard nft={nft.asset} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </Container>
    );
};

export default Profile;

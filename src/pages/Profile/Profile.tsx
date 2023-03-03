import React from "react";
import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
// INTERNAL
import "./Profile.scss";
import bg from "assets/images/bg.jpg";
import avt1 from "assets/images/ava-01.png";

const Profile = () => {
    return (
        <Container className="profile">
            <section className="profile-images">
                <div className="profile-images__background">
                    <img src={bg} alt="background" />
                </div>
                <Avatar alt="Remy Sharp" src={avt1} />
            </section>

            <section className="profile-info">
                <Typography
                    variant="h1"
                    component="h1"
                    className="profile-info__name"
                >
                    Sam Remy
                </Typography>
                <br />
                <Typography
                    variant="subtitle1"
                    component="span"
                    className="profile-info__name"
                >
                    0x99asdfjhasfafajfasjkfa
                </Typography>
                <Grid container spacing={2} className="nft__properties">
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <Typography
                                variant="h2"
                                component="h2"
                                className="profile-info__name"
                            >
                                Balance
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                component="span"
                                className="profile-info__name"
                            >
                                0.59 GOR
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <Typography
                                variant="h2"
                                component="h2"
                                className="profile-info__name"
                            >
                                Collections
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                component="span"
                                className="profile-info__name"
                            >
                                9
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <Typography
                                variant="h2"
                                component="h2"
                                className="profile-info__name"
                            >
                                NFTs
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                component="span"
                                className="profile-info__name"
                            >
                                9
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </section>
        </Container>
    );
};

export default Profile;

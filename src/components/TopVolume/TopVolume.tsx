import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

// INTERNAL
import "./TopVolume.scss";
import { NFT__DATA } from "assets/data";

const TopVolume = () => {
    return (
        <section className="top-volume">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={12}>
                        <div className="top-volume__top">
                            <h3>Top volume NFTs</h3>
                            <span>
                                <Link to="/market">Explore more</Link>
                            </span>
                        </div>
                    </Grid>

                    {NFT__DATA.slice(0, 4).map((item) => (
                        <Grid
                            item
                            key={item.id}
                            lg={3}
                            md={4}
                            sm={6}
                            className="top-volume__item"
                        >
                            {/* <NFTCard item={item} /> */}
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default TopVolume;

import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.scss";
import { RocketOutlined } from "@mui/icons-material";
import heroImg from "assets/images/hero2.gif";
import { Button, Container, Grid } from "@mui/material";

const HeroSection = () => {
    return (
        <section className="hero__section">
            <Container>
                <Grid container spacing={1}>
                    <Grid item lg={6} md={6} xs={12}>
                        <div className="hero__content">
                            <h2>
                                Discover rare digital art and collect sell
                                <span>extraordinary NFTs</span>
                            </h2>
                            <p>
                                The world&apos;s first and largest digital
                                marketplace for crypto collectibles and
                                non-fungible tokens (NFTs). Buy, sell, and
                                discover exclusive digital items.
                            </p>

                            <div className="hero__btns">
                                <Button className="explore__btn">
                                    <RocketOutlined />
                                    <Link to="/collection/0x643Bd8AC4A0A5D3fbe71f7e57fbb1783F08479ee">
                                        Explore
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12}>
                        <div className="hero__img">
                            <img src={heroImg} height="300px" alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default HeroSection;

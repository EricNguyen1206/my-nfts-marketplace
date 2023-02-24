import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.scss";
import { RocketOutlined, CreateOutlined } from "@mui/icons-material";
import heroImg from "../../assets/images/hero.jpg";
import { Button, Container, Grid } from "@mui/material";

const HeroSection = () => {
    return (
        <section className="hero__section">
            <Container>
                <Grid container>
                    <Grid item lg={6} md={6}>
                        <div className="hero__content">
                            <h2>
                                Discover rare digital art and collect sell
                                <span>extraordinary NFTs</span>
                            </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Deleniti excepturi omnis neque
                                adipisci sequi ullam unde in minus quis quos.
                            </p>

                            <div className="hero__btns">
                                <Button className="explore__btn">
                                    <RocketOutlined />
                                    <Link to="/market">Explore</Link>
                                </Button>
                                <Button className="create__btn">
                                    <CreateOutlined />
                                    <Link to="/create">Create</Link>
                                </Button>
                            </div>
                        </div>
                    </Grid>

                    <Grid item lg={6} md={6}>
                        <div className="hero__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default HeroSection;

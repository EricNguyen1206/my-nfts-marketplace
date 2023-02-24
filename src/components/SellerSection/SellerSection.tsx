import React from "react";
import "./SellerSection.scss";
import { SELLER__DATA } from "../../assets/data";
import { Container, Grid } from "@mui/material";

const SellerSection = () => {
    return (
        <section className="seller-section">
            <Container maxWidth="lg">
                <Grid container>
                    <Grid
                        item
                        lg={12}
                        style={{ marginBottom: 5 }}
                        className="seller-section__title"
                    >
                        <h3>Top Seller</h3>
                    </Grid>

                    {SELLER__DATA.map((item) => (
                        <Grid
                            item
                            key={item.id}
                            lg={2}
                            md={3}
                            sm={4}
                            xs={6}
                            className="seller-section__card"
                        >
                            <div className="seller-section__card--img">
                                <img src={item.sellerImg} alt="" />
                            </div>

                            <div className="seller-section__card--content">
                                <h6>{item.sellerName}</h6>
                                <h6>{item.currentBid} ETH</h6>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default SellerSection;

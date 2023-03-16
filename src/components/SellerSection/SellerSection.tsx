import React from "react";
import { Container, Grid } from "@mui/material";

// INTERNAL
import "./SellerSection.scss";
import { SELLER__DATA } from "assets/data";

const SellerSection = () => {
    return (
        <section className="seller-section">
            <Container>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{ marginBottom: 5 }}
                        className="seller-section__title"
                    >
                        <h3>Top Seller</h3>
                    </Grid>

                    {SELLER__DATA.map((item) => (
                        <Grid
                            item
                            key={item.address}
                            sm={4}
                            xs={6}
                            className="seller-section__card"
                        >
                            <div className="seller-section__card--img">
                                <img src={item.avatar} alt="" />
                            </div>

                            <div className="seller-section__card--content">
                                <h6>{item.name}</h6>
                                <h6>{item.balance} GOR</h6>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default SellerSection;

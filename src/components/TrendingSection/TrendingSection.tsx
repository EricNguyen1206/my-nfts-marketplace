import React from "react";
import { Container, Grid } from "@mui/material";

// INTERNAL
import "./Trending.scss";
import CollectionCard from "../CollectionCard";
import useTrending from "./hooks/useTrending";

const TrendingSection = () => {
    const { collectionList } = useTrending();

    return (
        <section className="trending">
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <h3 className="trending__title">Trending</h3>
                    </Grid>

                    {collectionList?.new?.slice(0, 4).map((item) => (
                        <Grid
                            item
                            lg={3}
                            md={4}
                            sm={6}
                            key={item.name}
                            className="trending__item"
                        >
                            <CollectionCard collection={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default TrendingSection;

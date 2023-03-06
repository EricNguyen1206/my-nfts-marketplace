import React from "react";
import { Container, Grid } from "@mui/material";

// INTERNAL
import "./Category.scss";
import CollectionCard from "components/CollectionCard";
import useCategory from "./hooks/useCategory";
import CategorySection from "components/CategorySection";
import GuideSection from "components/GuideSection";

const Category = () => {
    const { category, collectionList } = useCategory();
    return (
        <React.Fragment>
            <Container className="category">
                <Grid container spacing={3}>
                    {category &&
                        { ...collectionList }[category]?.map((item) => (
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
            <CategorySection />
            <GuideSection />
        </React.Fragment>
    );
};

export default Category;

import React from "react";
import { Container, Grid } from "@mui/material";

// INTERNAL
import styles from "./CollectionListSection.module.scss";
import CollectionCard from "../CollectionCard";
import useCollectionListSection from "./useCollectionListSection";

type Props = {
    category: string;
};

const CollectionListSection = ({ category }: Props) => {
    const { collectionList } = useCollectionListSection(category);
    return (
        <section className={styles.collectionList}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <h3 className={styles.collectionList_title}>
                            {category}
                        </h3>
                    </Grid>

                    {collectionList[category]?.map((item) => (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={item.name}>
                            <CollectionCard collection={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default CollectionListSection;

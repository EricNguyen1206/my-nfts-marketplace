import React from "react";
import { Container } from "@mui/material";

// INTERNAL
import "./styles/Collection.scss";
import useCollection from "./hooks/useCollection";
import CollectionOverview from "./components/CollectionOverview";
import CollectionContent from "./components/CollectionContent";

const Collection = () => {
    const { user, param, collection } = useCollection();

    return (
        <React.Fragment>
            <Container className="collection">
                <CollectionOverview user={user} collection={collection} />
                <CollectionContent
                    param={param}
                    user={user}
                    collection={collection}
                />
            </Container>
        </React.Fragment>
    );
};

export default Collection;

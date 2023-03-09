import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

// INTERNAL
import "./CollectionCard.scss";
import { Collection } from "models/collection/typings";
import { stringMinify } from "utils/stringMinify";

type CollectionCardProps = {
    collection: Collection;
};
const CollectionCard = ({ collection }: CollectionCardProps) => {
    const theme = useTheme();

    return (
        <Link to={`/collection/${collection.contractAddress}`}>
            <Card
                sx={{
                    maxWidth: 345,
                    backgroundColor: theme.palette.background.paper,
                }}
                className="collection-card"
            >
                <CardMedia
                    sx={{ height: 236 }}
                    image={collection.image}
                    title={collection.name}
                    className="collection-card__img"
                />
                <CardContent className="collection-card--content">
                    <Typography gutterBottom variant="h5" component="div">
                        {stringMinify(collection.name, 28)}
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        sx={{ minHeight: 52 }}
                    >
                        <div>
                            {collection.floor ? (
                                <React.Fragment>
                                    <Typography variant="body1" component="h4">
                                        Floor
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        component="p"
                                    >
                                        {collection.floor} GOR
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            {/* <Typography variant="body1" component="h4">
                                Total Volume
                            </Typography>
                            <Typography variant="subtitle1" component="p">
                                12 GOR
                            </Typography> */}
                        </div>
                    </Stack>
                </CardContent>
            </Card>
        </Link>
    );
};

export default CollectionCard;

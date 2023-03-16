// import { Link } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import {
    Card,
    CardActionArea,
    CardContent,
    Container,
    Grid,
    CardMedia,
    Typography,
    useTheme,
} from "@mui/material";

// INTERNAL
import "./CategorySection.scss";
import { CATEGORIES } from "constants/categories";

const CategorySection = () => {
    const theme = useTheme();
    return (
        <section className="top-volume">
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className="top-volume__top">
                            <h3>Category</h3>
                            <span>
                                {/* <Link to="/market">Explore more</Link> */}
                            </span>
                        </div>
                    </Grid>

                    {CATEGORIES.slice(0, 4).map((item) => (
                        <Grid
                            item
                            key={item.link}
                            lg={3}
                            md={4}
                            sm={6}
                            className="top-volume__item"
                        >
                            <Link to={`/category/${item.link}`}>
                                <Card
                                    sx={{
                                        maxWidth: 345,
                                        backgroundColor:
                                            theme.palette.background.paper,
                                        borderRadius: "12px",
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="236"
                                            image={item.image}
                                            alt={item.label}
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h5"
                                                color={
                                                    theme.palette.text.primary
                                                }
                                            >
                                                {item.label}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default CategorySection;

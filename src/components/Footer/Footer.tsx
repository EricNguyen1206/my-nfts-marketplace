import React from "react";
import {
    Facebook,
    Instagram,
    Phone,
    Pinterest,
    Twitter,
    SavingsOutlined,
} from "@mui/icons-material";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { Container, Grid, List, ListItem, Typography } from "@mui/material";

const MY__ACCOUNT = [
    {
        display: "Author Profile",
        url: "/seller-profile",
    },
    {
        display: "Create Item",
        url: "/create",
    },
    {
        display: "Collection",
        url: "/market",
    },
    {
        display: "Edit Profile",
        url: "/edit-profile",
    },
];

const RESOURCES = [
    {
        display: "Help Center",
        url: "#",
    },
    {
        display: "Partner",
        url: "#",
    },
    {
        display: "Community",
        url: "#",
    },
    {
        display: "Activity",
        url: "#",
    },
];

const COMPANY = [
    {
        display: "About",
        url: "#",
    },
    {
        display: "Career",
        url: "#",
    },
    {
        display: "Ranking",
        url: "#",
    },
    {
        display: "Contact Us",
        url: "/contact",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Grid container spacing={3}>
                    <Grid item sm={6} md={6} lg={3} style={{ marginBottom: 4 }}>
                        <div className="logo">
                            <Typography
                                variant="h2"
                                component="h2"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "4px",
                                }}
                            >
                                <span>
                                    <SavingsOutlined />
                                </span>
                                NFTs
                            </Typography>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Voluptate, quod repellat! Quis
                                quos dolorum tenetur fuga? Aspernatur rerum quae
                                amet.
                            </p>
                        </div>
                    </Grid>

                    <Grid item sm={6} md={6} lg={2} style={{ marginBottom: 4 }}>
                        <h5>My Account</h5>
                        <List className="list__group">
                            {MY__ACCOUNT.map((item, index) => (
                                <ListItem key={index} className="list__item">
                                    <Link to={item.url}> {item.display} </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item sm={6} md={6} lg={2} style={{ marginBottom: 4 }}>
                        <h5>Resources</h5>
                        <List className="list__group">
                            {RESOURCES.map((item, index) => (
                                <ListItem key={index} className="list__item">
                                    <Link to={item.url}> {item.display} </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item sm={6} md={6} lg={2} style={{ marginBottom: 4 }}>
                        <h5>Company</h5>
                        <List className="list__group">
                            {COMPANY.map((item, index) => (
                                <ListItem key={index} className="list__item">
                                    <Link to={item.url}> {item.display} </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item sm={6} md={6} lg={3} style={{ marginBottom: 4 }}>
                        <h5>Newsletter</h5>
                        <input
                            type="text"
                            className="newsletter"
                            placeholder="Email"
                        />
                        <div className="social__links" style={{}}>
                            <span>
                                <Link to="#">
                                    <Facebook />
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                    <Instagram />
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                    <Twitter />
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                    <Pinterest />
                                </Link>
                            </span>
                            <span>
                                <Link to="#">
                                    <Phone />
                                </Link>
                            </span>
                        </div>
                    </Grid>

                    <Grid
                        item
                        lg={12}
                        style={{ marginTop: 4, textAlign: "center" }}
                    >
                        <p className="copyright">
                            {" "}
                            Copyrights 2022, Developed by Eric Nguyen.
                            @EricNguyen1206&apos;s Tech Diary All Rights
                            Reserved.
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;

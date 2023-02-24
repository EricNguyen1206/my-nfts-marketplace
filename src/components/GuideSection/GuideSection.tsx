import React from "react";
import {
    AccountBalanceWalletOutlined,
    CollectionsOutlined,
    FormatListBulletedOutlined,
    GridViewOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

// INTERNAL
import "./GuideSection.scss";
import { Container, Grid } from "@mui/material";

const STEP__DATA = [
    {
        title: "Setup your wallet",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
        icon: AccountBalanceWalletOutlined,
    },

    {
        title: "Create your collection",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
        icon: GridViewOutlined,
    },

    {
        title: "Add your NFTs",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
        icon: CollectionsOutlined,
    },

    {
        title: "List them for sale",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit eligendi, facilis voluptatum fugit illum ",
        icon: FormatListBulletedOutlined,
    },
];

const GuideSection = () => {
    return (
        <section className="guide">
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={12} className="mb-4">
                        <h3 className="guide__title">
                            Create and sell your NFTs
                        </h3>
                    </Grid>

                    {STEP__DATA.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Grid item lg={3} md={4} sm={6} key={index}>
                                <div className="guide__item">
                                    <span>
                                        <Icon />
                                    </span>
                                    <div className="guide__item--content">
                                        <h5>
                                            <Link to="/wallet">
                                                {item.title}
                                            </Link>
                                        </h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </section>
    );
};

export default GuideSection;

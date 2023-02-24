import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

// INTERNAL
import "./NFTCardList.scss";
import Modal from "../Modal";
import useNftCardList from "./hooks/useNftCardList";
import { stringMinify } from "utils/stringMinify";
import { Nft } from "models/nft/typings";

type Props = {
    nfts: Nft[];
};

const NFTCardList = ({ nfts }: Props) => {
    const { theme, handleBuyNft } = useNftCardList();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedNft, setSelectedNft] = useState<Nft>();

    return (
        <Grid container spacing={3} className="nft-list">
            <Modal
                open={openModal}
                setOpen={setOpenModal}
                handleBuyNft={() => handleBuyNft(selectedNft?.metadata.id)}
                nft={selectedNft}
            />
            {nfts.map((item) => (
                <Grid item lg={3} md={4} sm={6} key={item.metadata.id}>
                    <Card
                        sx={{
                            maxWidth: 278,
                            backgroundColor: theme.palette.background.paper,
                        }}
                        className="nft-list__card"
                    >
                        <CardMedia
                            sx={{ height: 278 }}
                            image={item.metadata.image}
                            title={item.metadata.name}
                            className="nft-list__card--img"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                            >
                                {item.metadata.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {stringMinify(item.metadata.description, 60)}
                            </Typography>
                        </CardContent>
                        <CardActions className="nft-list__card--action">
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setSelectedNft(item);
                                    setOpenModal(true);
                                }}
                            >
                                Detail
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default NFTCardList;

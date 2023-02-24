import React from "react";
import {
    Avatar,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

// INTERNAL
import "./Modal.scss";
import img1 from "assets/images/img-01.jpg";
import ava1 from "assets/images/ava-01.png";
import addressMinify from "utils/addressMinify";
import { Nft } from "models/nft/typings";

export type ModalProps = {
    open: boolean;
    nft?: Nft;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleBuyNft: any;
};

const Modal = ({ open, nft, setOpen, handleBuyNft }: ModalProps) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleClose = () => {
        setOpen(false);
    };

    const handleBuy = () => {
        handleBuyNft();
        handleClose();
    };
    return (
        <Dialog
            className="modal"
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle className="modal__title">NFT Detail</DialogTitle>
            <DialogContent className="modal__content">
                <Stack justifyContent="center" alignItems="center">
                    <img
                        className="modal__content--img"
                        src={nft ? nft.metadata.image : img1}
                        alt="nft img"
                        width={300}
                        height={300}
                    />
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Avatar alt="Remy Sharp" src={ava1} />
                        <div>
                            <Typography variant="h3">@owner</Typography>
                            <Typography variant="body1">
                                {addressMinify(nft?.owner || "")}
                            </Typography>
                        </div>
                    </Stack>
                    <div>
                        <Typography variant="subtitle1">
                            Current Price
                        </Typography>
                        <Typography variant="h3">1.05 ETH</Typography>
                    </div>
                </Stack>
                <DialogContentText className="modal__content--text">
                    {nft?.metadata.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {nft?.isListing && (
                    <Button variant="contained" onClick={handleBuy} autoFocus>
                        Buyout
                    </Button>
                )}
                <Button
                    variant="outlined"
                    color="info"
                    autoFocus
                    onClick={handleClose}
                >
                    Quit
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Modal;

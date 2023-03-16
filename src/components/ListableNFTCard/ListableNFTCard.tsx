import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    TextField,
} from "@mui/material";
import { useContract, Web3Button } from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";
import NFTCard from "components/NFTCard";
import { CollectionModel } from "models/collection/typings";
import { Nft } from "models/nft/typings";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    collection: CollectionModel;
    nft: Nft;
};

const ListableNFTCard = (props: Props) => {
    const [open, setOpen] = React.useState(false);
    const [price, setPrice] = React.useState(0);
    const navigate = useNavigate();
    const contractAddress = process.env.REACT_APP_MARKETPLACE!;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { contract } = useContract(contractAddress, "marketplace");
    const handleSubmit = () => {
        if (props.collection.data && price && contract) {
            const listing = {
                // address of the contract the asset you want to list is on
                assetContractAddress: props.collection.data.contractAddress,
                // token ID of the asset you want to list
                tokenId: props.nft.metadata.id + "",
                // when should the listing open up for offers
                startTimestamp: new Date(),
                // how long the listing will be open for
                listingDurationInSeconds: 100,
                // address of the currency contract that will be used to pay for the listing
                currencyContractAddress: NATIVE_TOKEN_ADDRESS,
                // how many of the asset you want to list
                quantity: 1,
                // how much the asset will be sold for
                buyoutPricePerToken: price,
            };
            contract.direct.createListing(listing);
            setOpen(false);
        }
    };
    return (
        <NFTCard
            nft={props.nft.metadata}
            action={
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    sx={{
                        width: "100%",
                        overflow: "hidden",
                    }}
                >
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Listing</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                The price of each token you are listing for
                                sale.
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                value={price}
                                label="Price"
                                type="number"
                                fullWidth
                                onChange={(e) =>
                                    setPrice(parseFloat(e.target.value))
                                }
                                variant="standard"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Web3Button
                                contractAddress={contractAddress}
                                action={() => handleSubmit()}
                            >
                                Create Direct Listing
                            </Web3Button>
                        </DialogActions>
                    </Dialog>
                    <Button
                        sx={{
                            width: "100%",
                            height: "100%",
                            minWidth: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            overflow: "hidden",
                            borderRadius: 0,
                        }}
                        onClick={() =>
                            navigate(`/nft/${props.nft.metadata.id}`)
                        }
                    >
                        Detail
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleClickOpen}
                        sx={{
                            flex: "0 0 60px",
                            borderRadius: 0,
                            borderLeft: "1px solid #fff",
                            transition: "ease .5s",
                            "&:hover": {
                                flex: "1 0 100%",
                                borderLeft: "none",
                            },
                        }}
                    >
                        List
                    </Button>
                </Stack>
            }
        />
    );
};

export default ListableNFTCard;

/* eslint-disable camelcase */
import React from "react";
import {
    Avatar,
    Box,
    Button,
    Container,
    Divider,
    Drawer,
    FormControl,
    Grid,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ImageUploading from "react-images-uploading";

// INTERNAL
import "./Profile.scss";
import bg from "assets/images/bg.jpg";
import useProfile from "./hooks/useProfile";
import CollectionCard from "components/CollectionCard";
import NFTCard from "components/NFTCard/NFTCard";
import { NftListing } from "models/nft/typings";
import { useAppDispatch } from "hooks/useStoreHooks";
import { createNewCollection } from "models/user";
import { useSDK } from "@thirdweb-dev/react";

const Profile = () => {
    const { user, theme, collectionList, nftList } = useProfile();
    const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
    const [images, setImages] = React.useState<
        { data_url: string; file: File }[]
    >([]);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [fee_recipient, setFee_recipient] = React.useState<any>(0);
    const [primary_sale_recipient, setPrimary_sale_recipient] = React.useState(
        user.data?.address + ""
    );
    const toggleDrawer = (open: boolean) => {
        setOpenDrawer(open);
    };
    const onChange = (imageList: any) => {
        setImages(imageList);
    };
    const dispatch = useAppDispatch();
    const sdk = useSDK();
    const handleSubmit = () => {
        console.log("name", name);
        console.log("description", description);
        console.log("fee_recipient", fee_recipient);
        console.log("primary_sale_recipient", primary_sale_recipient);
        console.log("images", images[0]);
        dispatch(
            createNewCollection({
                sdk,
                name,
                description,
                image: images[0].file,
                fee_recipient,
                primary_sale_recipient,
            })
        );
    };

    return (
        <Container className="profile">
            <Drawer
                anchor="right"
                open={openDrawer}
                onClose={() => toggleDrawer(false)}
            >
                <Container>
                    <Typography
                        variant="h2"
                        component="h2"
                        color={theme.palette.text.primary}
                    >
                        NFT Collection
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="span"
                        color={theme.palette.text.secondary}
                    >
                        ERC721 mintable NFTs
                    </Typography>
                    <Divider />
                    <Typography
                        variant="h3"
                        component="h3"
                        color={theme.palette.text.primary}
                    >
                        Contract Metadata
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="span"
                        color={theme.palette.text.secondary}
                    >
                        Settings to organize and distinguish between your
                        different contracts.
                    </Typography>
                    <Stack direction={"row"}>
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={1}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                // write your building UI
                                <Box
                                    width={"150px"}
                                    height={"150px"}
                                    sx={{
                                        bgcolor: theme.palette.background.paper,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {!images.length ? (
                                        <Button
                                            variant="text"
                                            onClick={onImageUpload}
                                        >
                                            Upload
                                        </Button>
                                    ) : (
                                        <a onClick={() => onImageUpdate(0)}>
                                            <img
                                                src={images[0]["data_url"]}
                                                alt=""
                                                width="150px"
                                            />
                                        </a>
                                    )}
                                </Box>
                            )}
                        </ImageUploading>
                        <FormControl sx={{ flex: 1 }}>
                            <TextField
                                id="collection-name"
                                label="Name"
                                variant="outlined"
                                value={name}
                                helperText={false}
                                onChange={(e) => setName(e.target.value)}
                                sx={{ bgcolor: theme.palette.background.paper }}
                            />
                            <TextField
                                id="collection-description"
                                label="Description"
                                multiline
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                sx={{ bgcolor: theme.palette.background.paper }}
                            />
                        </FormControl>
                    </Stack>
                    <Divider />
                    <Typography
                        variant="h3"
                        component="h3"
                        color={theme.palette.text.primary}
                    >
                        Payout Settings
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        component="p"
                        color={theme.palette.text.secondary}
                    >
                        Where should any funds generated by this contract flow
                        to.
                    </Typography>
                    <Typography
                        variant="h4"
                        component="h4"
                        color={theme.palette.text.primary}
                    >
                        Royalties
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        color={theme.palette.text.secondary}
                    >
                        Determine the address that should receive the revenue
                        from royalties earned from secondary sales of the
                        assets.
                    </Typography>
                    <TextField
                        required
                        id="recipient-address"
                        label="Recipient Address"
                        defaultValue="Hello World"
                        variant="outlined"
                        value={primary_sale_recipient}
                        onChange={(e) =>
                            setPrimary_sale_recipient(e.target.value)
                        }
                    />
                    <br />
                    <TextField
                        required
                        id="recipient-percent"
                        label="Percentage"
                        type="number"
                        variant="outlined"
                        value={fee_recipient}
                        onChange={(e) => setFee_recipient(e.target.value)}
                    />
                    <br />
                    <Button variant="contained" onClick={() => handleSubmit()}>
                        Deploy
                    </Button>
                </Container>
            </Drawer>
            <section className="profile-images">
                <div className="profile-images__background">
                    <img src={bg} alt="background" />
                </div>
                <Avatar
                    alt="Remy Sharp"
                    src={user.data?.avatar}
                    className="profile-images__avatar"
                    sx={{
                        bgcolor: theme.palette.background.paper,
                        width: 150,
                        height: 150,
                    }}
                />
            </section>

            <section className="profile-info">
                <Typography
                    variant="h1"
                    component="h1"
                    className="profile-info__name"
                    sx={{ color: theme.palette.text.primary }}
                >
                    {user.data?.name}
                </Typography>
                <br />
                <Typography
                    variant="subtitle1"
                    component="span"
                    className="profile-info__address"
                    sx={{
                        color: theme.palette.text.secondary,
                        bgcolor: theme.palette.primary.main,
                    }}
                >
                    {user.data?.address}
                </Typography>
                <Grid container spacing={2} className="nft__properties">
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <span
                                className="profile-info__detail--index"
                                style={{ color: theme.palette.text.primary }}
                            >
                                <>{user.data?.balance} GOR</>
                            </span>
                            <h2
                                className="profile-info__detail--script"
                                style={{ color: theme.palette.text.secondary }}
                            >
                                Balance
                            </h2>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <span
                                className="profile-info__detail--index"
                                style={{ color: theme.palette.text.primary }}
                            >
                                {collectionList.length}
                            </span>
                            <h2
                                className="profile-info__detail--script"
                                style={{ color: theme.palette.text.secondary }}
                            >
                                Collections
                            </h2>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack
                            direction="column"
                            className="profile-info__detail"
                        >
                            <span
                                className="profile-info__detail--index"
                                style={{ color: theme.palette.text.primary }}
                            >
                                {nftList.length}
                            </span>
                            <h2
                                className="profile-info__detail--script"
                                style={{ color: theme.palette.text.secondary }}
                            >
                                NFTs
                            </h2>
                        </Stack>
                    </Grid>
                </Grid>
            </section>

            <section className="profile-created">
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Typography
                                variant="h3"
                                component="h3"
                                sx={{ color: theme.palette.text.primary }}
                                className="profile-created__title"
                            >
                                Created
                            </Typography>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => toggleDrawer(true)}
                            >
                                Deploy new
                            </Button>
                        </Stack>
                    </Grid>
                    {collectionList?.map((item) => (
                        <Grid
                            item
                            lg={3}
                            md={4}
                            sm={6}
                            key={item.name}
                            className="profile-created__item"
                        >
                            <CollectionCard collection={item} />
                        </Grid>
                    ))}
                </Grid>
            </section>

            <section className="profile-collected">
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <Typography
                            variant="h3"
                            component="h3"
                            sx={{ color: theme.palette.text.primary }}
                            className="profile-collected__title"
                        >
                            Collected
                        </Typography>
                    </Grid>
                    {nftList.map((nft: NftListing) => (
                        <Grid item lg={3} md={4} sm={6} key={nft.id}>
                            <NFTCard nft={nft} />
                        </Grid>
                    ))}
                </Grid>
            </section>
        </Container>
    );
};

export default Profile;

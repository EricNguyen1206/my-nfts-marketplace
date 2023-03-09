import { useTheme } from "@mui/material";
import { NftAttributes } from "models/nft/typings";
import { useState } from "react";

type Props = {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

const useMintNFTForm = ({ openDrawer, setOpenDrawer }: Props) => {
    const theme = useTheme();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [attributes, setAttributes] = useState<NftAttributes[]>([]);
    const [atb, setAtb] = useState<NftAttributes>({
        trait_type: "",
        value: "",
    });
    const [images, setImages] = useState<{ data_url: string; file: File }[]>(
        []
    );

    const toggleDrawer = (open: boolean) => {
        setOpenDrawer(open);
    };
    const handleChangeImage = (imageList: any) => {
        setImages(imageList);
    };
    const handleAddAtb = () => {
        if (atb.trait_type !== "" && atb.value !== "") {
            setAttributes((prev) => [...prev, atb]);
            setAtb({
                trait_type: "",
                value: "",
            });
        }
    };
    const handleRemoveAtb = (index: number) => {
        setAttributes((prev) => prev.filter((_item, i) => index !== i));
    };

    return {
        atb,
        name,
        theme,
        images,
        openDrawer,
        attributes,
        description,
        setAtb,
        setName,
        handleAddAtb,
        toggleDrawer,
        setAttributes,
        setDescription,
        handleRemoveAtb,
        handleChangeImage,
    };
};

export default useMintNFTForm;

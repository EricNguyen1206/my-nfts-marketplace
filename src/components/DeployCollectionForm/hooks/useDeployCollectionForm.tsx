import { useState } from "react";
import { useSDK } from "@thirdweb-dev/react";
import { useTheme } from "@mui/material";

// INTERNAL
import { createNewCollection } from "models/user";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { Model } from "models/typings";
import { User } from "models/user/typings";

type Props = {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};
const useDeployCollectionForm = ({ openDrawer, setOpenDrawer }: Props) => {
    const theme = useTheme();
    const user: Model<User> = useAppSelector((state) => state.user);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<string>("art");

    const [sellerFeeBasisPoints, setSellerFeeBasisPoints] = useState<number>(0);
    const [primarySaleRecipient, setPrimarySaleRecipient] = useState(
        user.data?.address + ""
    );

    const [images, setImages] = useState<{ data_url: string; file: File }[]>(
        []
    );

    const toggleDrawer = (open: boolean) => {
        setOpenDrawer(open);
    };
    const handleChangeImage = (imageList: any) => {
        setImages(imageList);
    };
    const dispatch = useAppDispatch();
    const sdk = useSDK();

    const handleSubmit = () => {
        dispatch(
            createNewCollection({
                sdk,
                name,
                category,
                description,
                image: images[0].file,
                fee_recipient: primarySaleRecipient,
                primary_sale_recipient: primarySaleRecipient,
                seller_fee_basis_points: sellerFeeBasisPoints * 100,
            })
        );
    };

    return {
        name,
        theme,
        images,
        category,
        openDrawer,
        description,
        primarySaleRecipient,
        sellerFeeBasisPoints,
        setName,
        setImages,
        setCategory,
        toggleDrawer,
        handleSubmit,
        setOpenDrawer,
        setDescription,
        handleChangeImage,
        setPrimarySaleRecipient,
        setSellerFeeBasisPoints,
    };
};

export default useDeployCollectionForm;

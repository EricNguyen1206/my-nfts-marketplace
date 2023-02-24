import { useEffect } from "react";
import { useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSDK } from "@thirdweb-dev/react";

// // INTERNAL
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import {
    loadCollectionData,
    loadcollectionNftList,
} from "models/collection/actions";

const useCollection = () => {
    const dispatch = useAppDispatch();
    const param = useParams();
    const theme = useTheme();
    const collection = useAppSelector((state) => state.collection);
    const sdk = useSDK();

    useEffect(() => {
        (async () => {
            const contract = await sdk?.getContract(
                param.address + "",
                "nft-collection"
            );
            dispatch(loadCollectionData.request(contract));
            dispatch(loadcollectionNftList.request(contract));
        })();
    }, []);

    return { collection, theme };
};

export default useCollection;

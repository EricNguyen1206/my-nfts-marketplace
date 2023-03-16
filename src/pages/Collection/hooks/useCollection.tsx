import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSDK } from "@thirdweb-dev/react";

// INTERNAL
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import {
    readCollectionData,
    readActiveNftListDataByMarketplace,
} from "models/collection";
import { CollectionModel } from "models/collection/typings";
import { useHandleBuy } from "hooks/useHandleBuy";
import useMarketplace from "hooks/useMarketplace";
import { readNftListDataByCollection } from "models/collection/actions";

const useCollection = () => {
    const param = useParams();
    const theme = useTheme();
    const sdk = useSDK();

    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    const marketplace = useMarketplace();
    const handleBuy = useHandleBuy();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    const collection: CollectionModel = useAppSelector(
        (state) => state.collection
    );

    const handleBuyNftInCollection = (tokenId: string) => {
        handleBuy(tokenId, () => {
            if (marketplace) {
                dispatch(
                    readActiveNftListDataByMarketplace({
                        contract: marketplace,
                        address: param.address + "",
                    })
                );
            }
        });
    };

    useEffect(() => {
        (async () => {
            const contract = await sdk?.getContract(
                param.address + "",
                "nft-collection"
            );
            if (contract) {
                dispatch(readCollectionData(contract));
            }
        })();
    }, [marketplace, user.data]);

    useEffect(() => {
        (async () => {
            const contract = await sdk?.getContract(
                param.address + "",
                "nft-collection"
            );
            if (collection.data && contract && marketplace) {
                if (
                    user.data &&
                    user.data.address === collection.data.fee_recipient
                ) {
                    dispatch(
                        readNftListDataByCollection({ collection: contract })
                    );
                } else {
                    dispatch(
                        readActiveNftListDataByMarketplace({
                            contract: marketplace,
                            address: param.address + "",
                        })
                    );
                }
            }
        })();
    }, [collection.data]);

    return {
        user,
        theme,
        param,
        collection,
        openDrawer,
        setOpenDrawer,
        handleBuyNftInCollection,
    };
};

export default useCollection;

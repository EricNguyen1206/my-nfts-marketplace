import { useEffect } from "react";
import { useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useSDK } from "@thirdweb-dev/react";

// INTERNAL
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { loadCollectionData, loadNftListByContract } from "models/collection";
import { CollectionModel } from "models/collection/typings";
import { useHandleBuy } from "hooks/useHandleBuy";
import useMarketplace from "hooks/useMarketplace";

const useCollection = () => {
    const param = useParams();
    const theme = useTheme();
    const navigate = useNavigate();
    const sdk = useSDK();

    const marketplace = useMarketplace();
    const handleBuy = useHandleBuy();
    const dispatch = useAppDispatch();
    const collection: CollectionModel = useAppSelector(
        (state) => state.collection
    );

    const handleDetailNavigate = (tokenId: string) => {
        navigate(`/nft/${tokenId}`);
    };
    const handleBuyNftInCollection = (tokenId: string) => {
        handleBuy(tokenId, () =>
            dispatch(
                loadNftListByContract({
                    contract: marketplace,
                    address: param.address + "",
                })
            )
        );
    };

    useEffect(() => {
        (async () => {
            const contract = await sdk?.getContract(
                param.address + "",
                "nft-collection"
            );
            dispatch(loadCollectionData(contract));
            dispatch(
                loadNftListByContract({
                    contract: marketplace,
                    address: param.address + "",
                })
            );
        })();
    }, [marketplace]);

    return {
        collection,
        theme,
        handleBuyNftInCollection,
        handleDetailNavigate,
    };
};

export default useCollection;

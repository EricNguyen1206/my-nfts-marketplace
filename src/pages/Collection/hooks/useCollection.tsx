import { useEffect } from "react";
import { useTheme } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useSDK, useBuyNow, useContract } from "@thirdweb-dev/react";
import { ListingType } from "@thirdweb-dev/sdk";
import toast from "react-hot-toast";

// INTERNAL
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { loadCollectionData, loadNftListByContract } from "models/collection";
import { CollectionModel } from "models/collection/typings";

const useCollection = () => {
    const dispatch = useAppDispatch();
    const param = useParams();
    const theme = useTheme();
    const navigate = useNavigate();
    const user = useAppSelector((state) => state.user);
    const collection: CollectionModel = useAppSelector(
        (state) => state.collection
    );
    const sdk = useSDK();
    const { contract } = useContract(
        process.env.REACT_APP_MARKETPLACE,
        "marketplace"
    );
    const { mutateAsync: buyNow } = useBuyNow(contract);

    const handleDetailNavigate = (tokenId: string) => {
        if (user.data?.address) {
            navigate(`/nft/${tokenId}`);
        } else {
            toast.error("Plese connect your wallet 💰 \nto access NFT detail!");
        }
    };
    const handleBuy = async (id: string) => {
        try {
            if (id) {
                toast.promise(
                    buyNow({
                        id: id, // ID of the listing to buy
                        type: ListingType.Direct, // Direct (0) or Auction (1)
                        buyAmount: 1, // Amount to buy
                    }),
                    {
                        loading: "Transaction processing...",
                        success: "Transaction success!",
                        error: "Error when purchasing 😥",
                    }
                );
                dispatch(
                    loadNftListByContract({
                        contract: contract,
                        address: "0x190725dc44F93473EAb6d6Dad9b42b8C2E8754b6",
                    })
                );
            }
        } catch (error) {
            toast.error("Error when purchasing 😥");
        }
    };

    useEffect(() => {
        (async () => {
            const contract = await sdk?.getContract(
                param.address + "",
                "nft-collection"
            );
            const marketplace = await sdk?.getContract(
                "0xF1f1a1f12061e6Ca40548cDdAF9E870B86D7D22B",
                "marketplace"
            );
            dispatch(loadCollectionData(contract));
            dispatch(
                loadNftListByContract({
                    contract: marketplace,
                    address: "0x190725dc44F93473EAb6d6Dad9b42b8C2E8754b6",
                })
            );
        })();
    }, []);

    return { collection, theme, handleBuy, handleDetailNavigate };
};

export default useCollection;

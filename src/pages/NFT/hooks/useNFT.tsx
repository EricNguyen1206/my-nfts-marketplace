import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// INTERNAL
import useMarketplace from "hooks/useMarketplace";
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { readNFTData } from "models/nft";
import { Model } from "models/typings";
import { NftListing } from "models/nft/typings";
import { useHandleBuy } from "hooks/useHandleBuy";

/**
 * implement logic and handle every side-effect of the component here
 * @return {any}
 */
export default function useNFT() {
    const { tokenId } = useParams();
    const theme = useTheme();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const marketplace = useMarketplace();
    const handleBuy = useHandleBuy();
    const nft: Model<NftListing> = useAppSelector((state) => state.nft);

    const handleBuyNft = () => {
        if (tokenId) {
            handleBuy(tokenId + "", () => {
                navigate(-1);
            });
        } else {
            toast.error("NFT undefined!");
        }
    };

    useEffect(() => {
        if (tokenId && marketplace) {
            dispatch(readNFTData({ contract: marketplace, tokenId }));
        } else {
            toast.error("NFT token ID is not exit!");
        }
    }, [tokenId, marketplace]);

    return { theme, nft, handleBuyNft };
}

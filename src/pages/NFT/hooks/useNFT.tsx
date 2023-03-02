import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContract } from "@thirdweb-dev/react";
import toast from "react-hot-toast";

// INTERNAL
import { useAppDispatch } from "hooks/useStoreHooks";
import { loadNFTData } from "models/nft";
import { useTheme } from "@mui/material";

/**
 * implement logic and handle every side-effect of the component here
 * @return {any}
 */
export default function useNFT() {
    const { tokenId } = useParams();
    const theme = useTheme();
    const dispatch = useAppDispatch();
    const { contract } = useContract(
        process.env.REACT_APP_MARKETPLACE,
        "marketplace"
    );

    useEffect(() => {
        if (tokenId) {
            dispatch(loadNFTData({ contract, tokenId }));
        } else {
            toast.error("NFT token ID is not exit!");
        }
    }, []);

    return { theme };
}

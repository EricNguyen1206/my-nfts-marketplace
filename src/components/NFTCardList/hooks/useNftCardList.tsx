import { useTheme } from "@mui/material";
import { useContract } from "@thirdweb-dev/react";

// INTERNAL
import { nftsActionTypes } from "constants/actions";
import { useAppDispatch } from "hooks/useStoreHooks";
import toast from "react-hot-toast";

const useNftCardList = () => {
    const theme = useTheme();
    // const nfts = useAppSelector((state) => state.nfts);
    const dispatch = useAppDispatch();
    const { contract } = useContract(
        process.env.REACT_APP_MARKETPLACE,
        "marketplace"
    );

    const handleBuyNft = (id: string | undefined) => {
        if (id) {
            dispatch({
                type: nftsActionTypes.BUY_NFT,
                payload: {
                    id: id,
                    contract: contract,
                    // address: nfts.data?.collection?.contractAddress,
                },
            });
        } else {
            toast.error("Somethings when wrong!");
        }
    };

    return { theme, handleBuyNft };
};

export default useNftCardList;

import { useBuyNow } from "@thirdweb-dev/react";
import { ListingType } from "@thirdweb-dev/sdk";
import toast from "react-hot-toast";

// INTERNAL
import { useAppSelector } from "./useStoreHooks";
import useMarketplace from "./useMarketplace";
/**
 *
 * @return {any}
 */
function useHandleBuy() {
    const user = useAppSelector((state) => state.user);
    const marketplace = useMarketplace();
    const { mutateAsync: buyNow } = useBuyNow(marketplace);

    const handleBuy = async (tokenId: string, next: any) => {
        console.log("handle Buy: ", tokenId);
        try {
            if (user.data) {
                if (tokenId) {
                    toast.promise(
                        buyNow({
                            id: tokenId, // ID of the listing to buy
                            type: ListingType.Direct, // Direct (0) or Auction (1)
                            buyAmount: 1, // Amount to buy
                        }).finally(() => next()),
                        {
                            loading: "Transaction processing...",
                            success: "Transaction success!",
                            error: "Error when purchasing 😥",
                        },
                        {
                            style: {
                                minWidth: "250px",
                            },
                            success: {
                                duration: 1500,
                                icon: "🔥",
                            },
                        }
                    );
                }
            } else {
                toast.error(
                    "Plese connect your wallet 💰 \nto access NFT detail!"
                );
            }
        } catch (error) {
            toast.error("Error when purchasing 😥");
        }
    };

    return handleBuy;
}

export { useHandleBuy };

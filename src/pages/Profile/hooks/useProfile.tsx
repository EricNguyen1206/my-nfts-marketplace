import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

// INTERNAL
import { NftListing } from "models/nft/typings";
import { Collection } from "models/collection/typings";
import { useAppSelector } from "hooks/useStoreHooks";
import { getCollectionListByAddress } from "services/collectionApi";
import { getListNftByAddress } from "services/nftsApi";
import useMarketplace from "hooks/useMarketplace";

/**
 * @return {any}
 */
function useProfile() {
    const theme = useTheme();
    const [nftList, setNftList] = useState<NftListing[]>([]);
    const [collectionList, setCollectionList] = useState<Collection[]>([]);
    const marketplace = useMarketplace();

    const user = useAppSelector((state) => state.user);

    useEffect(() => {
        (async () => {
            if (user.data) {
                const collectionData: Collection[] =
                    await getCollectionListByAddress(user.data?.address + "");
                setCollectionList(collectionData);
            }
        })();
    }, [user]);
    useEffect(() => {
        (async () => {
            if (user.data) {
                const nftData: NftListing[] = await getListNftByAddress(
                    marketplace,
                    user.data?.address + ""
                );
                setNftList(nftData);
            }
        })();
    }, [user, marketplace]);

    return { theme, nftList, collectionList };
}

export default useProfile;

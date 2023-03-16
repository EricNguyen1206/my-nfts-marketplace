import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { useSDK } from "@thirdweb-dev/react";

// INTERNAL
import { Nft } from "models/nft/typings";
import { Collection } from "models/collection/typings";
import { useAppSelector } from "hooks/useStoreHooks";
import { getCollectionListByAddress } from "services/collectionApi";

/**
 * @return {any}
 */
function useProfile() {
    const theme = useTheme();
    const [nftList, setNftList] = useState<Nft[]>([]);
    const [collectionList, setCollectionList] = useState<Collection[]>([]);
    const storecollectionList = useAppSelector((state) => state.collectionList);

    const user = useAppSelector((state) => state.user);

    const sdk = useSDK();

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
            if (sdk && user.data && storecollectionList) {
                let result: any[] = [];
                for (const clt of storecollectionList.new) {
                    const contract = await sdk?.getContract(
                        clt.contractAddress
                    );
                    const newListNftByOwner = await contract?.erc721.getOwned(
                        user.data?.address
                    );
                    result = [...result, ...newListNftByOwner];
                }
                setNftList(result);
            }
        })();
    }, [user.data, storecollectionList.new]);

    return { user, theme, nftList, collectionList };
}

export default useProfile;

import { useEffect } from "react";

// INTERNAL
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { CollectionListModel } from "models/collectionList/typings";
import { loadNewCollectionList } from "models/collectionList";

export type TrendingHook = {
    collectionList?: CollectionListModel;
};
/**
 * useTrending hooks handle(implement) all logic of the Trending component
 * @return {TrendingHook}
 */
export default function useTrending(): TrendingHook {
    const dispatch = useAppDispatch();
    const collectionList = useAppSelector((state) => state.collectionList);
    useEffect(() => {
        dispatch(loadNewCollectionList());
    }, []);

    return {
        collectionList,
    };
}

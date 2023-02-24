import { useEffect } from "react";

// INTERNAL
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { CollectionListModel } from "models/collectionList/typings";
import { loadNewCollections } from "models/collectionList/actions";

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
        dispatch(loadNewCollections.request());
    }, []);
    return {
        collectionList,
    };
}

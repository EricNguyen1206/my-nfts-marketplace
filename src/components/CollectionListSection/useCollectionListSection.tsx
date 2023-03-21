import { useEffect } from "react";

// INTERNAL
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { CollectionListModel } from "models/collectionList/typings";
import { loadCollectionListByCategory } from "models/collectionList/actions";

export type TrendingHook = {
    collectionList: CollectionListModel;
};
/**
 * useTrending hooks handle(implement) all logic of the Trending component
 * @param {string} category
 * @return {TrendingHook}
 */
export default function useCollectionListSection(
    category: string
): TrendingHook {
    const dispatch = useAppDispatch();
    const collectionList = useAppSelector((state) => state.collectionList);
    useEffect(() => {
        !collectionList[category] &&
            dispatch(loadCollectionListByCategory(category));
    }, [category]);

    return {
        collectionList,
    };
}

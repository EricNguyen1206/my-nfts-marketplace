import { useEffect } from "react";
import { useParams } from "react-router-dom";

// INTERNAL
import { useAppDispatch, useAppSelector } from "hooks/useStoreHooks";
import { loadCollectionListByCategory } from "models/collectionList/actions";

const useCategory = () => {
    const collectionList = useAppSelector((state) => state.collectionList);
    const { category } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        (() => {
            category && dispatch(loadCollectionListByCategory(category));
        })();
    }, []);

    return { category, collectionList };
};

export default useCategory;

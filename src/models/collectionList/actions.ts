import { createAsyncThunk } from "@reduxjs/toolkit";

// INTERNAL
import {
    getCollectionListByCategory,
    getNewCollections,
} from "services/collectionApi";
import type { Collection } from "models/collection/typings";

/**
 * @loadNewCollectionList action get list of collection from service
 * @return {Promise<Collection[]>}
 */
const loadNewCollectionList = createAsyncThunk(
    "collectionList/loadNewCollectionList",
    async (): Promise<Collection[]> => {
        const data = await getNewCollections();
        return data;
    }
);

/**
 * @loadCollectionListByCategory action get list of collection from service by category
 * @param {string} category
 * @return {Promise<{ category: string, data: Collection[] }>}
 */
const loadCollectionListByCategory = createAsyncThunk(
    "collectionList/loadCollectionListByCategory",
    async (
        category: string
    ): Promise<{ category: string; data: Collection[] }> => {
        const data = await getCollectionListByCategory(category);
        return { category, data };
    }
);

export { loadNewCollectionList, loadCollectionListByCategory };

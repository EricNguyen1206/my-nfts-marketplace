import { createAsyncThunk } from "@reduxjs/toolkit";

// INTERNAL
import { getCollectionListByCategory } from "services/collectionApi";
import type { Collection } from "models/collection/typings";

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
        try {
            const data = await getCollectionListByCategory(category);
            return { category, data };
        } catch (e: any) {
            console.log("error", e);
            throw new Error("There was error when fetching data!");
        }
    }
);

export { loadCollectionListByCategory };

import { createAsyncThunk } from "@reduxjs/toolkit";

// INTERNAL
import { getNewCollections } from "services/collectionApi";

export const loadNewCollectionList = createAsyncThunk(
    "collectionList/loadNewCollectionList",
    async () => {
        const data = await getNewCollections();
        return data;
    }
);

import { createSlice } from "@reduxjs/toolkit";
import { loadCollectionListByCategory, loadNewCollectionList } from "./actions";

// INTERNAL
import reducers, { initialState } from "./reducers";

const collectionListSlice = createSlice({
    name: "collectionList",
    initialState,
    reducers: reducers,
    extraReducers: (builder) => {
        builder
            .addCase(loadNewCollectionList.fulfilled, (state, action) => {
                state.new = action.payload;
            })
            .addCase(
                loadCollectionListByCategory.fulfilled,
                (state, action) => {
                    switch (action.payload.category) {
                        case "art":
                            state.art = action.payload.data;
                            break;
                        case "game":
                            state.game = action.payload.data;
                            break;
                        case "membership":
                            state.membership = action.payload.data;
                            break;
                        case "photography":
                            state.photography = action.payload.data;
                            break;
                    }
                }
            );
    },
});

export { loadNewCollectionList };
export default collectionListSlice.reducer;

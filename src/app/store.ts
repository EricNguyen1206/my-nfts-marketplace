import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// INTERNAL
import collectionListReducers from "models/collectionList";
import collectionReducers from "models/collection";
import userReducer from "models/user";

const store = configureStore({
    reducer: {
        collectionList: collectionListReducers,
        collection: collectionReducers,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

import { combineReducers } from "redux";

// INTERNAL
import collectionListReducers from "models/collectionList/reducers";
import collectionReducers from "models/collection/reducers";

const rootReducer = combineReducers({
    // nfts: nftListReducer,
    // user: userReducer,
    collectionList: collectionListReducers,
    collection: collectionReducers,
});

export default rootReducer;

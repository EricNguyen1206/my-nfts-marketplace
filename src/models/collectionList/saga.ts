import { all, call, put, takeLatest } from "redux-saga/effects";
// import toast from "react-hot-toast";

// INTERNAL
import { Collection } from "models/collection/typings";
import { getNewCollections } from "services/collectionApi";
import { loadNewCollections } from "./actions";

/**
 * @param {any} action
 */
export function* loadNewCollectionListSaga(action: any) {
    console.log("action", action);
    try {
        const listCollection: Collection[] = yield call(getNewCollections);
        yield put(loadNewCollections.success(listCollection));
    } catch (err) {
        console.log("err", err);
        yield put(loadNewCollections.fail);
    }
}

/**
 * handle all side effect about nftList
 */
function* collectionListSaga() {
    yield all([
        takeLatest(
            loadNewCollections.request().type,
            loadNewCollectionListSaga
        ),
    ]);
}

export default collectionListSaga;

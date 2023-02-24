import { all, call, put, takeLatest } from "redux-saga/effects";
import toast from "react-hot-toast";

// INTERNAL
import { getCollection, getCollectionNftList } from "services/collectionApi";
import { loadCollectionData, loadcollectionNftList } from "./actions";
import { Collection } from "./typings";
import { Nft } from "models/nft/typings";

/**
 *  @param {any} action
 */
function* loadCollectionDataSaga(action: any) {
    try {
        const data: Collection = yield call(getCollection, action.payload);
        yield put(loadCollectionData.success(data));
    } catch {
        toast.error("Load data failed!");
        yield put(loadCollectionData.fail);
    }
}
/**
 *  @param {any} action
 */
function* loadcollectionNftListSaga(action: any) {
    try {
        const data: Nft[] | undefined = yield call(
            getCollectionNftList,
            action.payload
        );
        yield put(loadcollectionNftList.success(data));
    } catch {
        toast.error("Load Nft list failed!");
        yield put(loadCollectionData.fail);
    }
}

/**
 * handle all side effect about nftList
 */
function* collectionSaga() {
    yield all([
        takeLatest(loadCollectionData.request().type, loadCollectionDataSaga),
        takeLatest(
            loadcollectionNftList.request().type,
            loadcollectionNftListSaga
        ),
    ]);
}

export default collectionSaga;

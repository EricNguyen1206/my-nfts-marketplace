import collectionSaga from "models/collection/saga";
import collectionListSaga from "models/collectionList/saga";
import { all, fork } from "redux-saga/effects";

// INTERNAL

/**
 * App root saga to handle side effects
 * Every models should have only one saga, handle multiple side effects
 */
export default function* rootSaga() {
    yield all([fork(collectionListSaga), fork(collectionSaga)]);
}

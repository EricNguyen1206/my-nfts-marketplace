import { SagaParams } from "models/typings";
import { loadCollectionData, loadcollectionNftList } from "./actions";
import { CollectionModel } from "./typings";

const initialState: CollectionModel = {
    data: null,
    nftList: [],
    isLoading: false,
    error: false,
};

const reducers = (state: CollectionModel, action: SagaParams<any>) => {
    switch (action.type) {
        case loadCollectionData.request().type:
            return {
                ...state,
            };
        case loadCollectionData.success().type:
            return {
                ...state,
                data: { ...state.data, ...action.payload },
            };
        case loadCollectionData.fail.type:
            return {
                initialState,
            };
        case loadcollectionNftList.request().type:
            return {
                ...state,
            };
        case loadcollectionNftList.success().type:
            return {
                ...state,
                nftList: action.payload,
            };
        case loadcollectionNftList.fail.type:
            return {
                initialState,
            };
        default:
            return initialState;
    }
};

export default reducers;

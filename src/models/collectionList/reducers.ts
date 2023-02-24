import { SagaParams } from "models/typings";
import toast from "react-hot-toast";
import { loadNewCollections } from "./actions";
import { CollectionListModel } from "./typings";

export const initialState: CollectionListModel = {
    new: [],
};

const reducers = (state: CollectionListModel, action: SagaParams<any>) => {
    switch (action.type) {
        case loadNewCollections.request().type:
            return {
                ...state,
            };
        case loadNewCollections.success().type:
            return {
                ...state,
                new: action.payload,
            };
        case loadNewCollections.fail.type:
            toast.error("Something when wrong!");
            return {
                ...state,
            };
        default:
            return {
                ...initialState,
            };
    }
};

export default reducers;

import { CollectionListModel } from "./typings";

export const initialState: CollectionListModel = {
    new: [],
};

// const reducers = (
//     state: CollectionListModel = initialState,
//     action: SagaParams<any>
// ): CollectionListModel => {
//     switch (action.type) {
//         case loadNewCollections.request().type: {
//             return {
//                 ...state,
//             };
//         }
//         case loadNewCollections.success().type: {
//             return {
//                 ...state,
//                 new: action.payload,
//             };
//         }
//         case loadNewCollections.fail.type: {
//             toast.error("Something when wrong!");
//             return {
//                 ...state,
//             };
//         }
//         default:
//             return {
//                 ...initialState,
//             };
//     }
// };

const reducers = {};

export default reducers;

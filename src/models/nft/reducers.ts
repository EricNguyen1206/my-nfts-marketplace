// INTERNAL
import { Model } from "models/typings";
import { NftListing } from "./typings";

export const initialState: Model<NftListing> = {
    data: null,
    pending: false,
    error: false,
};

const reducers = {};

export default reducers;

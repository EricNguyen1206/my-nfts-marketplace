// INTERNAL
import { Model } from "models/typings";
import { Nft } from "./typings";

export const initialState: Model<Nft> = {
    data: null,
    pending: false,
    error: false,
};

const reducers = {};

export default reducers;

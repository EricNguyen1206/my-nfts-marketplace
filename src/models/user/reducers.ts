import { Model } from "models/typings";
import { User } from "./typings";

export const initialState: Model<User> = {
    data: null,
    pending: false,
    error: false,
};

const reducers = {
    disconectUser: (state: Model<User>) => {
        state.data = null;
    },
};

export default reducers;

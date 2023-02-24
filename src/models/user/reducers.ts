import { PayloadAction } from "@reduxjs/toolkit";

// INTERNAL
import { Model } from "models/typings";
import { User, initialUserState } from "./typings";

const reducers = {
    logout: (state: Model<User>) => {
        localStorage.removeItem("user");
        state = initialUserState;
    },
    setUser: (state: Model<User>, action: PayloadAction<Model<User>>) => {
        const { data, isFetching, error } = action.payload;
        data && (state.data = data);
        isFetching !== undefined && (state.isFetching = isFetching);
        error !== undefined && (state.error = error);
    },
    loadUserRequest: (_state: Model<User>): Model<User> => ({
        data: null,
        isFetching: true,
        error: false,
    }),
    loadUserSuccess: (
        _state: Model<User>,
        action: PayloadAction<User>
    ): Model<User> => ({
        data: action.payload,
        isFetching: true,
        error: false,
    }),
    loadUserError: (_state: Model<User>): Model<User> => ({
        data: null,
        isFetching: false,
        error: true,
    }),
    loginRequest: (_state: Model<User>): Model<User> => ({
        data: null,
        isFetching: true,
        error: false,
    }),
    loginSuccess: (
        _state: Model<User>,
        action: PayloadAction<User>
    ): Model<User> => ({
        data: action.payload,
        isFetching: false,
        error: false,
    }),
    loginFailure: (_state: Model<User>): Model<User> => ({
        data: null,
        isFetching: false,
        error: true,
    }),
};

export default reducers;

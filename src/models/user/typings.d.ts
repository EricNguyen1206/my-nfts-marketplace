import { Model } from "../typings";

export interface User {
    _id?: string;
    username: string;
    password: string;
    email: string;
    isAdmin: boolean;
}

export interface UserAuthentication {
    user: User;
    accessToken?: string;
}

export const initialUserState: Model<User> = {
    data: null,
    isFetching: false,
    error: false,
};

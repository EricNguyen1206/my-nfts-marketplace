import axiosCLient from "utils/axiosClient";

const authApi = {
    async login(account: any) {
        const url = "/auth/login";
        const res = await axiosCLient.post(url, account);
        return res;
    },
    register(newAccount: any) {
        const url = "/auth/register";
        return axiosCLient.post(url, newAccount);
    },
};

const refreshToken = async (): Promise<RefreshTokenReturnType> => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const JWTToken = user.refreshToken;
    const url = "/auth/refreshToken";
    const res = await axiosCLient.post(url, { token: JWTToken });
    return res.data;
};

export { authApi, refreshToken };
export type RefreshTokenReturnType = {
    refreshToken: string;
};

import axiosCLient from "./axiosClient";
import { UserAuthentication } from "models/user/typings";
// import { Cart } from "models/cart/typings";

const cartApi = {
    update(cart: any, user: UserAuthentication) {
        const JWTToken = user.accessToken;
        const userId = user.user._id;
        const url = `/carts/${userId}`;
        cart.userId = userId;
        return axiosCLient.put(url, cart, {
            headers: { authorization: `Bearer ${JWTToken}` },
        });
    },
    create(cart: any, user: UserAuthentication) {
        const JWTToken = user.accessToken;
        const userId = user.user._id;
        const url = "/carts";
        cart.userId = userId;
        return axiosCLient.post(url, cart, {
            headers: { authorization: `Bearer ${JWTToken}` },
        });
    },
    delete() {
        const user = JSON.parse(localStorage.getItem("user") || "");
        const JWTToken = user.accessToken;
        const userId = user.user._id;
        const url = `/carts/${userId}`;
        return axiosCLient.delete(url, {
            headers: { authorization: `Bearer ${JWTToken}` },
        });
    },
};

export const checkUserCart = async (user: UserAuthentication) => {
    // const JWTToken = user.accessToken;
    // const userId = user.user._id;
    // const url = `/carts/find/${userId}`;
    // const res = await axiosCLient.get<Cart>(url, {
    //     headers: { authorization: `Bearer ${JWTToken}` },
    // });
    return {};
};

export { cartApi };

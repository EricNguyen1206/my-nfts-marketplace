import Home from "pages/Home";
import Cart from "pages/Cart/Cart";
import Collection from "pages/Collection";
import { RoutesProps } from "./typings";

export const publicRoutes: RoutesProps[] = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/collection/:address",
        element: Collection,
    },
];

export const userRoutes = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/cart",
        element: Cart,
    },
];

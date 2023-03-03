import Home from "pages/Home";
import Collection from "pages/Collection";
import NFT from "pages/NFT";
import Profile from "pages/Profile";
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
    {
        path: "/nft/:tokenId",
        element: NFT,
    },
];

export const userRoutes: RoutesProps[] = [
    ...publicRoutes,
    {
        path: "/profile",
        element: Profile,
    },
];

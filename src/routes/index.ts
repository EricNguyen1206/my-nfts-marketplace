import Home from "pages/Home";
import Collection from "pages/Collection";
import NFT from "pages/NFT";
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

export const userRoutes: RoutesProps[] = [
    ...publicRoutes,
    {
        path: "/nft/:tokenId",
        element: NFT,
    },
];

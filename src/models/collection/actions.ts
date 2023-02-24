import { Nft } from "models/nft/typings";
import { createSagaAction } from "utils/actionCreator";
import { Collection } from "./typings";

export const loadCollectionData =
    createSagaAction<Collection>("loadCollectionData");

export const loadcollectionNftList = createSagaAction<Nft[]>(
    "loadcollectionNftList"
);

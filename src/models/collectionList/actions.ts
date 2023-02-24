import { createSagaAction } from "utils/actionCreator";
import { Collection } from "models/collection/typings";

export const loadNewCollections =
    createSagaAction<Collection[]>("loadNewCollections");

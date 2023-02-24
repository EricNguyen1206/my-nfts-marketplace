import { ref, child, get } from "firebase/database";

// INTErNAL
import { firebaseDatabase } from "./firebase";
// import { Collection } from "models/collection/typings";

export const getNewCollections = async () => {
    try {
        const dbRef = ref(firebaseDatabase);
        const snapshot = await get(child(dbRef, `collections`));
        if (snapshot.exists()) {
            console.log(snapshot.val());
            return snapshot.val();
        } else {
            console.log("No data available");
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getCollection = async (contract: any) => {
    try {
        if (contract) {
            const data = contract.metadata.get();
            return data;
        } else {
            return {};
        }
    } catch (e) {
        console.error("e", e);
        return {};
    }
};

export const getCollectionNftList = async (contract: any) => {
    try {
        if (contract) {
            const data = contract.getAll();
            console.log("nft data", data);
            return data;
        } else {
            return {};
        }
    } catch (e) {
        console.error("e", e);
        return {};
    }
};

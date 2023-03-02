// import { orderByChild } from "@firebase/database";
import { equalTo } from "@firebase/database";
import { ref, query, get, orderByChild } from "firebase/database";

// INTERNAL
import { firebaseDatabase } from "./firebase";

/**
 *
 * @param {string} address wallet address of user
 */
export const getUserData = async (address: string) => {
    try {
        const dbRef = ref(firebaseDatabase, `users`);
        const snapshot = await get(
            query(dbRef, orderByChild("address"), equalTo(address))
        );
        if (snapshot) {
            return snapshot.val().findLast((item: any) => item.address);
        } else {
            return {};
        }
    } catch (error) {
        console.log("error", error);
        return {};
    }
};

// import { orderByChild } from "@firebase/database"; // function to query data from firebase
import { equalTo } from "@firebase/database";
import { ref, query, get, orderByChild } from "firebase/database";

// INTERNAL
import { firebaseDatabase } from "./firebase";
import { User } from "models/user/typings";

/**
 * @getUserData get User data from firebase
 * @param {string} address wallet address of user
 * @return {Promise<User>}
 */
const getUserData = async (address: string): Promise<User> => {
    try {
        const dbRef = ref(firebaseDatabase, `users`);
        const snapshot = await get(
            query(dbRef, orderByChild("address"), equalTo(address))
        );
        if (snapshot) {
            return snapshot.val().findLast((item: any) => item.address);
        }
        throw new Error("Get resource failed!");
    } catch (e: any) {
        throw new Error("Get resource failed!", e);
    }
};

export { getUserData };

// import { orderByChild } from "@firebase/database"; // function to query data from firebase
import { equalTo } from "@firebase/database";
import { ref, query, get, orderByChild } from "firebase/database";

// INTERNAL
import { firebaseDatabase } from "utils/firebase";
// import { User } from "models/user/typings";

/**
 * @getUserData get User data from firebase
 * @param {string} address wallet address of user
 * @return {Promise<any>}
 */
const getUserData = async (address: string): Promise<any> => {
    try {
        const dbRef = ref(firebaseDatabase, `users`);
        const snapshot = await get(
            query(dbRef, orderByChild("address"), equalTo(address))
        );
        if (snapshot) {
            return Object.values(snapshot.val())[0];
        }
        throw new Error("Get resource failed!");
    } catch (e: any) {
        throw new Error("Get resource failed!", e);
    }
};

export { getUserData };

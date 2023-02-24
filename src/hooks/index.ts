import { useContract } from "@thirdweb-dev/react";

// INTERNAL
import { Model } from "models/typings";
import { User } from "models/user/typings";
// import { useAppSelector } from "./useStoreHooks";

export const useUser = (): Model<User> => {
    // return useAppSelector((state) => state.user);
    return {
        data: null,
        isFetching: false,
        error: false,
    };
};

export const useMarketplace = () => {
    const marketplace = useContract(
        "0xF1f1a1f12061e6Ca40548cDdAF9E870B86D7D22B"
    );
    return marketplace;
};

import { useContract } from "@thirdweb-dev/react";

/**
 * function return contract marketplace
 * @return {any} marketplace contract
 */
function useMarketplace(): any {
    const { contract } = useContract(
        "0xF1f1a1f12061e6Ca40548cDdAF9E870B86D7D22B",
        "marketplace"
    );
    return contract;
}

export default useMarketplace;

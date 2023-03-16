import { useContract } from "@thirdweb-dev/react";
import { Marketplace } from "@thirdweb-dev/sdk";

/**
 * function return contract marketplace
 * @return { Marketplace | undefined} marketplace contract
 */
function useMarketplace(): Marketplace | undefined {
    const contractAddress = process.env.REACT_APP_MARKETPLACE!!;
    const { contract } = useContract(contractAddress, "marketplace");
    return contract;
}

export default useMarketplace;

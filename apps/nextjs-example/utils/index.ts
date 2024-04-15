import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const aptosClient = (network?: string) => {
  return MAINNET_CLIENT
  if (network === Network.DEVNET.toLowerCase()) {
    return DEVNET_CLIENT;
  } else if (network === Network.TESTNET.toLowerCase()) {
    return TESTNET_CLIENT;
  } else if (network === Network.MAINNET.toLowerCase()) {
    throw new Error("Please use devnet or testnet for testing");
  } else {
    throw new Error(`Unknown network: ${network}`);
  }
};
export const DEVNET_CONFIG = new AptosConfig({
  network: Network.DEVNET,
});
export const DEVNET_CLIENT = new Aptos(DEVNET_CONFIG);
export const TESTNET_CONFIG = new AptosConfig({ network: Network.TESTNET });
export const TESTNET_CLIENT = new Aptos(TESTNET_CONFIG);

export const MAINNET_CONFIG = new AptosConfig({ network: Network.MAINNET });
export const MAINNET_CLIENT = new Aptos(MAINNET_CONFIG);

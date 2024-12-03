import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { IbuidlSocail } from "../../target/types/ibuidl_socail";

let provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

console.log("provider 111-=" ,  provider)
const program = anchor.workspace.IbuidlSocail as Program<IbuidlSocail>;

export { program , provider }

export function useDefaultWallet() {
  // AUXCmvNxRmq2HYKF3WFxJgp1pwrbTm86prfh1iVDzB3K
  return anchor.Wallet.local();
}

// HiYmcZkiKK5jP9gXKyUBm9pvmxqWwFDkSzuGuk4t9CZU
export function useVistorWallet() {
  const keypair = anchor.web3.Keypair.fromSecretKey(
    Uint8Array.from([19,31,117,122,140,91,76,151,6,163,108,214,221,227,248,55,62,155,76,121,105,11,7,57,203,15,91,184,103,240,25,139,248,95,185,188,162,93,223,159,217,23,227,91,60,134,66,229,14,109,148,146,173,100,131,123,137,34,183,87,20,112,229,247])
  )

  return new anchor.Wallet(keypair);
}
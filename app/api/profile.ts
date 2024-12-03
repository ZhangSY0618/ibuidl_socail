import * as anchor from "@coral-xyz/anchor";
import { program } from "./wallet";
export async function createProfile(
    wallet: anchor.Wallet,
    displayName: string,
) {
    await program.methods.createProfile(displayName)
        .accounts({
            authority: wallet.publicKey,
        })
        .signers([wallet.payer])
        .rpc();
}

export async function getProfile(
    wallet: anchor.Wallet,
) {
    const [profilePda,] = anchor.web3.PublicKey.findProgramAddressSync(
        [Buffer.from("profile"),wallet.publicKey.toBuffer()],
        program.programId,
    );
    await  program.account.ibuilProfile.fetch(wallet.publicKey);
}
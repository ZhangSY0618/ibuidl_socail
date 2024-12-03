import { createProfile, getProfile } from "./api/profile";
import { useDefaultWallet , useVistorWallet} from "./api/wallet";
(
    async () => {
        const defaultWallet = await useDefaultWallet();
        const visitorWallet = await useVistorWallet();

        const r1 = await createProfile(defaultWallet,"Bob");
        console.log('ri -=',r1);
        const r2 = await getProfile(defaultWallet);
        console.log('r2 -=',r2);
        
    }
)()
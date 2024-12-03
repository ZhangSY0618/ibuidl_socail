use anchor_lang::prelude::*;

pub mod instructions;
pub mod state;

use instructions::*;
// declare_id!("8vLkQUPfsnHkRGHezAvXdgLUm7MDs3PZscgiNbz5FNSW");
declare_id!("Fah7PCNzSX5BCUVq65pXFVuU9bKNYsWo68skEPpmoERS");

#[program]
pub mod ibuidl_socail {

    use super::*;
    
    pub fn create_profile(ctx: Context<CreateProfile>, display_name: String) -> Result<()> {
        instructions::profile::create_profile(ctx, display_name)?;
        Ok(())
    }
}



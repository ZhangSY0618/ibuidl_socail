use anchor_lang::prelude::*;

use crate::state::profile::IbuilProfile;
pub fn create_profile(ctx: Context<CreateProfile>, display_name: String) -> Result<()> {
    ctx.accounts.profile.display_name = display_name;
    Ok(())
}

#[derive(Accounts)]
pub struct CreateProfile<'info> {
    #[account(
        init, 
        payer = authority, 
        space = 8 + IbuilProfile::INIT_SPACE,
        seeds = [
            IbuilProfile::SEED_PREFIX.as_bytes(), 
            authority.key().as_ref()
        ],
        bump
    )]
    pub profile: Account<'info, IbuilProfile>,

    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}
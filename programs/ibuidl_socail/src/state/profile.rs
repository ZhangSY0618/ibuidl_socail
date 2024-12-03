use anchor_lang::prelude::*;
#[account]
#[derive(InitSpace)]
pub struct IbuilProfile {
    #[max_len(20)]
    pub display_name: String,
}

impl  IbuilProfile {
    pub const SEED_PREFIX: &'static str = "profile";
}
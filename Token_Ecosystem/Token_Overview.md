# $RETAIL Token

## Overview
The $RETAIL token is the native governance and utility token of Retail DAO, deployed on the Base Network. It enables voting, membership tiers, and incentives for community participation.

## Token Details
- **Symbol**: $RETAIL
- **Network**: Base Network (mainnet and Sepolia testnet)
- **Contract Address**: [0xc7167e360bD63696a7870C0Ef66939E882249F20]
- **Standard**: ERC-20
- **Decimals**: 18

## Supply and Distribution
- **Total Supply**: [100,000,000 $RETAIL]

- **Initial Distribution**:

  - 65% DAO Community Treasury:

    *275M* $RETAIL directly unlocked in Treasury atGenesis allocation.
    *25.8M* $RETAIL stays in the Multisig Wallet for budget expenses and for off-chain proposals.
    *349.2M* $RETAIL vested over 3 years, which means an average monthly release to the Treasury of 9,700,000 tokens. (release may take place once per trimester shortly before a new budget period starts.) 

  - 21.75% Destined for 4 future Airdrops, held in reserve by the multisig wallet. Goal is every 3-4 months after the First Airdrop.

  - 8% First Main Airdrop. *80M* $RETAIL tokens.

  - 4.5% Contributors Team: Two-tier system:
        1.- Medium tier: *20M* tokens for 10-15 contributors (~*1-3M* tokens each)
        2.-Highest Tier: *25M* tokens split among entities.
        *EXCLUDED from XP-leveling rewards.*

  - 0.75% For Early Participants:
    Based on Discord activity and level role status (accumulative):
        1.- Level 1: 2.5M tokens
        2.- Level 2: 2M tokens
        3.- Level 3+: 1.5M Tokens
        4.- Level 5+: 1M tokens
        5.- Level 10+: .5M tokens.

- **Inflation/Deflation**: 
Originally proposed a 2% yearly inflationary scheme after the first 3 years, due to Aragon's Framework limitations of removing or not maintaining active the Mint_ function in our contracts architecture. 

After being flagged in common DEXScreener scanners with issues like "Mint Function Active", "No renounced Ownership", "Hidden Owner" and "Suspicious Functions" A DAO contributors team member, conducted an Audit on RetailDAO Smart Contract Architecture, with findings reported on Audits.md and after Contributors team consultation, The DAO agrees to remove all Mint future possibilities, by Bricking the Original DAO used to deploy $RETAIL token. Fixing Max Supply for $RETAIL token at 1B tokens. 

For more Details about this Governance actions, updates are stored on /Scripts Folder.

## Utility
- **Governance**: Voting power in Aragon and Snapshot, proportional to holdings
- **Membership**: Unlocks tiers (Basic, Pro, VIP; see [GOVERNANCE.md](../GOVERNANCE.md))
- **Incentives**: Rewards for contributions (e.g., proposals, code, audits)
- **Payments**: [Access to premium Retail_DAO services, Grants, and token Allocations from Treasury Budget.]

## Transparency
- Token contract is in `contracts/` and open for review
- Deployment details and audits are in `docs/audits.md`
- Distribution events (e.g., airdrops) are announced on [Discord](https://discord.gg/mpABdUQXJC)

## How to Acquire
- **Airdrops**: Participate in community events (check Discord)
- **Liquidity Pools**: Provide liquidity on [Uniswap on Base]

## Contract Interaction
See `docs/interactions.md` for directions on interacting with the $RETAIL contract.
# Bricking the OG DAO for Retail DAO 

## Summary :scroll:

After setting up liquidity pool positions on Uniswap V4 our $RETAIL token was flagged by [Dexscreener](https://dexscreener.com/base/0x7379613ac32b58012f2fb52439228053f51897e3f0a68208587e51bfbfc3eb7f) due to concerns about the mint function and ownership structure of our original DAO (OG DAO). After conducting an audit and consulting with [Aragon's support team](https://aragon.org/), we addressed these concerns by "bricking" the OG DAO, which was used to mint the $RETAIL token. This process revoked all execution permissions, rendering the OG DAO immutable and capping the $RETAIL token supply at 1 billion tokens, ensuring no further minting is possible. The $RETAIL token is linked to our current governance DAO, which operates with a multisig wallets and treasury independently for enhanced security.

This document outlines the deployment of the OG DAO, the audit findings, the bricking process, and the benefits of a non-inflationary and immutable token supply.

## Background and Audit Findings :mag:

In November 2024, Retail DAO deployed its OG DAO on the Base blockchain using the Aragon framework to mint 1 billion $RETAIL tokens. To enable minting, Aragon by default installed `IVotes` plugin on that DAO, which granted that [OG DAO](https://app.aragon.org/dao/base-mainnet-0xcbFaabb2b87E858717a52216439276956dc1C9eC/settings/dashboard) minting permissions. The minted tokens were then transferred to a multisig wallet ([Multisig Contract Address: 0x989bbb17742c07a6053ffe8eb0be190887aa2bbf](https://basescan.org/address/0x989bbb17742c07a6053ffe8eb0be190887aa2bbf)) for secure distribution during the main airdrop. The remain $RETAIL tokens were linked to our current governance DAO ([Current DAO Contract Address: 0xc7167e360bd63696a7870c0ef66939e882249f20](https://basescan.org/address/0xc7167e360bd63696a7870c0ef66939e882249f20)), which we actively use for governance, with an independent multisig and treasury for security purposes.

The Aragon framework and our deployment process led to several issues flagged by common DEX and AI scanners:

1. **Active Mint Function**: The OG DAO retained an active mint function due to the `IVotes` plugin with 'execute()'permissions, raising concerns about potential token supply inflation.
2. **Non-Standard Ownership**: Aragon's framework does not follow the standard `Ownable` contract pattern (e.g., `ownership()` and `renounceOwnership()`), preventing public renouncement of ownership in a verifiable way. This made Retail DAO appear to have a "hidden owner."
3. **Proxy Contracts**: The use of proxy contracts during the OG DAO and token deployment obscured the transparency of the control structure.
4. **Outdated Token Metadata**: The token metadata on [Basescan](https://basescan.org/) was not updated with current ownership information due to prior confirmation issues, further reducing perceived transparency.

For detailed audit findings, refer to our [audit report](./audits.md).

## Bricking the OG DAO :gear:

To address these concerns and ensure the integrity of Retail DAO, we consulted with Aragon's support team, who recommended "bricking" the OG DAO. This process permanently disables the OG DAO's ability to execute actions. The steps taken were:

1. **Revoking `execute()` Permissions**: All permissions to call the `execute()` function on the OG DAO ([OG DAO](https://app.aragon.org/dao/base-mainnet-0xcbFaabb2b87E858717a52216439276956dc1C9eC/settings/dashboard)) were revoked. This ensures the DAO cannot perform any actions, including minting new $RETAIL tokens or re-granting permissions.
2. **Immutable OG DAO**: By removing all execution capabilities, the OG DAO is now fully immutable. No entity, including the original deployers, can interact with or modify its state.
3. **Capped Token Supply**: The $RETAIL token supply is permanently capped at 1 billion tokens ([Token Contract Address: 0xc7167e360bd63696a7870c0ef66939e882249f20](https://basescan.org/token/0xc7167e360bd63696a7870c0ef66939e882249f20)). No additional tokens can be minted, ensuring a non-inflationary token economy.

Since the $RETAIL token is linked to our current governance DAO, which operates independently with a multisig wallet and treasury, bricking the OG DAO does not affect our further governance operations.

## Benefits of Bricking the OG DAO :sparkles:

Bricking the OG DAO provides significant benefits to the Retail DAO ecosystem:

- **Non-Inflationary Token Supply**: The $RETAIL token supply is fixed at 1 billion tokens, eliminating the risk of inflation and providing certainty to token holders.
- **Immutability**: The OG DAO's immutability ensures no unauthorized changes can be made, enhancing trust and security.
- **Decentralized Governance**: The current DAO, linked to the $RETAIL token, continues to manage governance transparently, supported by a secure multisig and treasury structure.

## Transparency and Next Steps :speech_balloon:

By bricking the OG DAO, Retail DAO has resolved the concerns raised by Dexscreener and common scanners regarding the mint function and ownership structure. The $RETAIL token supply is verifiably fixed, and the OG DAO's immutability guarantees no future modifications. We are working to update the outdated metadata on Basescan to reflect the current state of the contracts.

For further details, please refer to:
- [Audit Report](./audits.md)
- OG DAO Contract: [0xcbFaabb2b87E858717a52216439276956dc1C9eC](https://app.aragon.org/dao/base-mainnet-0xcbFaabb2b87E858717a52216439276956dc1C9eC/settings/dashboard)
- $RETAIL Token Contract: [0xc7167e360bd63696a7870c0ef66939e882249f20](https://basescan.org/address/0xc7167e360bd63696a7870c0ef66939e882249f20)
- Current Governance DAO Contract: [0xc7167e360bd63696a7870c0ef66939e882249f20](https://basescan.org/address/0xc7167e360bd63696a7870c0ef66939e882249f20)
- Multisig Wallet Contract: [0x989bbb17742c07a6053ffe8eb0be190887aa2bbf](https://basescan.org/address/0x989bbb17742c07a6053ffe8eb0be190887aa2bbf)

Retail DAO remains committed to transparency, decentralization, and community-driven governance. For questions or further clarification, please reach out via our official channels.
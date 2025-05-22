# Retail DAO Whitepaper

## Overview
Retail DAO is a decentralized autonomous organization (DAO) designed to empower retail investors by providing access to high-quality research, collective wisdom, and investment opportunities in the crypto space. Built on the principles of transparency, collaboration, and decentralization, Retail DAO leverages the Aragon framework on the Base Chain to create a community-driven platform for knowledge sharing and governance.

This whitepaper outlines the mission, technical architecture, tokenomics, governance structure, and community platform of Retail DAO. Our goal is to democratize access to investment insights and foster a vibrant, inclusive community of retail investors.

## Mission Statement
Empower retail investors to achieve financial freedom through a decentralized community that provides access to valuable resources, insights, and opportunities.

## Purpose
- Build a decentralized community for retail investors to collaborate, share knowledge, and identify promising opportunities in the crypto space.
- Establish `$RETAIL` as a governance and membership token.
- Implement a transparent governance process using Aragon's on-chain tools and off-chain platforms.
- Create a token-gated Discord server as the primary hub for community engagement and governance.

## Objectives
### Short-Term
- Bootstrap and grow the community on the Retail DAO Discord server.
- Attract high-quality contributors to share research and insights.
- Enhance content quality in the token-gated Alpha Zone.
- Launch airdrop campaigns to incentivize early participation.

### Long-Term
- Establish partnerships to enhance member value.
- Maintain a sustainable DAO Treasury to support community initiatives.
- Support ongoing community-driven research and investment through treasury-funded proposals.

## Technical Architecture
Retail DAO is deployed on the **Base Network**, a Layer 2 scaling solution for Ethereum, ensuring low transaction costs and high scalability. The DAO is built using the **Aragon framework**, which provides robust tools for decentralized governance and treasury management.

### Key Components
1. **Aragon DAO Framework**:
   - **Aragon Client**: Used for creating and managing the DAO, enabling on-chain governance and proposal execution.
   - **Aragon Voting App**: Facilitates token-weighted voting for on-chain proposals.
   - **Aragon Finance App**: Manages the DAO Treasury, including disbursements and vesting schedules.
   - **Aragon Agent App**: Allows the DAO to interact with external contracts and protocols.
   - **Custom Permissions**: Configured to ensure secure access control for treasury operations and governance actions.

2. **Base Chain**:
   - Retail DAO leverages Base Chain for its low gas fees and Ethereum compatibility.
   - The `$RETAIL` token is an ERC-20 token deployed on Base Chain, minted via Aragon's token minting functionality.
   - Smart contracts are audited to ensure security and reliability (audit details to be published post-launch).

3. **Multisig Wallet**:
   - A Gnosis Safe multisig wallet is used to manage airdrops, vesting contracts, and treasury disbursements.
   - Requires approval from multiple signers to execute transactions, enhancing security.

4. **Off-Chain Tools**:
   - **Snapshot**: Used for token-weighted, gasless voting to gauge community sentiment.
   - **Discord with Collab.Land**: Provides token-gated access and role assignment based on `$RETAIL` token holdings.
   - **Governance Forum**: Hosted on Discourse or a similar platform for proposal discussions.

### Smart Contract Details
- **Token Contract**: `$RETAIL` (ERC-20, 1 billion total supply, minted on Base Chain).
- **Treasury Contract**: Managed by Aragon Finance App, with vesting schedules for the 65% treasury allocation.
- **Airdrop Contract**: Custom contract for distributing tokens to eligible participants, integrated with the multisig wallet.
- **Governance Contract**: Aragon Voting App for on-chain proposal execution.

## Discord Server & Community Platform
The Retail DAO Discord server serves as the central hub for community engagement, research sharing, and governance. It is structured to support token-gated access, tiered membership, and specialized channels.

### Key Features
- **Collab.Land Integration**: Verifies `$RETAIL` token holdings for role assignment.
- **Membership Tiers**:
  - **BasicMember**: 20,000 `$RETAIL` tokens (Discord access, governance participation, social credit).
  - **ProMember**: 40,000 `$RETAIL` tokens (IRL events, group calls, partner events, moderator rights).
  - **VIPMember**: 100,000 `$RETAIL` tokens (exclusive Whales Chat, VIP events, access to Angel Investors Network [TBD]).
- **Channel Types**:
  - **Public**: Open to all users.
  - **Token-Gated**: Accessible only to verified token holders.
  - **Private**: Invite-only for core teams and admins.
- **Highlighted Channels**:
  - **Alpha Zone**: Token-gated channel for research and alpha sharing.
  - **Whales Chat**: Exclusive to VIPMembers for high-level discussions.
  - **Governance Zone**: For proposal discussions and voting.
  - **Teams Zone**: Private channels for operational teams.

### Gamification & Incentivization
- **XP Leveling System**: Members earn XP for activity and contributions, unlocking higher roles and rewards.
- **Quality Recognition**: Bonus XP for high-effort posts, nominated via community polls.
- **Periodic Reset**: XP and roles reset after each budget period to encourage new contributors.

## Token Ecosystem
- **Token**: `$RETAIL` (ERC-20 on Base Chain).
- **Total Supply**: 1,000,000,000 (1 billion) tokens.
- **Utility**: Membership access, governance voting, and social credit within the community.

### Token Distribution
| Allocation                     | % of Supply | Details                                                                 |
|-------------------------------|-------------|-------------------------------------------------------------------------|
| Retroactive Rewards Airdrop   | 5.25%       | For genesis contributors and early participants based on Discord activity |
| First Main Airdrop            | 8%          | Details specified in a separate proposal                               |
| Future Airdrops (4 rounds)    | 21.75%      | Held in reserve, eligibility determined by DAO governance, every 3-4 months |
| DAO Community Treasury        | 65%         | For grants, bounties, and operational budgets, vested over 3 years      |

### Treasury Operations
- Controlled by Aragon smart contracts, with disbursements approved via on-chain proposals.
- Multisig wallet manages airdrops and vesting contracts.
- Transparent reporting of treasury activities via the Governance Zone.

## Governance Structure
Retail DAO employs a hybrid governance model combining on-chain and off-chain mechanisms to ensure flexibility and inclusivity.

### Proposal Process
1. **Discussion**: Ideas are proposed and discussed in the Governance Forum (Discourse or similar).
2. **Formalization**: Proposals are formalized and submitted for voting.
3. **Voting**: Conducted via:
   - **Discord Polls**: Off-chain, 1 member = 1 vote for community sentiment.
   - **Snapshot**: Off-chain, token-weighted voting for broader participation.
   - **Aragon Voting App**: On-chain, token-weighted voting for binding decisions.
4. **Execution**: Approved proposals are executed via the multisig wallet or Aragon Agent App.

### Future Updates
- Governance mechanisms may evolve based on community consensus, potentially integrating new tools like quadratic voting or conviction voting.
- Regular audits of smart contracts and governance processes to maintain security and trust.

## Disclaimer / Legal
`$RETAIL` is a non-financial asset used for governance and community membership. It does not represent a financial security or investment. 

For full details, including airdrop eligibility, treasury vesting schedules, and governance guidelines, refer to the [complete Genesis Proposal document](https://docs.google.com/document/d/1GEDiRmmGxrSuSEidMmSDeu_xFtgW7u_t94PCyMfmM3w/edit?usp=sharing).

## Contributing
We welcome contributions to Retail DAO's codebase, documentation, and governance processes. To contribute:
1. Fork this repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For inquiries, reach out via:
- **Discord**: [RetailDAO](https://discord.gg/mpABdUQXJC)
- **Twitter/X**: [@retaildao](https://x.com/retaildao)
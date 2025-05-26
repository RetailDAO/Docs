# Retail DAO Technical Specifications :scroll:

This document outlines the technical architecture of Retail DAO, including smart contracts, token, governance, and infrastructure, ensuring transparency and developer accessibility.

## Smart Contracts :robot:
- **Language**: Solidity ^0.8.17
- **Framework**: Aragon's default for development, testing, and deployment
- **Standards**:
  - ERC-20: For $RETAIL token
  - Aragon-compatible: For modular governance via Aragon Framework
  - OpenZeppelin: For secure contract templates (e.g., `Math.sol`, `IVotes.sol`)
- **Contracts**:
  - `GovernanceERC20.sol`: Core governance contract, built with Aragon’s modular templates
  - `RetailToken.sol`: $RETAIL ERC-20 token for governance and incentives
  - [Additional contracts TBD, e.g., treasury or staking]
- **Aragon Integration**:
  - **Plug-ins**: Modular governance extensions for voting, permissions, or treasury management
  - **Proxy Contracts**: Upgradeable proxies for governance contracts, enabling future enhancements without disrupting DAO operations
  - **Templates**: Using Aragon’s DAO templates (e.g., Company or Membership) as a base, customized for Retail DAO’s hybrid model
- **Location**: `contracts/`
- **Testing**: Mocha/Chai in `test/`, targeting 100% coverage
- **Audits**: Planned, with reports in `docs/audits.md`

## $RETAIL Token :coin:
- **Symbol**: $RETAIL
- **Network**: Base Network (Sepolia testnet, mainnet)
- **Standard**: ERC-20
- **Decimals**: 18
- **Supply**: [100,000,000]
- **Features**:
  - Governance: Voting power proportional to holdings in Aragon and Snapshot
  - Transferable: For exchanges and liquidity pools
 - **Contract Address**: [0xc7167e360bd63696a7870c0ef66939e882249f20]

## Governance :ballot_box:
- **Hybrid Model**:
  - **On-chain**: Aragon Framework for binding votes (e.g., fund allocation, contract upgrades)
  - **Off-chain**: Snapshot for gasless proposals, Discord polls for community sentiment
- **Aragon Framework**:
  - **Plug-ins**: Custom plug-ins for voting weights (based on $RETAIL Holdings), proposal thresholds, or treasury access
  - **Proxy Contracts**: Governance contracts use Aragon’s proxy pattern for upgradeability, ensuring flexibility for future governance changes
  - **Templates**: Built on Aragon’s Membership template, extended with custom plug-ins for Retail DAO’s needs (e.g., tiered voting, hybrid on/off-chain integration)
  - **Aragon Client**: User-friendly interface for members to propose, vote, and manage DAO activities
- **Contracts**: `GovernanceERC20.sol` integrates with Aragon’s Permission manager and voting apps.
- **Details**: See `GOVERNANCE.md`

## Infrastructure :link:
- **Blockchain**: Base Network
  - Testnet: Base Sepolia
  - Mainnet: Base
- **Details**: See `Onboarding_and_Participation/interactions.md`

## Development Environment :gear:
- **Tools**:
  - Aragon's Default Framework: Compilation, testing, deployment.
  - Interaction with contracts: Hardhat, Remix IDE.
  - Node.js: v16+ for dependency management
  - npm: For package installation
- **Dependencies**:
  - `@nomicfoundation/hardhat-toolbox`
  - `@openzeppelin/contracts`
  - `@aragon/os` (for Aragon Framework integration)
  - `dotenv`
# Interacting with Retail DAO Contracts

This guide explains how to deploy and interact with Retail DAO’s smart contracts on the Base Network.

## Deployed Contracts
- **Governance**: [TBD, update after deployment]
- **$RETAIL Token**: [TBD, update after deployment]
- **Network**: Base Sepolia (testnet), Base (mainnet)

## Prerequisites
- Install Node.js and Hardhat (see [README.md](../../README.md))
- Set up `.env` with `PRIVATE_KEY` and `ALCHEMY_API_KEY` (see `hardhat.config.js`)

## Interaction

- Using Scripts: 
    Edit scripts/interact.js to call contract functions, then run: 
    '''bash 
    npx hardhat run scripts/interact.js --network baseSepolia 

- Using Hardhat Console:
    '''bash
    npx hardhat console --network baseSepolia

- Example: 

'''javascript 

const RetailDAO = await ethers.getContractAt("RetailDAO_contract, "0xYourAddress);
await RetailDAO.voteOnProposal(1, true);

## Example Functions

- *Vote*: voteOnProposal(proposalId, support) (Governance contract)
- *Transfer*: transfer(recipient, amount) ($RETAIL token)
- See contract source in contracts/ for full ABI 

## Transparency 

- All interactions are logged on the BAse Network Explorer. 
- Audit reports are in docs/audits.md
- Share issues or suggestions on Discord.

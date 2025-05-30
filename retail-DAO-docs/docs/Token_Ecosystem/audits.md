---
id: token audits
title: Token Audit
hide_title: false
hide_table_of_contents: false
sidebar_label: Audits
sidebar_position: 5
custom_edit_url: null
description: This is the Retail DAO Token audit conducted by Triple Tres.
keywords:
  - Retail DAO
  - $RETAIL
  - Token Audit
  - Security Audit
  - Smart Contracts
  - Permission Controls
  - Aragon Framework
   - ERC-20 Token
  - Token Transparency
tags: [Tech, Solidity, Smart Contracts, Security, Audits]
image: static/img/RD_social_card.png
slug: /audits
last_update:
  date: 05/29/2025
  author: Triple Tres
---


# AUDIT REPORT — RetailDAO Token
## $RETAIL - Minting and Permission Control

**Contract Audited**: GovernanceERC20.sol [Contract]  
**Blockchain**: Base Mainnet  
**Scope**: Mint permission control, DAO authorization model, ownership renouncement  
**Date**: April 30, 2025

## 1. Findings Summary

**Risk ID**: FND-001  
**Severity**: Critical  
**Description**: Token is mintable by any address with MINT_PERMISSION_ID via DAO authorization.

**R_ID**: FND-002  
**Severity**: High  
**Description**: Ownership cannot be renounced using a standard Ownable pattern, permissions are DAO-controlled.

**R_ID**: FND-003  
**Severity**: Informational  
**Description**: Contract auto-delegates votes on mint/transfer, but no override function is exposed.

## 2. Detailed Findings

### FND-001 – Mint Function Permission is Active
The contract exposes a `mint(address,uint256)` function gated by: `auth(MINT_PERMISSION_ID)`.  
This is enforced through Aragon's DAO-based permission system `DaoAuthorizableUpgradeable`.

Any address granted `MINT_PERMISSION_ID` via DAO has full mint power.

This is flagged by token scanner Dexscreener as a centralization risk, because of the detection of the `mint_` function in the contract.

**Proof**:

```solidity
function mint(address to, uint256 amount) external override auth(MINT_PERMISSION_ID) [GovernanceERC20.sol, code line #106-107]
```
This is the mint function with an external override authorization by MINT_PERMISSION_ID. Later in the contract, it states that this mint_ function is created and called for the first time when tokens are minted and just for “once”, but the mint function remains active.

Token is technically secure, as the DAO’s “ownership” is decentralized, but trust is delegated to DAO governance, not cryptographic immutability. Because as DAO with “Full Control” theoretically we can Assign/Revoke permissions as an entity not as an individual, then “ownership” is decentralized, but not “renounced”, unless the DAO is made immutable.

## FND-002 – Cannot Renounce Ownership

Contract does not implement Ownable or renounceOwnership() standard pattern like for a “Common” Token, as $RETAIL is a DAO token it uses DAOAuthorizableUpgradable permission system.

The dao() address can revoke/grant permissions at any time unless made immutable.
If the DAO is compromised, mint rights could be restored. That’s why Dexscreener, shows “not renounced ownership” of the token, and because of the nature of Aragon’s UI DAO/Token set up process, it “hides” as a temporary/memory string, the Owner Addresses (DAO Contributors), enabling quick intelligence audits to identify that behavior as “Hidden Owner”.

## Mitigation:

Revoke MINT_PERMISSION_ID from all addresses via DAO vote. We need to create an urgent proposal to revoke mint permissions and enhance transparency with full documentation of the process.

Optionally, partially freeze DAO governance for immutable control. Meaning that we can revoke MINT_PERMISSION_ID from all addresses, (DAO, Multisig, Executors), revoke UPGRADE_PERMISSION, to avoid unexpected proxy/logic updates. And finally revoke GRANT_PERMISSION_ID, ONLY for MINT_ and UPGRADE_ to prevent re-granting permissions to mint, if the DAO is compromised.

## FND-003 – Delegation is Auto-Enabled

'_afterTokenTransfer()' auto-delegates vote to the recipient, whether it is a contract or a custodial wallet for example.

```solidity
if (delegates(to) == address(0)) {
  _delegate(to, to);
}
```

No function to disable or override this behavior is exposed in the contract code.
Impact: Low. Improves user experience but may surprise integrators, like protocols, exchanges, wallets, etc. Auto-delegation makes $RETAIL token governance-ready out of the box, which is great for encouraging participation. However, without an override, it might potentially confuse or alienate some users/integrators, especially those unfamiliar with DAOs or those who want more control over delegation (delegate voting power to another active voting participant or delegate). In a potential future where users would like to interact with DeFi Protocols using $RETAIL token, when they transfer their tokens to a contract, Voting Power is effectively “locked” in that contract which is obviously unable to vote, or custodial wallets receiving tokens might inadvertently become DAO “Voters” which could conflict with our current voting operational model, at least diluting voting power, or skewing results if a custodial “malicious” wallet decides to vote any proposal.

## 3. Recommendations

1. Revoke MINT_PERMISSION_ID from all DAO-authorized addresses - in progress

2. Document DAO process for minting/granting rights - Needed

3. Consider DAO immutability for full decentralization - Optional

4. Publish minting policy in token metadata or docs - Best Practice

# 4. Conclusion

While the current DAO-controlled governance model offers flexibility and upgradeability, it introduces a centralized minting risk unless explicitly revoked. Usually right after token deploying any “ownership” should be renounced ASAP.
The usual recommendation is revoking all MINT_PERMISSION_ID rights -BEFORE- circulating the token publicly, that’s why it’s urgent to tackle this issue right now, if we continue to shill the project or $RETAIL token, there’s a considerable chance, where an educated eye may quickly identify this issues and signal $RETAIL token and/or RetailDAO as a “shady” “Unsafe” or unworthy of trust until this critical changes are done.

To address Dexscreener Redflags, we should send to Dexscreener contact or support team, the hashes of the transactions where the Mint permissions are revoked, (once we have done that) also the hash where GRANT_PERMISSION_ID is revoked for mint and upgrade, and the hash of the tx where we revoke the permissions to re-grant mint permissions, explaining our governance dynamics, the contract Aragon-tied structure, and also update the token’s metadata with a documentation of this processes. And due to the fact that Dexscreener doesn't automatically update the metadata of the token in its platform, we should pay for enhanced information for the token, adding the previous proof of Mint_ renounced, etc. and hopefully when the data is updated, the redflags should be gone by then.

If not, we face a major problem, as it would be needed a professional certified audit, to submit the final audit report to Dexscreener to enhance credibility and trust about our governance practices, and that service in the lowest spectrum ranges between $10,000 to $20,000 USD, depending on the complexity of the contract to audit.
And the final and most radical (and unlikely) option here is to re-deploy the token (with all the annoying complications it implies) with a fixed supply coded since the constructor of the contract, to avoid creating any undesirable suspicious mint_ function after or outside the main governance contract structure. Starting fresh with a re-deployed token would “erase” any undesirable or suspicious deployment behavior, enhancing trust and safety from the very beginning.

# Appendix

**MINT_PERMISSION_ID:**
'keccak256("MINT_PERMISSION") = 0xb737b436e6cc542520cb79ec04245c720c38eebfa56d9e2d99b043979db20e4c'

**Contract Name:**
'GovernanceERC20.sol'

**Contract/DAO Address:**
'0xcbFaabb2b87E858717a52216439276956dc1C9eC'
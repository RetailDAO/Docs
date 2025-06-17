---
id: voting mechanism
title: Voting Mechanism
hide_title: false
hide_table_of_contents: false
sidebar_label: Voting Mechanism
sidebar_position: 2
custom_edit_url: null
description: This is the Retail DAO Voting Mechanism.
keywords:
  - Retail DAO
  - Governance
  - Proposal Voting
  - Decentralized Governance
tags: [Governance, Voting Mechanism, Transaprency]
image: static/img/RD_social_card.png
slug: /voting_mechanism
last_update:
  date: 05/29/2025
  author: Triple Tres
---
# Voting Mechanisms

This section outlines the voting mechanisms for Retail DAO, including Discord polls, Snapshot proposals, Aragon DAO Governance (Treasury) proposals, and Aragon Token Mint proposals. All settings are initial configurations from the Genesis Proposal and are subject to change via appropriate proposals.

## Discord Polls (Off-Chain, 1 Member = 1 Vote)

- **Approval Requirements**:
  - **Minimum Participation**: 15 members for a valid outcome.
  - **Voting Duration**: 24 hours or 3 days, depending on the proposal’s impact or urgency.
  - **Approval Threshold**: >50% approval.
- **Other**:
  - Changes to the list of Discord usernames with Author or Admin access to Snapshot (for submitting proposals) require a Discord poll.
  - Changes to other Snapshot settings require approval through a Snapshot proposal.

## Snapshot Proposals (Token-Weighted, Off-Chain Voting)

- **Quorum**: 1,000,000 $RETAIL voting power.
- **Approval Threshold**: >60% approval.
- **Minimum Voting Duration**: 5 days.
- **Other**:
  - Proposals can only be published by approved Authors on Snapshot.
  - A list of Discord usernames with Author and/or Admin access to Snapshot is available in Discord.

## Aragon DAO Governance (Treasury) Proposals (Token-Weighted, On-Chain Voting)

This is the main DAO smart contract controlling Treasury spending. It cannot mint new $RETAIL tokens.

- **Approval Requirements**:
  - Periodic budget proposals by the Treasury Team do not require prior approval through Discord or Snapshot.
  - All other proposals require prior approval via a Discord poll.
  - **Quorum**: 1% of $RETAIL tokens.
  - **Approval Threshold**: >80% approval.
- **Other Settings**:
  - **Minimum Duration**: 7 days.
  - **Early Execution**: Disabled (proposals cannot be executed before the voting period ends, even if support and participation thresholds are met).
  - **Vote Change**: Enabled (voters can change their vote during the voting period).
  - **Token Balance Threshold**: 1 million $RETAIL to submit a proposal.

## Aragon Token Mint Proposals (Token-Weighted, On-Chain Voting)

:::info
This is the particular smart contracts that are going to be "_bricked_" with the new proposal so that the new token minting is permanently disabled.
:::

This separate smart contract is solely for minting $RETAIL tokens. It was used for the initial token mint, distributing tokens to the Aragon DAO Treasury and the Multisig Wallet. It has no other functions.

- **Quorum**: 5% of $RETAIL tokens.
- **Minimum Votes Required for Approval**: >90% approval.
- **Minimum Duration**: 30 days.
- **Token Balance Threshold**: 2 million $RETAIL to submit a proposal.

## Future Changes to Voting Mechanisms

- **Initial Configurations**: All settings are based on the Genesis Proposal and are subject to change.
- **On-Chain Changes**: Modifications to Aragon settings require on-chain proposals and are executed automatically upon approval.
- **Off-Chain Changes**: Modifications to Snapshot or Discord settings require approval through appropriate proposals (Snapshot for Snapshot settings, Discord polls for Discord settings) and are implemented manually by authorized DAO members.

## Voting Mechanisms Flowchart

Below is a flowchart illustrating the voting mechanisms and their processes:
:::note
the Token Mint function will be completely revoked to ensure token fixed supply and immutability. Check [Bricking_OG_DAO](docs/Token_Ecosystem/bricking_OG_DAO.md) for more details.
:::

```mermaid
graph TD
    A["Proposal Idea"] --> B{"Proposal Type?"}
    B -->|Discord Poll| C["Create Discord Poll"]
    B -->|Snapshot| D{"Approved Author?"}
    B -->|Aragon Treasury| E{"Requires Discord Poll?"}
    B -->|Aragon Token Mint| F{"≥2M $RETAIL?"}
    C --> G{"Min. 15 Participants?"}
    G -->|Yes| H{"≥50% Approval?"}
    G -->|No| I["Poll Fails"]
    H -->|Yes| J["Poll Passes"]
    H -->|No| I
    D -->|Yes| K["Publish on Snapshot"]
    D -->|No| L["Request Author Access"]
    K --> M{"≥1M $RETAIL Quorum?"}
    M -->|Yes| N{"≥60% Approval?"}
    M -->|No| O["Snapshot Fails"]
    N -->|Yes| P["Snapshot Passes"]
    N -->|No| O
    E -->|No, Treasury Budget| Q["Submit to Aragon"]
    E -->|Yes| C
    F -->|Yes| R["Submit to Aragon Mint Contract"]
    F -->|No| S["Request Token Holder ≥2M $RETAIL"]
    S -->|Yes| R
    J -->|Poll Proposal Only| JD["Execute Discord Proposal"]
    J -->|For Aragon| F2{"≥1M $RETAIL?"}
    F2 -->|Yes| Q
    F2 -->|No| S2["Request Token Holder ≥1M $RETAIL"]
    S2 -->|Yes| Q
    Q --> T{"≥1% Quorum?"}
    T -->|Yes| U{"≥80% Approval?"}
    T -->|No| V["Aragon Fails"]
    U -->|Yes| W["Execute Proposal"]
    U -->|No| V
    R --> X{"≥5% Quorum?"}
    X -->|Yes| Y{"≥90% Approval?"}
    X -->|No| Z["Mint Fails"]
    Y -->|Yes| AA["Mint Tokens"]
    Y -->|No| Z
    P -->|Spending Proposal| AB{"Check Multisig Wallet Funds"}
    P -->|Governance Only| PD["Execute Snapshot Proposal"]
    AB -->|Sufficient| AC["Execute via Multisig"]
    AB -->|Insufficient| Q
    ```
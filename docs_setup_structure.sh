#!/bin/bash

# Replace /path/to/Docs with the actual path to your Docs repository
cd /home/tripl3tr3s/Retail_DAO_Org/Docs

# Create main section folders
mkdir Introduction
mkdir DAO_Purpose_and_Goals
mkdir Community_and_Communication
mkdir Token_Ecosystem
mkdir Governance
mkdir Gamification_and_Incentivization
mkdir Onboarding_and_Participation
mkdir Treasury_and_Budget_Management
mkdir Legal_and_Disclaimers
mkdir FAQs
mkdir Updates_and_Changelog

# Create README.md in each section folder with a descriptive title
for dir in Introduction DAO_Purpose_and_Goals Community_and_Communication Token_Ecosystem Governance Gamification_and_Incentivization Onboarding_and_Participation Treasury_and_Budget_Management Legal_and_Disclaimers FAQs Updates_and_Changelog; do
  echo "# ${dir//_/ }" > "$dir/README.md"
  echo "" >> "$dir/README.md"
  echo "This is the introduction to the ${dir//_/ } section." >> "$dir/README.md"
done

# Create subpages for each section
# 1. Introduction
touch Introduction/Overview.md
touch Introduction/Target_Audience.md
touch Introduction/Key_Principles.md

# 2. DAO Purpose & Goals
touch DAO_Purpose_and_Goals/Mission_Statement.md
touch DAO_Purpose_and_Goals/Core_Objectives.md
touch DAO_Purpose_and_Goals/Value_Proposition.md

# 3. Community & Communication
touch Community_and_Communication/Discord_Server_Overview.md
touch Community_and_Communication/Discord_Roles_and_Membership_Tiers.md
touch Community_and_Communication/Channel_Structure.md
touch Community_and_Communication/Paragraph_Integration.md

# 4. Token Ecosystem
touch Token_Ecosystem/Token_Overview.md
touch Token_Ecosystem/Token_Utility.md
touch Token_Ecosystem/Token_Distribution.md
touch Token_Ecosystem/Membership_Tiers.md

# 5. Governance
touch Governance/Governance_Structure.md
touch Governance/Proposal_Lifecycle.md
touch Governance/Voting_Mechanisms.md
touch Governance/Multisig_Wallet_Governance.md

# 6. Gamification & Incentivization
touch Gamification_and_Incentivization/XP_Leveling_System.md
touch Gamification_and_Incentivization/Bonus_XP_for_Quality_Contributions.md

# 7. Onboarding & Participation
touch Onboarding_and_Participation/How_to_Join.md
touch Onboarding_and_Participation/Wallet_Address_Collection.md
touch Onboarding_and_Participation/Reward_Eligibility.md

# 8. Treasury & Budget Management
touch Treasury_and_Budget_Management/Treasury_Overview.md
touch Treasury_and_Budget_Management/Budget_Proposals.md
touch Treasury_and_Budget_Management/Vesting_Schedule.md

# 9. Legal & Disclaimers
touch Legal_and_Disclaimers/Disclaimer_Section.md
touch Legal_and_Disclaimers/Risk_Warnings.md

# 10. FAQs
touch FAQs/Common_Questions_Answered.md

# 11. Updates & Changelog
touch Updates_and_Changelog/Recent_Changes.md
touch Updates_and_Changelog/Proposal_History.md

# Create SUMMARY.md for GitBook navigation
cat > SUMMARY.md <<EOL
# Summary

* [Home](README.md)
* [Introduction](Introduction/README.md)
  * [Overview](Introduction/Overview.md)
  * [Target Audience](Introduction/Target_Audience.md)
  * [Key Principles](Introduction/Key_Principles.md)
* [DAO Purpose & Goals](DAO_Purpose_and_Goals/README.md)
  * [Mission Statement](DAO_Purpose_and_Goals/Mission_Statement.md)
  * [Core Objectives](DAO_Purpose_and_Goals/Core_Objectives.md)
  * [Value Proposition](DAO_Purpose_and_Goals/Value_Proposition.md)
* [Community & Communication](Community_and_Communication/README.md)
  * [Discord Server Overview](Community_and_Communication/Discord_Server_Overview.md)
  * [Discord Roles & Membership Tiers](Community_and_Communication/Discord_Roles_and_Membership_Tiers.md)
  * [Channel Structure](Community_and_Communication/Channel_Structure.md)
  * [Paragraph Integration](Community_and_Communication/Paragraph_Integration.md)
* [Token Ecosystem](Token_Ecosystem/README.md)
  * [Token Overview](Token_Ecosystem/Token_Overview.md)
  * [Token Utility](Token_Ecosystem/Token_Utility.md)
  * [Token Distribution](Token_Ecosystem/Token_Distribution.md)
  * [Membership Tiers](Token_Ecosystem/Membership_Tiers.md)
* [Governance](Governance/README.md)
  * [Governance Structure](Governance/Governance_Structure.md)
  * [Proposal Lifecycle](Governance/Proposal_Lifecycle.md)
  * [Voting Mechanisms](Governance/Voting_Mechanisms.md)
  * [Multisig Wallet Governance](Governance/Multisig_Wallet_Governance.md)
* [Gamification & Incentivization](Gamification_and_Incentivization/README.md)
  * [XP Leveling System](Gamification_and_Incentivization/XP_Leveling_System.md)
  * [Bonus XP for Quality Contributions](Gamification_and_Incentivization/Bonus_XP_for_Quality_Contributions.md)
* [Onboarding & Participation](Onboarding_and_Participation/README.md)
  * [How to Join](Onboarding_and_Participation/How_to_Join.md)
  * [Wallet Address Collection](Onboarding_and_Participation/Wallet_Address_Collection.md)
  * [Reward Eligibility](Onboarding_and_Participation/Reward_Eligibility.md)
* [Treasury & Budget Management](Treasury_and_Budget_Management/README.md)
  * [Treasury Overview](Treasury_and_Budget_Management/Treasury_Overview.md)
  * [Budget Proposals](Treasury_and_Budget_Management/Budget_Proposals.md)
  * [Vesting Schedule](Treasury_and_Budget_Management/Vesting_Schedule.md)
* [Legal & Disclaimers](Legal_and_Disclaimers/README.md)
  * [Disclaimer Section](Legal_and_Disclaimers/Disclaimer_Section.md)
  * [Risk Warnings](Legal_and_Disclaimers/Risk_Warnings.md)
* [FAQs](FAQs/README.md)
  * [Common Questions Answered](FAQs/Common_Questions_Answered.md)
* [Updates & Changelog](Updates_and_Changelog/README.md)
  * [Recent Changes](Updates_and_Changelog/Recent_Changes.md)
  * [Proposal History](Updates_and_Changelog/Proposal_History.md)
EOL

echo "New folder structure created. Please manually move content from old files to the new structure and update the README.md files as needed."
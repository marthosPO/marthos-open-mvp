# DAO Token Structure

This document will detail the token structure and distribution for the DAO.  

// 📄 docs/dao-token-structure.md
/*
# 🪙 MARTHOS DAO Tokenization & Smart Contract Architecture

This document outlines the proposed token structure and DAO smart contract system for the MARTHOS ecosystem.

---

## 🎯 Purpose
To enable contribution-based governance and reward system through token issuance, distribution logic, and DAO-compatible smart contracts.

---

## 🪙 Token Types (Multi-layered Structure)

| Token | Type | Use |
|--------|------|-----|
| MCNFT | ERC-721 (non-fungible) | Identity and contribution verification |
| MCT | ERC-20 (fungible) | Voting power, DAO staking, community rewards |

---

## 🔄 Token Generation Logic

### ERC-721 (MCNFT)
- Minted automatically upon valid contribution
- Tied to contribution metadata (type, date, score)
- Stored on Polygon (Mumbai → Mainnet)

### ERC-20 (MCT)
- Earned by holding MCNFTs + ongoing participation
- Airdropped monthly based on contribution activity
- Transferable (optional: DAO vote to enable/disable trading)

---

## 📦 Smart Contract Modules

### 1. **ContributionNFT.sol**
- Function: mintNFT(address to)
- Stores: tokenId, contributor address, metadata URI

### 2. **GovernanceToken.sol**
- Function: mint(address, amount), burn(), transfer()
- Controlled by DAO multisig or proposal execution logic

### 3. **ProposalManager.sol**
- Submit proposals
- Vote using MCT tokens
- Execute results if quorum + majority met

---

## 🔐 DAO Voting Architecture

1. MCT holders can vote on-chain
2. Vote weight = MCT balance + contribution score (optional boost)
3. Proposals stored permanently on-chain
4. Snapshot.org integration for off-chain lightweight proposals (optional)

---

## 🚀 Example Proposal Flow

1. Contributor proposes: “Add new AI validation module”
2. Proposal published via ProposalManager
3. Voting period (e.g., 5 days)
4. Results calculated
5. If passed → triggers GitHub PR label + dev notification
6. NFT reward minted to proposer

---

## 🧭 Roadmap

- Q2 2025: MCT/ERC-20 deployment to Mumbai Testnet
- Q3 2025: NFT & Token bridge to Mainnet
- Q4 2025: DAO governance contracts finalized and audited
- 2026+: Fully on-chain DAO with treasury control

---

Contact: marthos_po@naver.com
Website: https://sites.google.com/view/marthos/홈
*/

# Technical Details

This document will contain detailed information about the technical aspects of the project.

// 📄 docs/dev-flow-details.md
/*
# ⚙️ MARTHOS Open MVP – Developer Flow Documentation (EN)

This document outlines the development flow of the MARTHOS Open MVP project.
It helps contributors, maintainers, and developers quickly understand the structure and collaborate effectively.

---

## 1. Tech Stack Summary
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend API:** Node.js, FastAPI (planned)
- **AI Integration:** Python-based Transformer architecture (simulated for now)
- **Blockchain:** Solidity (Polygon Mumbai Testnet), Ethers.js
- **Data Storage:** IPFS planned / simulated currently

---

## 2. Page Routing Structure

```plaintext
[Home] → /index.tsx
        ↳ [Contribute] → /donate.tsx
                            ↳ POST /api/donate
        ↳ [Dashboard] → /dashboard.tsx
                            ↳ GET /api/dashboard
```

- `/donate` : Accepts contribution data description and file upload (upload currently disabled)
- `/dashboard` : Displays AI prediction score, NFT status, blockchain transaction hash with Chart.js visualization

---

## 3. API Routes

### `POST /api/donate`
- Input: `{ description: string }`
- Response: `{ message, aiScore: number }`

### `GET /api/dashboard`
- Response: `{ filename, aiScore, nftStatus, txHash }`

---

## 4. Blockchain Integration Flow
- Using Polygon Mumbai Testnet
- MetaMask connected / function calls via ethers.js
- Planned functions: recordPrediction(score), mintNFT(address)

---

## 5. Testing Flow Summary
1. User contributes data via `/donate`
2. Internal AI simulation returns a score (e.g., 0.87)
3. `/dashboard` displays score, NFT status, and Tx hash
4. Mumbai Testnet link shows blockchain transaction

---

## 6. Future Expansion
- File upload integration (Multer, Supabase, S3)
- Real AI model integration (Python → REST API)
- Contract deployment for testing → Mainnet migration plan
- Leaderboard + NFT viewer page for contributors
- DAO voting system via Snapshot integration

---

## 7. Run the Project (Local)
```bash
$ git clone https://github.com/marthosPO/marthos-open-mvp.git
$ cd marthos-open-mvp
$ npm install
$ npm run dev
```

---

Contact: marthos_po@naver.com / https://sites.google.com/view/marthos/홈
*/

# API Specifications (English)

This document will provide detailed API specifications for the MARTHOS Open MVP project.

// 📄 docs/API_SPEC_EN.md
/*
# 📡 MARTHOS API Specification (v0.1)

This document outlines the available APIs for the MARTHOS Open MVP.
All APIs are RESTful and follow JSON formatting.

---

## 📤 POST /api/donate
Submit a contribution (description only in MVP)

### Request Body
```json
{
  "description": "Soil sensor dataset from site 17-A"
}
```

### Response
```json
{
  "message": "Data submitted successfully",
  "aiScore": 0.87
}
```

---

## 📥 GET /api/dashboard
Returns contribution history for display in dashboard

### Response
```json
{
  "filename": "data_sample.csv",
  "aiScore": 0.87,
  "nftStatus": "Minted ✅",
  "txHash": "0xabc123...def456"
}
```

---

## 🔐 Security
- Current MVP does not require authentication (for test use)
- Future versions will use OAuth login + JWT tokens

---

Contact: marthos_po@naver.com  
Docs: https://github.com/marthosPO/marthos-open-mvp/tree/main/docs
*/

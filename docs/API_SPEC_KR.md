# API 명세 (KR)

// 📄 docs/API_SPEC_KR.md
/*
# 📡 MARTHOS API 명세서 (v0.1) – 한글 버전

이 문서는 MARTHOS Open MVP에서 제공하는 API의 기본 구조와 입출력 방식에 대한 한글 명세서입니다.

---

## ✅ 공통 사항
- 형식: REST API
- 데이터 형식: JSON
- 인증: MVP 단계에서는 인증 없이 사용 가능

---

## 📤 POST /api/donate
기여자 데이터 기부 제출 (설명 전송)

### 요청 형식 (Request Body)
```json
{
  "description": "스마트시티 17-A 구역의 토양 센서 데이터입니다."
}
```

### 응답 형식 (Response)
```json
{
  "message": "데이터가 성공적으로 제출되었습니다.",
  "aiScore": 0.87
}
```

- `description`: 사용자 설명 입력 (필수)
- `aiScore`: AI가 계산한 위험 예측 점수 (0.0 ~ 1.0)

---

## 📥 GET /api/dashboard
기여자 대시보드 내역 조회 (기여 이력, NFT 상태 포함)

### 응답 형식 (Response)
```json
{
  "filename": "data_sample.csv",
  "aiScore": 0.87,
  "nftStatus": "Minted ✅",
  "txHash": "0xabc123...def456"
}
```

- `filename`: 기여한 파일명 (샘플값)
- `aiScore`: 예측 점수
- `nftStatus`: NFT 발급 상태 표시
- `txHash`: Polygon Mumbai 테스트넷에 기록된 트랜잭션 해시

---

## 🔐 보안 및 인증 관련 (예정)
- 향후 OAuth2 또는 GitHub/Google 로그인 연동 예정
- JWT 토큰 기반 인증 구조 고려

---

📫 문의: marthos_po@naver.com  
📂 프로젝트: https://github.com/marthosPO/marthos-open-mvp
*/

# Data Flow Architecture
// 📄 docs/data-flow-architecture.md
/*
# 🔄 MARTHOS Open MVP – 데이터 흐름 아키텍처

이 문서는 MARTHOS Open MVP의 데이터 흐름 구조를 설명합니다. 사용자의 데이터 기여부터 예측, NFT 발급, 블록체인 기록까지의 전 과정을 순차적으로 정리하였습니다.

---

## 🧭 전체 흐름 요약

```plaintext
사용자 → /donate → /api/donate → AI 시뮬레이션 → 예측 점수 반환 → /dashboard
        ↘ Polygon Mumbai 기록 ↘ NFT 상태 표시 ↘ 기여 내역 확인
```

---

## 📥 데이터 기여 흐름

1. 사용자가 `/donate` 페이지에서 텍스트 설명 입력 (파일 업로드 예정)
2. 프론트에서 `POST /api/donate` 호출
3. 백엔드에서 설명 수신 → 임의의 AI 예측 점수 반환

---

## 🤖 AI 예측 처리 흐름

- 현재는 시뮬레이션 기반 (`0.87` 고정 반환)
- 향후 REST API 기반으로 Python 모델과 연동 예정
- 위험 점수 기반으로 NFT 민팅 조건/가중치 조정 가능

---

## ⛓ 블록체인 기록 흐름

1. 예측 점수가 반환되면 → 조건에 따라 `recordPrediction()` 호출
2. Polygon Mumbai Testnet 상에 트랜잭션 발생
3. 트랜잭션 해시 `/dashboard`에서 표시

---

## 🎖 NFT 민팅 흐름

- 스마트컨트랙트: `ContributionNFT.sol`
- 함수: `mint(address)`
- 관리자는 기여자 지갑 주소로 NFT 발급
- NFT는 기여 내역 + 점수 메타데이터를 포함 가능

---

## 📊 대시보드 조회 흐름

- `/dashboard` 진입 시 `GET /api/dashboard` 호출
- 서버에서 파일명, 점수, NFT 상태, 트랜잭션 해시 반환
- 차트 시각화 (Chart.js) + Mumbai Polygonscan 링크 제공

---

## 🔐 보안 및 인증 (예정)
- MVP에서는 인증 없음
- 정식 릴리스 시 OAuth 로그인 + JWT 기반 보안 구조 도입 예정

---

문의: marthos_po@naver.com  
사이트: https://sites.google.com/view/marthos/홈
*/

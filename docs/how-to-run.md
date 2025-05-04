# 🧪 How to Run the MARTHOS Open MVP

Welcome to the MARTHOS open MVP project!  
This guide explains how to run the backend server using **Python** or **Docker**, whether you're contributing or just exploring.

---

## 📌 Prerequisites

Before you begin, make sure you have:

- Python 3.8 or higher
- Git
- Docker (optional)
- Internet connection (to install dependencies)

---

## 🐍 Option 1: Run Locally with Python

### ✅ Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/marthosPO/marthos-open-mvp.git
cd marthos-open-mvp

# 2. Install dependencies
pip install -r requirements.txt

# 3. Run the development server
uvicorn app.main:app --reload
📍 앱 방문
브라우저를 열고 http://localhost:8000 로 이동합니다.

에서 FastAPI 기본 문서를 볼 수 있습니다./docs

🐳 옵션 2: Docker로 실행
🛠️ 구축 및 실행
bash
복사
편집
# Build Docker image
docker build -t marthos-open-mvp .

# Run container
docker run -d -p 8000:8000 marthos-open-mvp
방문 : http://localhost:8000

🧾 환경 참고 사항
Python 런타임: (Dockerfile에서 사용됨)3.9-slim

주요 진입점: app/main.py

API 루트: /

Swagger 문서 : /docs

Redoc 문서: /redoc

🤝 기여 노트
이 프로젝트는 기여를 환영합니다!
GitHub에서 문제를 해결하는 경우 포크 → 변경 → PR을 제출하세요.

도움이 필요하면 댓글에 자유롭게 태그를 지정하세요.@marthos1

🧩 개봉박두
 Docker Compose 지원

 프론트엔드 통합

 GitHub 작업 CI/CD

즐거운 해킹 되세요! 🚀
❤️ MARTHOS 팀이 제작했습니다.

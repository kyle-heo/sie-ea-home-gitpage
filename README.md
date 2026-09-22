# (주)SIE - 공식 홈페이지 (GitHub Pages 에디션)

이 프로젝트는 **(주)SIE (SIE-EA)**의 공식 웹사이트를 **GitHub Pages** 정적 호스팅 환경에서 완벽히 실행할 수 있도록 최적화한 SPA(Single Page Application) 프로젝트입니다.

---

## 🌟 주요 특징 및 전환 사항

1. **GitHub Pages 100% 호환**
   - **경로 독립성**: Vite `base: './'` 설정 및 `$asset` 유틸리티를 통해 저장소 이름(예: `https://<username>.github.io/sie-ea-home-gitpage/`) 및 서브 경로에 상관없이 모든 정적 자원(이미지, 폰트, CSS)이 정상 로드됩니다.
   - **새로고침(F5) 404 방지**: 기본적으로 `createWebHashHistory`를 적용하여 정적 서버에서도 라우팅 새로고침 시 404 오류가 발생하지 않습니다. HTML5 History 모드를 원할 경우 `404.html` SPA 리디렉션 핸들러가 함께 제공됩니다.

2. **기존 프론트엔드 화면 100% 완벽 전환 (누락 0%)**
   - **회사소개 (About)**: 인사말(Greetings), 회사연혁(CompanyHistory), 조직도(Organization), 고객사(Clients), 오시는 길(Location / 카카오맵 연동)
   - **주요사업 (Business)**: Process Analyzer System, CEMS, Utility/Liquid Analyzer, Gas Analyzer, SWAS, Closed Loop Sample System
   - **취급제품 (Products)**: Analyzer Part, Instrument Part, Electrical Part, HVAC, Fire Extinguisher
   - **자료실 (Resources)**: 사업실적(BusinessPerformance), 카탈로그(Catalog), 인증서(Certificate)
   - **고객지원 (Customer Support)**: 공지사항(Notices), 온라인 문의(Inquiry), 관리자(Admin)
   - **디자인/UI**: Creative Tim Paper Kit 2 테마, Bootstrap 5, Nucleo Icons 완벽 호환

3. **백엔드 기능 최소화 (Minimal Backend)**
   - 기존 Spring Boot 백엔드 의존성을 제거하고, GitHub Pages 정적 환경에서도 동작하도록 경량화했습니다:
     - **정적 Mock API (`public/api/`)**: `status.json`, `notices.json`을 통해 서버 상태 및 공지사항 데이터를 즉시 제공합니다.
     - **클라이언트 스토리지 폴백 (`src/api/index.js`)**: 온라인 문의 시 브라우저 LocalStorage에 안전하게 저장되며, 관리자 화면(`Admin.vue`)에서 접수된 문의 목록을 실시간으로 확인하고 관리할 수 있습니다.
     - **초경량 독립형 Node.js 백엔드 (`server/server.js`)**: 별도 백엔드 서버가 필요한 경우 Node.js 내장 모듈만으로 동작하는 경량 HTTP 서버를 `npm run server`로 언제든지 실행할 수 있습니다.

---

## 🛠 기술 스택

- **Frontend**: Vue 3 (`<script setup>`), Vite 6, Vue Router 4
- **UI & Styles**: Paper Kit 2, Bootstrap 5, Sass, Font Awesome
- **Maps**: vue3-kakao-maps (카카오 지도 API)
- **Deployment**: GitHub Pages, GitHub Actions (`.github/workflows/deploy.yml`), gh-pages
- **Minimal Server**: Node.js 내장 http 모듈 (`server/server.js`)

---

## 🚀 빠른 시작 (Local Development)

### 1. 패키지 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173` 으로 접속합니다.

### 3. (선택사항) 최소형 백엔드 서버 실행
```bash
npm run server
```
포트 8080에서 가벼운 Node.js API 서버(`http://localhost:8080/api/status`)가 기동됩니다.

---

## 📦 프로덕션 빌드 및 GitHub Pages 배포

### 방법 1: GitHub Actions를 통한 자동 배포 (권장)
본 저장소를 GitHub에 Push하면 `.github/workflows/deploy.yml`이 자동으로 실행되어 빌드 및 GitHub Pages 배포를 완료합니다.

1. GitHub 저장소의 **Settings > Pages** 메뉴로 이동합니다.
2. **Build and deployment > Source** 항목을 **GitHub Actions**로 선택합니다.
3. `main` 브랜치에 코드를 `git push`하면 자동으로 배포가 시작됩니다.

### 방법 2: gh-pages CLI를 통한 수동 배포
```bash
# 1. 빌드
npm run build

# 2. gh-pages 브랜치로 배포
npm run deploy
```

---

## 📂 프로젝트 디렉토리 구조

```
sie-ea-home-gitpage/
├── .github/workflows/
│   └── deploy.yml            # GitHub Pages 자동 배포 액션
├── public/
│   ├── 404.html              # GitHub Pages SPA 404 리디렉션 스크립트
│   ├── api/                  # 정적 Mock API 데이터 (status.json, notices.json)
│   └── assets/               # Paper Kit 정적 리소스 (css, fonts, img, js)
├── server/
│   └── server.js             # 초경량 독립형 Node.js 백엔드 서버 (선택 사용)
├── src/
│   ├── api/                  # API 클라이언트 및 Mock/LocalStorage 서비스
│   ├── components/           # TheNavbar, TheFooter, PageHeader 등 공통 컴포넌트
│   ├── router/               # Vue Router 라우팅 (Hash / History 모드 지원)
│   ├── styles/               # SCSS 스타일시트
│   ├── utils/                # 에셋 경로 해석 유틸리티 ($asset)
│   ├── views/                # 서브 카테고리별 전체 화면 페이지
│   ├── App.vue               # 메인 레이아웃 컴포넌트
│   └── main.js               # 애플리케이션 진입점 및 플러그인 등록
├── .env                      # 개발 환경설정
├── .env.production           # 프로덕션/GitHub Pages 환경설정
├── index.html                # 메인 HTML 엔트리포인트
├── package.json
└── vite.config.js            # Vite 빌드 설정 (base 경로 지원)
```

---

## 🔑 환경 변수 안내

- `VITE_APP_TITLE`: 사이트 타이틀 (기본: `SIE EA`)
- `VITE_ROUTER_MODE`: 라우터 모드 (`hash` 또는 `history`, GitHub Pages는 `hash` 권장)
- `VITE_KAKAO_MAPS_API_KEY`: 카카오맵 JavaScript API 키
- `VITE_API_URL`: 외부 백엔드 API 주소 (비워둘 경우 정적 Mock API 및 LocalStorage 동작)

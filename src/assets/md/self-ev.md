# Self Evaluation

## 가이드
- - -
1. `*` (에스터리스크 문자)는 `와일드카드`의 뜻을 가집니다.<br />
example) 파일 경로에서의 와일드카드 : `public/*` &nbsp;&nbsp;public 이후의 모든폴더 및 파일을 포함합니다
2. `responsive web reDesign / Design`<br />
   reDesign : 다시 재작업한 반응형 디자인<br />
   Design : 기존에 존재하지 않았던 새로 추가한 반응형 디자인
3. `Design`, `Style`, `Text`<br />
   Design : change a huge style<br />
   Style : change a style<br />
   Text : change text
4. `총평`, `변경내역`, `최적화`, `기능(개발)`, `Package signature`<br />
   총평 : 각각의 작업들에서 내 스스로 판단하여 얼마나 리소스가 들었으며 언제부터 작업을 했는지 간단한 종합지표<br />
   변경내역 : 분기된 branch에서 merge될 때까지의 기간 중 변경된 라인 수와 파일의 종합적인 지표 (이미지 모듈 등 에셋 제외)<br />
   최적화 : 해당 작업들에서 내가 최적화 할 수 있는 부분들은 무엇이 있었으며 어떤 변화가 있었는지 종합적인 지표<br />
   기능(개발) : 각 기능들의 대략적인 설명 및 추가 변경된 요소의 종합적인 리스트<br />
   Package signature : 해당 작업을 진행하면서 사용한 패키지들의 서명목록
5. `활동내역`<br />
   아래에 기술된 작업들을 진행하면서 나에게 어떤 성취감이 있었는지 스스로 작성해보는 종합적인 지표

&nbsp;

## 0. 활동내역 (2021.09.06 ~)
ymd | user | comment | achievement
---:|:---:|:---|:---:
2021.09.06 ~ 2021.12.03 | RUI | cafe24 | ★☆☆☆☆
2021.09.12 ~ 2021.11.30 | RUI | Palace Admin | ★★★★☆
2021.09.24 ~ 2021.10.19 | RUI | Palace B2B | ★★★★☆
2021.11.03 ~ 2021.12.03 | RUI | Palace Frontend | ★★★★★

&nbsp;

## 1. cafe24
-----

### 총평
ymd | user | work | resources
---:|:---:|:---|:---
2021.09.06 ~  | RUI | 유지보수 | ★★☆☆☆
2021.09.10 ~  | RUI | 기능개발(변경) | ★★★☆☆
2021.09.10 ~  | RUI | 기능제거 | ★☆☆☆☆
2021.09.12 ~  | RUI | 사이드이펙트 처리 | ★★★★★

&nbsp;

### 변경내역
ymd | Modified line | Changed file
---:|:---|:---
2021.09.10 ~ 2021.09.15 | 730 line | 30 files
2021.09.15 ~ 2021.09.16 | 7 line | 1 files
2021.09.16 ~ 2021.09.17 | 410 line | 24 files
2021.09.17 ~ 2021.09.23 | 195 line | 14 files
2021.09.23 ~ 2021.09.24 | 391 line | 58 files
2021.09.24 ~ 2021.09.28 | 202 line | 10 files
2021.09.28 ~ 2021.09.29 | 148 line | 9 files
2021.09.29 ~ 2021.09.30 | 88 line | 2 files
2021.09.30 ~ 2021.10.22 | 705 line | 21 files
2021.09.22 ~ 2021.11.30 | 1453 line | 37 files
total | 3591 line | 101 files

&nbsp;

### 최적화
javascript 로드 시간 단축
  해당 지표는 개발자 도구를 활성화 하면 볼 수 있는 타임스탬프 입니다.<br />
  `2321.521ms -> 366.655ms` (2021-10-13 최초 측정) (2021-12-01 측정)

&nbsp;

### 유지보수
1. Header Component layout & responsive web reDesign
2. Group Buying Page layout & responsive web reDesign
   * Group Buying Page Time box addon
3. New Arrivals Page layout & responsive web reDesign
   * Error Effect Handling
   * Edit Header style
   * Edit Footer anchor style with responsive reDesign
4. New Brand Page layout & responsive web reDesign
   * Edit Footer anchor style
5. Pre-order Page layout & responsive web reDesign
   * Edit Header text & style
6. detail-des (상품 상세)
   * Edit Header Text
   * Product Code addon
7. detail-relation (관계 상품) layout & responsive web reDesign
8. product/list layout & responsive web reDesign
9. Gallery/list layout & responsive web reDesign
   * Edit layout (Huge) [Header, Footer, Detail, Contents]
10. Footer Component layout & responsive web reDesign
   * Edit design (Huge)
11. Login Page layout & responsive web reDesign
12. product/detail
   * Edit design (Huge)
14. shopinfo/about layout & responsive web reDesign
15. company, commercial_law layout & responsive web reDesign
   * Edit style & text
16. Wishlist layout & responsive web reDesign
17. Gallery/read layout & responsive web reDesign
18. Gallery **|** 31, buhee
19. apps/main/gallery
    * Edit design (Huge)
20. apps/main **|** new-arrivals, new-brand, gallery
    * Edit design
21. member **|** check_password, login, modify, passwd/*
    * Edit responsive web design
    * Edit password Page due to password policy change
22. order **|** basket, orderform, ec_orderform, search_board_list, traffic, agreement/*
    * Edit layout & responsive web reDesign (Huge)
23. Etc
   * Edit font-family
   * Edit sale-price calc
   * Edit typography ex) BUY NOW -> 今すぐ購入
   * Edit Landing page separator
   * Edit Navigation component list
   * Add favicon

&nbsp;

### 기능개발(변경)
1. Pre-order Page
   * Add sale-price
   * Add pre-order check regular expression
   * Add pre-order dynamic desc
2. Group Buying Page
   * Add sale-price
   * Add group buying check regular expression
3. Pre-order & Group Buying Page
   * Add sale-price
   * Add page check regular expression
   * Add page dynamic description
   * Add description trim & remove cafe24 tag and css
   * Add product detail messages (independent)
   * Add Timelist with Admin
   * Add End product of promotion
4. product/list Page sale-price addon
5. product/detail Page & product/relation & product/basketlist
   * Add sale-price
   * Add total-price calc
   * Add currency style
   * Add independent scrolling
   * Add trand
6. Login Page
   * Add placeholder into input area
7. Wishlist Page
   * Add sale-price
8. Slider arrow
   * Add slider arrow
9. Footer
   * Edit design (Huge)
10. Mobile sale-price percent
    * Add Find function by Xpath
    * Feature branching across mobile and web
11. Social Login Image
    * Add Social Login Image

&nbsp;

### 기능개발(어드민)
1. Timelist
2. Product-detail description

&nbsp;

### 사이드이펙트 처리
하기에 기술되어있는 개발 용어들은 미팅 시간에 같이 설명드리겠습니다.

1. sale-price
   * mobile iPhone 대응
   * cafe24 변수 네이밍 대응
   * 예외처리 추가
   * 표시되지 말아야 할 곳에서 표시되는 버그 대응
2. Slider arrow
   * 임의로 만든 arrow 버튼이기에 mobile 및 desktop에서 예기치 않은 문제가 발생하는데 해당 문제 대응
3. Trand
   * 임의로 덧붙인 trand 블록을 원하는 때에만 보여주기위해 작업하는 과정에서 예측할 수 없는 문제가 발생 해당문제에 대응
   * pre-order와 group buying을 구분할 수 있는 명확한 기준이 없음
   * 원하지 않는 곳에 trand가 표시되는 버그
   * 원하지 않을 때에 trand가 표시되는 버그
   * 원할 때에 trand가 표시되지 않는 버그
   * iPhone과 android 그리고 web에서의 표시가 다른 버그
4. sale-price percent
   * cafe24측에서 mobile일 경우에만 할인율을 제공하기에 web과 mobile환경을 각각 분기처리하는 과정에서 문제 발생 해당문제에 대응
   * iPhone과 android에서 표시되는 조건이 각각 다른 버그
5. CORS (교차 출처 리소스 공유) 문제
   * cafe24측에서 제공하는 모든 모듈 및 이미지는 CORS 정책이 지정되어있어 해당 오리진 외 다른곳에서 사용 시 사용 및 변경불가능한 문제
   * 우리가 직접 임의로 만들거나 서버를 개설(AWS Storage)하여 대응
6. 김보완(?)개발자가 설계해놓은 환경에서의 발생하는 문제
   * 김보완 개발자가 설계해놓은 Javascript 아키텍쳐에서는 1개의 문제가 발생하더라도 전체의 코드가 실행 중지되는 문제가 있다.
   * 이는 현재 cafe24에 설계해놓은 아키텍쳐 특성 상 바꿀 수 없으며, 예측할 수 없기에 언제 어디서 어떤문제가 일어날 지 알 수없다. (worst architecture)
   * 우리가 발견하는 cafe24 페이지의 대부분의 경우에 해당되며, 어떤 유지보수를 행했을 때 따라오는 사이드이펙트는 모두 이 설계의 자식들이다.
   * 이런 문제와 조우하지 않기 위해 palace는 에러 및 예외처리에 신중한 코드를 작성 중 입니다.
7. 비동기 처리 (Async / Await) 문제
   * 김보완 개발자가 작업해놓은 timelist의 작동방식은 Javascript의 동시성 실행을 전혀 고려하지 않고 있습니다.
   * 예를들면 시간이 나오지 않는 버그, 시간대신 NaN이라는 문구가 나오는 버그 등등
   * 6번의 특성상 해당 버그가 하나라도 일어나면 중간에 실행이 종료되기 때문에 뒤따라오는 모든 코드들은 실행되지 않습니다.
   * 해당문제를 처리하기 위해 그리고 더 나은 유지보수를 위해 어드민으로 변경가능한 상태로 만들었고, 비동기 처리를 진행하였습니다.

&nbsp;

## 2. Palace Admin
-----

### 총평
ymd | user | comment | resources
---:|:---:|:---|:---
2021.10.12 ~  | RUI | 기능개발 | ★★☆☆☆

&nbsp;

### 변경내역
ymd | Modified line | Changed file
---:|:---|:---
2021.10.12 ~ 2021.10.21 | 1650 line | 16 files
2021.10.21 ~ 2021.10.23 | 5398 line | 50 files
2021.10.23 ~ 2021.10.25 | 585 line | 29 files
2021.10.25 ~ 2021.10.28 | 1564 line | 45 files
2021.10.28 ~ 2021.11.02 | 968 line | 36 files
2021.11.02 ~ 2021.11.30 | 1200 line | 47 files
total | 10402 line | 80 files

### 기능개발
### 1. Initialize
1. `serverless.yml` (배포 설정)
2. `next.config.js` (Next js 설정)
3. `.env` (환경변수 설정)
4. `.gitignore` (git push 제한 파일 설정)
5. `tsconfig.json` (typescript 프로젝트 설정)

&nbsp;

### 2. Package signature
<details>
<summary><strong>Dependencies</strong></summary>

1. material-ui
2. emotion/react
3. mui/icons
4. axios
5. clsx
6. cross-env
7. date-fns
8. express-jwt
9. history
10. i
11. isomorphic-unfetch
12. jsonwebtoken
13. moment
14. mysql
15. next
16. next-cookies
17. nextjs-cors
18. numeral
19. react
20. react-cookies
21. react-dom
22. react-helmet
23. react-quill
24. react-router-dom
25. recoil
26. rxjs
27. serverless-mysql
28. yup

</details>

<details>
<summary><strong>Dev Dependencies</strong></summary>

1. @next/bundle-analyzer
2. @types/express-jwt
3. @types/jsonwebtoken
4. @types/numeral
5. @types/react
6. @types/react-cookies
7. @types/react-router-dom
8. @typescript-eslint/eslint-plugin
9. @typescript-eslint/parser
10. eslint
11. eslint-config-next
12. eslint-config-prettier
13. eslint-plugin-prettier
14. eslint-plugin-react
15. prettier
16. typescript

</details>

&nbsp;

### 3. 기능
1. Add Theme Provider (Admin 내 전역 테마설정 추가)
2. Sidebar 추가
3. DB 엔드포인트 연동 (`lingergallery-1-instance-1.ctiuek6lyrif.ap-northeast-3.rds.amazonaws.com`)
4. Timelist
   * Timelist Header, Table, Base layout 추가
   * Timelist API (CRUD)생성
   * DB 연결
   * Date picker 추가
5. CORS 설정
   * b2b.lingergallery.com
   * admin.lingergallery.com
   * www.lingergallery.com
6. Golbal Modal Component 추가
7. Recoil 추가
   * Add Global Modal & Snack bar Component controller
8. Authenticate
   * JWT 설정
   * Login services 생성 (Sign in, Sign out)
   * fetch-wrapper
   * api-handler
   * error-handler
   * jwt-middleware 추가
   * DB 연동
   * Verification 추가
   * axios에 의존성 주입 (token, ...)
9.  Types 설정

&nbsp;

## 3. Palace B2B
-----

### 총평
ymd | user | comment | resources
---:|:---:|:---|:---
2021.09.24 ~ 2021.10.19 | RUI | 기능개발 | ★★☆☆☆

&nbsp;

### 변경내역
ymd | Modified line | Changed file
---:|:---|:---
2021.09.24 ~ 2021.10.01 | 335 line | 13 files
2021.10.01 ~ 2021.10.05 | 487 line | 6 files
2021.10.05 ~ 2021.10.06 | 192 line | 6 files
2021.10.06 ~ 2021.10.07 | 226 line | 7 files
2021.10.07 ~ 2021.10.08 | 999 line | 38 files
2021.10.08 ~ 2021.10.09 | 748 line | 18 files
2021.10.09 ~ 2021.10.10 | 49 line | 5 files
2021.10.10 ~ 2021.10.12 | 162 line | 19 files
2021.10.12 ~ 2021.10.18 | 1397 line | 18 files
2021.10.18 ~ 2021.10.19 | 319 line | 8 files
total | 7214 line | 52 files

&nbsp;

### 기능개발
### 1. Initialize
1. `serverless.yml` (배포 설정)
2. `next.config.js` (Next js 설정)
3. `.env` (환경변수 설정)
4. `.gitignore` (git push 제한 파일 설정)
5. `tsconfig.json` (typescript 프로젝트 설정)
6. `.babelrc` (code 트랜스파일러 설정)

&nbsp;

### 2. Package signature
<details>
<summary><strong>Dependencies</strong></summary>

1. material-ui
2. emotion/react
3. slack/web-api
4. axios
5. clsx
6. history
7. i
8. isomorphic-unfetch
9. mysql
10. next
11. nextjs-cors
12. numeral
13. react
14. react-dom
15. react-helmet
16. react-router-dom
17. serverless-mysql
18. aws-sdk

</details>

<details>
<summary><strong>Dev Dependencies</strong></summary>

1. @next/bundle-analyzer
2. @types/react
3. eslint
4. eslint-config-next
5. prettier
6. typescript

</details>

&nbsp;

### 3. 기능
1. B2B Register Commit
   * DB 엔드포인트 연동
   * API 생성
   * Slack web-api 연동
   * Middleware 생성
   * CORS 설정
   * Context API 설정 (상태관리)
2. Babel
   * 코드 트랜스파일러 추가
3. File Handling
   * AWS S3 Upload / Delete 추가

&nbsp;

## 4. Palace Frontend
-----

### 총평
ymd | user | comment | resources
---:|:---:|:---|:---
2021.11.03 ~  | RUI | 기능 | ★★★★☆
2021.11.05 ~  | RUI | 퍼블리싱 | ★★★★★
2021.11.03 ~  | RUI | 테스트 | ★★★☆☆
2021.11.13 ~  | RUI | 최적화 | ★★★★☆

&nbsp;

### 릴리즈
ymd | Modified line | Changed file | version
---:|:---|:---|---
2021.11.03 ~ 2021.11.07 | 3905 line | 49 files | release@0.0.1-beta
2021.11.07 ~ 2021.12.01 | 6732 line | 119 files | release@0.0.2-beta

&nbsp;

### 변경내역
ymd | Modified line | Changed file
---:|:---|:---
2021.11.03 ~ 2021.11.04 | 3905 line | 32 files
2021.11.04 ~ 2021.11.05 | 292 line | 26 files
2021.11.05 ~ 2021.11.07 | 349 line | 11 files
2021.11.07 ~ 2021.11.09 | 360 line | 11 files
2021.11.09 ~ 2021.11.10 | 280 line | 9 files
2021.11.10 ~ 2021.11.16 | 1244 line | 7 files
2021.11.16 ~ 2021.11.19 | 495 line | 10 files
2021.11.19 ~ 2021.11.22 | 628 line | 18 files
2021.11.22 ~ 2021.11.23 | 642 line | 28 files
2021.11.23 ~ 2021.11.24 | 1794 line | 18 files
2021.11.24 ~ 2021.11.25 | 691 line | 23 files
2021.11.25 ~ 2021.11.30 | 671 line | 26 files
2021.11.30 ~ 2021.12.02 | 854 line | 39 files
total | 8491 line | 145 files

&nbsp;

### 최적화
Next js 특성상 next syntax -> react syntax(hydration)이 발생한다. 이 과정이 상당히 오래걸리며, 패키지가 추가될수록<br />
data fetching, rendering 등으로 인해 hydration 과정의 시간이 증가하게 된다.

최적화를 하기 전 hydration : 대략 4.2초 가량 소요된다는걸 확인할 수 있다.<br />
최적화 진행 후 hydration : 0.4초로 대폭 감소

&nbsp;

### 기능개발
### 1. Initialize
1. `serverless.yml` (배포 설정)
2. `next.config.js` (Next js 설정)
3. `.env` (환경변수 설정)
4. `.gitignore` (git push 제한 파일 설정)
5. `tsconfig.json` (typescript 프로젝트 설정)
6. `global.d.ts` (전역 type 선언)
7. `declarations.d.ts` (외부 모듈 type 선언)

&nbsp;

### 2. Package signature
<details>
<summary><strong>Dependencies</strong></summary>

1. material-ui
2. emotion/react
3. mui/icon
4. amazon-cognito-identity-js
5. express-jwt
6. framer
7. framer-motion
8. i18next
9. jsonwebtoken
10. slack/web-api
11. axios
12. clsx
13. history
14. i
15. isomorphic-unfetch
16. mysql
17. next
18. next-connect
19. next-i18next
20. nextjs-progressbar
21. nextjs-cors
22. numeral
23. react
24. react-dom
25. react-helmet
26. react-router-dom
27. react-slick
28. recoil
29. serverless-mysql
30. aws-sdk

</details>

<details>
<summary><strong>Dev Dependencies</strong></summary>

1. @next/bundle-analyzer
2. @types/react
3. @types/express-jwt
4. @types/node
5. @types/react-google-recaptcha
6. @types/react-slick
7. @typescript-eslint/eslint-plugin
8. @typescript-eslint/parser
9. eslint
10. eslint-config-next
11. prettier
12. typescript

</details>

&nbsp;

### 3-1. 기능 (non-api)
1. i18n `(127 lines)`
   * ja / en 지원
   * SSR 지원
2. Brand Exhibition `(211 lines)`
3. New Arrivals `(276 lines)`
4. Pre-order `(224 lines)`
5. Group buying `(127 lines)`
6. Gallery `(305 lines)`
7. Gallery contents
8. Login `(196 lines)`
9. Register `(583 lines)`
10. Carousel
    * Auto play
    * Increasement indicator
11. Motion Image `(45 lines)`
    * 이미지 로드 될 경우 fade 효과 추가
12. ReCaptcha `(23 lines)`
    * Google reCaptcha 적용
13. Loading Animation `(108 lines)`
14. Snack Bar `(47 lines)`
    * 웹에서 발생하는 이벤트나 알림메세지 등을 표시해주는 snack bar 추가
15. App Layout, Footer, Header `(253 lines)`
    * 전체적인 layout 추가
16. Shape (Circle, Triangle, ...) `(42 lines)`
    * 재사용이 가능한 도형 component 추가
17. Helpers
    * error handler `(21 lines)`
    * fetcher `(23 lines)`
    * fetch wrapper `(15 lines)`
    * scale `(50 lines)`
    * suspenser `(25 lines)`
18. DB `(26 lines)`
19. Models (types)
    * Instagram `(9 lines)`
    * Landing `(25 lines)`
20. Authenticate `(230 lines)`
21. Global Themes `(1512 lines)`
22. Banner Slide `(209 lines)`

&nbsp;

### 3-2. API

&nbsp;**Authorization**

- - -

&nbsp;&nbsp;인증방식 추가 JWT(Json Web Token)

Authorization Example

```
Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==
```

&nbsp;

&nbsp;**Linger gallery frontend Default Request Header**

- - -

Request Example

```HTTP
GET /user/anonymous_key HTTP/1.1
Host: http://staging.lingergallery.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)
Authorization: Bearer QWxhZGRpbjpvcGVuIHNlc2FtZQ==
Accept: application/json
Content-Type: application/json
```

&nbsp;

&nbsp;**Allowed Method**

- - -

**“GET” | “POST” | “PUT” | “DELETE” | “PATCH”**

&nbsp;

&nbsp;**Specified API**

- - -

1. GET `localhost:8080/api/brand-exhibition`
2. GET `localhost:8080/api/gallery-banner`
3. GET `localhost:8080/api/gallery-contents`
4. GET `localhost:8080/api/new-arrivals`
5. PATCH `localhost:8080/api/instagram`
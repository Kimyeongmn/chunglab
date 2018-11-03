# Chunglab homepage

이 프로젝트는 [hexo](https://hexo.io/ko/index.html)의 [corporate theme](https://github.com/ptsteadman/hexo-theme-corporate)를 기반으로 제작되었음

## Menu 구성
* theme config 파일(themes/chunglab/_config.yml)의 menu에서 수정

## Home

* themes/chunglab/layout/index.ejs 파일 참고

### 배너 이미지 추가/변경
* theme config의 banners 수정 or 추가

### news 추가/변경
* theme config의 news 수정 or 추가

### sponsor 추가/변경
* theme config의 sponsors 수정 or 추가

## Research

* source/research/index.ejs 파일 참고

## People

* themes/chunglab/layout/people.ejs 파일 참고

### info title & body 수정
* theme config의 about, description 수정

### 사진 편집
* theme config의 photos 수정 or 추가

### People 편집
* theme config의 people 수정 or 추가

## Achievements

### Achievement(Publication, Patent, Presentation) 추가

* source/_post/ 폴더에 yyyymmdd.md 파일 추가
  * md파일에 category에 publication, patent, presentation 명시

* md파일은 기본적으로 [markdown syntax](https://guides.github.com/features/mastering-markdown/)를 따름

* markdown editor를 사용하면 편리

  * Window: [mardown editor](https://www.sitepoint.com/best-markdown-editors-windows/)

  * MacOS: [macdown 설치](https://macdown.uranusjr.com/)


## Openings
* source/openings/index.ejs 파일 참고

## Contact
* 구글 지도의 api key 변경시 theme config의 google_api_key 수정
* contact의 mailing address, professor, group admin은 theme config professor, group_admin, address_1, address_2, address_3 에 명시되어 있음

# Development

1. github에서 source 가져오기:
`git clone https://github.com/jsyoo/chunglab.git`

1. source 폴더 이동:
`cd chunglab`

1. package 설치:
`npm install`

1. 로컬 서버 시작:
`hexo start`

1. 브라우저에 http://localhost:4000 접속

# Deployment

1. local computer에 aws credential 등록

1. `hexo deploy`

# FAQ

Q. s3 배포시 ERROR Non-file stream objects are not supported with SigV4 in AWS.S3 발생시 해결 방법

A. https://opensiebel.com/2018/05/24/hexo-depoly-s3/

Q. 변경한 소스 및 config가 반영이 되지 않을 때

A. `hexo clean`, `hexo generate`을 실행해 build를 다시 한다
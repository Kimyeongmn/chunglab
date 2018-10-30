# Chunglab homepage

[hexo](https://hexo.io/ko/index.html)

## Menu
* themes/chunglab/_config.yml파일 menu에서 수정

## Achivements 추가
* source/_post/ 폴더에 yyyymmdd.md 파일 추가

* md파일은 기본적으로 [markdown syntax](https://guides.github.com/features/mastering-markdown/)를 따름

* markdown editor를 사용하면 편리

  * Window: [mardown editor](https://www.sitepoint.com/best-markdown-editors-windows/)

  * MacOS: [macdown 설치](https://macdown.uranusjr.com/)

# Development

1. github에서 source 가져오기:
`git clone`

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

# Problem

s3 배포시 ERROR Non-file stream objects are not supported with SigV4 in AWS.S3 발생시 해결 방법
  - https://opensiebel.com/2018/05/24/hexo-depoly-s3/

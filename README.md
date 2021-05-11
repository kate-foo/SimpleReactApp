## 프론트엔드 애플리케이션 구조

스프링부트를 백엔드 REST API서버로, 리액트 애플리케이션을 프론트엔드로 하는 간단한 게시판 프로젝트입니다. 

* 백엔드(스프링 부트) 서버에서 프론트엔드(리액트) 리소스 제공  
  프론트엔드 애플리케이션을 스프링 부트의 정적 리소스 위치에 복사하여 하나의 서버에서 백엔드와 프론트엔드 애플리케이션을 
  실행합니다. Gradle Node.js 플러그인을 이용하여 같이 빌드합니다.  

  
* 백엔드 애플리케이션  
  스프링부트를 기반으로 다음과 같은 기술들이 사용되었습니다.
  - Spring Security OAuth2
  - JWT  
  - JPA (데이터베이스는 MySQL)  
  
  
* 프론트엔드 애플리케이션  
  react.js를 기반으로 프론트엔드 애플리케이션이 작성되어 있습니다. 사용된 주요 라이브러리들은 다음과 같습니다.
  
  - react-redux
  - redux-saga
  - axios
  - react-router-dom
  - ag-grid-react
  - ckeditor5-react
  - styled-components
  - react-js-pagination
  - react-loader-spinner  
  

* 프론트엔드의 라우터와 백엔드의 요청 URL 분리  

  

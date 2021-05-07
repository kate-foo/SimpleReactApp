//CDN 을 사용하지 않고 로컬에 다운로드한 에디터를 사용하기로 한다.
//export const EDITOR_URL = 'http://localhost:3000/ckeditor/ckeditor.js';
export const EDITOR_URL = `${process.env.REACT_APP_URL}/ckeditor/ckeditor.js`;

//한 페이지당 표시되는 게시물 수
export const RECORD_COUNT_PER_PAGE = 10;

//하단에 표시되는 내비게이션의 페이지 수
export const PAGE_LIST_SIZE = 5;


// 벡엔드 서버에 프론트엔드 정적 리소스를 배치할 것이므로 동일한 URL(localhost:8080) 을 가지게 되지만
// 프론트엔드 개발 중에는 localhost:3000 에서 실행될 것이므로 백엔드 서버를 설정하기로 한다.
// TODO 빌드할 때는 ""으로 설정해야 함!
export const DEV_API_HOST_URL = "http://localhost:8080";

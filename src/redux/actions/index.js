// 액션 타입
//조회
export const GET_LIST = "GET_LIST";
export const GET_LIST_OK = "GET_LIST_OK";

//저장
export const SAVE_POST = "SAVE_POST";
export const SAVE_POST_OK = "SAVE_POST_OK";

//읽기
export const READ_POST = "READ_POST";
export const READ_POST_OK = "READ_POST_OK";

//삭제
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_OK = "DELETE_POST_OK";

//수정
export const MODIFY_POST = "MODIFY_POST";

//인증성공
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";


// 액션 생성 함수
export const getList = (params) => ({type: GET_LIST, payload: params});
export const getListOk = (response) => ({type: GET_LIST_OK, response});

export const savePost = (params) => ({type: SAVE_POST, payload: params});
export const savePostOk = (response) => ({type: SAVE_POST_OK, response});

export const getRead = (params) => ({type: READ_POST, payload: params});
export const getReadOk = (response) => ({type: READ_POST_OK, response});

export const deletePost = (params) => ({type: DELETE_POST, payload: params});
export const deletePostOk = (response) => ({type: DELETE_POST_OK, response});

export const modifyPost = (params) => ({type: MODIFY_POST, payload: params});
//수정 후에는 SAVE_POST_OK 를 디스패치하기로 한다.


export const signInSuccess = (params) => ({type: SIGN_IN_SUCCESS, payload: params});

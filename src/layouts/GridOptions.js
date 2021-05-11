// AG-GRID
// https://www.ag-grid.com/

// TIMESTAMP 타입을 일자와 시간 형식으로 변환
const DateFormatter = (params) => {
    let s = '-';
    if (params.data !== undefined) {
        const d = new Date(params.data.updDt).toLocaleDateString();
        const t = new Date(params.data.updDt).toLocaleTimeString();
        s = d + t;
    }
    return s;
}

// 기본형 게시판 컬럼
const gridBoardOptions1 = {
    columnDefs: [
        {headerName: "번호",  width: 100,  field: "cnttId"},
        {headerName: "제목",  width: 700, field: "cnttTitle", cellStyle: {textAlign: "left", cursor: "pointer"}},
        {headerName: "작성자", width: 200, field: "authorId"},
        {headerName: "작성일시", width: 200, field: "updDt", valueFormatter: DateFormatter },
        {headerName: "조회수", width: 100, field: "cnttHit", type: "numericColumn"}
    ],
    defaultColDef:{sortable:true, resizable: true},
    rowData: [],
    rowSelection: 'single',
    
}



// 컬럼 레이아웃이 다른 게시판이 있는 경우는 해당 게시판 맞게 새로운 그리드 옵션을 정의
/*
const gridBoardOptions2 = {

}
*/

const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
    
}

// const onRowClicked = (params) => {
//     const data = params.api.getSelectedNodes()[0].data;
//     console.log(data);
// }

// const onRowDoubleClicked = (params) => {
//     const data = params.api.getSelectedNodes()[0].data;
//     console.log(data);
// }

export {
    gridBoardOptions1,
    onGridReady,
    //onRowClicked,
    //onRowDoubleClicked
};

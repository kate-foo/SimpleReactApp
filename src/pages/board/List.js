import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux"
import {BaseText, gridBoard1Options, onGridReady, onRowClicked} from "../../layouts";
import { getList, getRead }from "../../redux/actions";
import { RECORD_COUNT_PER_PAGE, PAGE_LIST_SIZE } from "../../utils/ConstUtils";
import PageNavi from "../Pagination";
import { isEmpty } from "lodash";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../../css/bootstrap/css/bootstrap.min.css";

const List = ({history}) => {
    
    const response = useSelector((state) => state.response);
    const dispatch = useDispatch();
    
    const [rowData, setRowData] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [activePage, setActivePage] = useState(1);
    
    useEffect(()=> {
        //최초 조회
        dispatch(getList({pageNo: 1, pageSize: RECORD_COUNT_PER_PAGE}));
        
    }, []);
    
    useEffect(() => {
        if (!isEmpty(response) && response.data !== undefined && response.data.list.length > 0) {
            setRowData(response.data.list);
            setTotalCount(response.data.totalCount);
        }
    }, [response]);
    
    const handlePageNavi = (pageNo) => {
        dispatch(getList({pageNo, pageSize: RECORD_COUNT_PER_PAGE}));
        setActivePage(pageNo);
    }
    
    const handleSearch = () => {
    
    }
    
    const handleCreate = () => {
        history.push('/app/write');
    }
    
    const onRowClicked = (params) => {
        const data = params.api.getSelectedNodes()[0].data;
        //console.log(data);
        dispatch(getRead(data.cnttId));
    }
    
    return (
        
        <div className="ag-theme-alpine" style={{ width: '100%', height: '472px'}}>
            <div style={{textAlign: "left"}}>
                <BaseText>Total {totalCount}</BaseText>
            </div>
            <AgGridReact rowData={rowData}
                         gridOptions={gridBoard1Options}
                         onGridReady={onGridReady}
                         onRowClicked={onRowClicked} />
            <PageNavi activePage={activePage}
                        itemsCountPerPage={RECORD_COUNT_PER_PAGE}
                        totalItemsCount={totalCount}
                        pageRangeDisplayed={PAGE_LIST_SIZE}
                        onPageChange={handlePageNavi}
            />
            <form className="form-inline">
                <div className="form-group">
                    <input type="text" className="form-control" id="search" size={50}/>
                </div>
                {' '}
                <button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
                {' '}
                <button type="button" className="btn btn-success" onClick={handleCreate}>Create</button>
            </form>
        </div>
    
    )
}

export default List;



import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { savePost } from "../../redux/actions";
import { isEmpty } from "lodash";
import { editorConfiguration } from "../../layouts/EditorOptions";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import "../../css/bootstrap/css/bootstrap.min.css";


const BOARD_ID = "B01";

const Write = ({history}) => {
    
    const state = useSelector((state) => ({response: state.response, userId: state.userId}));
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    
    useEffect(()=>{
        // 저장 후 목록으로 이동
        if (!isEmpty(state.response) && state.response.data !== undefined && state.response.data.cnttId !== undefined) {
            history.push('/app/list');
        }
    }, [state.response]);
    
    
    const handleList = () => {
        history.push('/app/list');
    }
    
    const handleSave = () => {
        if (!isEmpty(title) && !isEmpty(content)) {
            dispatch(savePost({boardId: BOARD_ID, cnttTitle: title, cnttText: content, authorId: state.userId}));
        }
    }
    
    const handleEditorChange = (event, editor) => {
        setContent(editor.getData());
    }
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }
    
    // const editorConfiguration = {
    //     image: {
    //         styles: ['alignLeft', 'alignCenter', 'alignRight']
    //     },
    //
    //     toolbar: [ 'heading', 'bold', 'italic', 'fontsize', 'fontcolor', '|',
    //                'bulletedList', 'numberedList', 'blockquote', 'link', 'code', 'codeblock', '|',
    //                'imageupload', 'imagestyle:alignLeft', 'imagestyle:alignCenter', 'imagestyle:alignRight', '|',
    //                'undo', 'redo'],
    //
    //     simpleUpload: {
    //         uploadUrl: `${DEV_API_HOST_URL}/api/board/imageupload`,
    //     }
    // };
    
    return (
        <div style={{width: "100%"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{width: "60%", marginBottom: "10px"}}><input type="text" className="form-control" id="title" onChange={handleTitleChange}/></div>
                <form className="form-inline">
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>{' '}
                        <button type="button" className="btn btn-warning">Reset</button>{' '}
                        <button type="button" className="btn btn-normal" onClick={handleList}>List</button>
                    </div>
                </form>
            </div>
            <CKEditor editor={ Editor }
                      config={ editorConfiguration }
                      data={content}
                      onChange={ handleEditorChange }
                      onReady={ editor => {
                          // You can store the "editor" and use when it is needed.
                          //console.log( 'Editor is ready to use!', editor );
                          
                          // TODO 스타일로 해결하는 방법을 찾아보자!
                          editor.editing.view.change(writer => {
                              writer.setStyle(
                                  "height",
                                  "400px",
                                  editor.editing.view.document.getRoot()
                              );
                          });
                      } }
            />
        </div>
    )
}

export default Write;



import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";

import "../../css/bootstrap/css/bootstrap.min.css";

const Write = ({history}) => {
    
    const editorConfiguration = {
        toolbar: [ 'heading', 'bold', 'italic', 'fontsize', 'fontcolor', '|',
                  'bulletedList', 'numberedList', 'blockquote', 'link', 'code', 'codeblock', '|',
                  'imageupload', '|'
                  ,'undo', 'redo']
    };
    
    const handleList = () => {
        history.push('/app/list');
    }
    
    
    return (
        <div style={{width: "100%"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{width: "60%", marginBottom: "10px"}}><input type="text" className="form-control" id="title"/></div>
                <form className="form-inline">
                    <div className="form-group">
                        <button className="btn btn-primary">Save</button>{' '}
                        <button className="btn btn-warning">Reset</button>{' '}
                        <button className="btn btn-normal" onClick={handleList}>List</button>
                    </div>
                </form>
            </div>
            <CKEditor editor={ Editor }
                      config={ editorConfiguration }
                      onReady={ editor => {
                          // You can store the "editor" and use when it is needed.
                          console.log( 'Editor is ready to use!', editor );
                          
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



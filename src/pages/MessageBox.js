import React, {Fragment} from "react";
import styled from "styled-components";
import { ModalOverlay, ModalWrapper, Center} from "../layouts/Modal";

const Box = styled(Center)`
    width: 300px;
    height: 100px;
    position: absolute;
    background-color: white;
    padding: 20px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`

const MessageBox = ({flag, msg, handleCancel, handleOk}) => {
    
    return (
        <Fragment>
            <ModalOverlay visible={flag}/>
            <ModalWrapper visible={flag}>
                <Box>
                    <div style={{marginBottom: '10px'}}>{msg}</div>
                    <div>
                        <button className="btn btn-primary" onClick={handleCancel}>취소</button>{' '}
                        <button className="btn btn-danger" onClick={handleOk}>실행</button>
                    </div>
                </Box>
            </ModalWrapper>
        </Fragment>
    )
}

export default MessageBox;

import React, {Fragment} from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`

//TODO 일반 Modal 으로 활용할 수 있도록 수정할 것!
const Modal = ({children}) => {
    
    const pending = useSelector((state) => state.pending);
    
    return (
        <Fragment>
            <ModalOverlay visible={pending}/>
            <ModalWrapper visible={pending}>
                {children}
            </ModalWrapper>
        </Fragment>
    )
}

export default Modal;

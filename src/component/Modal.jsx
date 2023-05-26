import React from "react";
import styled from "styled-components";
import COLORS from "../pages/styled/colors";
import letterSrc from "../svg/letter.svg";
import reportSrc from "../svg/report.svg";

const ModalLayout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
position: absolute;
left: ${(props)=>props.left || "834px"};
top: ${(props)=>props.top || "93px"};
z-index: 10;
cursor: pointer;
width: 160px !important;
`

const ModalBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 15px;
gap: 8px;
background: ${COLORS.WHITE};
border-width: 1px 1px 0px 1px;
border-style: solid;
border-color: ${COLORS.Navy_100};
border-radius: 10px 10px 0px 0px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1em;
color: ${COLORS.Navy_100};
`

const BModalBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 15px;
gap: 8px;
background: ${COLORS.WHITE};
border-width: 1px;
border-style: solid;
border-color: ${COLORS.Navy_100};
border-radius: 10px 10px 10px 10px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1em;
color: ${COLORS.Navy_100};
`



const Modal = ({ onClose, left, top }) => {

  return (
      <ModalLayout left={left} top={top}>
         {/* <ModalBox>
           쪽지하기
           <img alt="쪽지하기" src={letterSrc} />
         </ModalBox> */}
        <BModalBox onClick={onClose}>
          신고하기
          <img alt="신고하기" src={reportSrc}/>
        </BModalBox>
      </ModalLayout>
  );
};

export default Modal;

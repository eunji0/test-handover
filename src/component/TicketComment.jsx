import React from "react";
import styled from "styled-components";
import MyPageSrc from "../svg/MyPage.svg";

const All = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 100px 10px 10px;
gap: 10px;
width: 100%;
`

const InnerBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 0px 20px;
gap: 10px;
width: 100%;
border-bottom: 2px solid rgba(28, 101, 243, 0.3);
`

const TCommentBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 7px 10px 15px;
gap: 10px;
background: #FFFFFF;
border: 1px solid #1C65F3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
`

const Comment = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.5em;
color: #1C65F3;
`

const CommentBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: ${(props) => props.padding};
gap: 10px;
isolation: isolate;
`

const Profile = styled.img`
width: 50px;
height: 50px;
`

const CommentBar = styled.div`
height: 50px;
width: 900px;
background: #FFFFFF;
border-bottom: 1px solid rgba(28, 101, 243, 0.3);
`

const TxtId = styled.div`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
`

const CommentTxt = styled.div`
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
`

const CinnerBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 0px 0px 5px;
gap: 10px;
width: 900px;
height: 50px;
border-bottom: 1px solid rgba(28, 101, 243, 0.3);
`

export default function TicketComment() {
    return (
        <All>
            <InnerBox>
                <TCommentBox>
                    <Comment>댓글</Comment>
                </TCommentBox>
            </InnerBox>
            <CommentBox padding="0px 10px 30px">
                <Profile alt="profile" src={MyPageSrc} />
                <CinnerBox>
                    <TxtId>pppds132</TxtId>
                </CinnerBox>
            </CommentBox>
            <CommentBox padding="10px">
                <Profile alt="profile" src={MyPageSrc} />
                <CinnerBox>
                    <TxtId>pppds132</TxtId>
                    <CommentTxt>누구 공연인가요?</CommentTxt>
                </CinnerBox>

            </CommentBox>
            <CommentBox padding="10px">
                <Profile alt="profile" src={MyPageSrc} />
                <CinnerBox>
                    <TxtId>pppds132</TxtId>
                    <CommentTxt>누구 공연인가요?</CommentTxt>
                </CinnerBox>

            </CommentBox>
            <CommentBox padding="10px">
                <Profile alt="profile" src={MyPageSrc} />
                <CinnerBox>
                    <TxtId>pppds132</TxtId>
                    <CommentTxt>누구 공연인가요?</CommentTxt>
                </CinnerBox>

            </CommentBox>
        </All>
    )
}
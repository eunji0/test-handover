import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { commentsState } from "../atoms/atoms";
import styled from "styled-components";
import MyPageSrc from "../svg/MyPage.svg";
import sendingSrc from "../svg/sending.svg"

const CommentAll = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 10px 30px;
gap: 10px;
width: 980px;
height: 90px;
`

const Profile = styled.img`
width: 50px;
height: 50px;
`

const CommentFormBox = styled.form`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;

width: 900px;
height: 80px;
`

const Commentinput = styled.input`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
gap: 10px;
width: 820px;
height: 50px;
border: none;
border-bottom: 1px solid rgba(28, 101, 243, 0.3);

&:focus{
  outline: none;
    border-bottom: 2px solid #1C65F3;
}
`

const SendingBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding: 10px;
gap: 10px;
width: 60px;
height: 60px;
`

const Sendingimg = styled.img`
width: 40px;
height: 40px;
`


function CommentForm() {
    const [text, setText] = useState("");
    const setComments = useSetRecoilState(commentsState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            id: Date.now(),
            text,
        };
        setComments((comments) => [...comments, newComment]);
        setText("");
    };

    return (
        <CommentAll>
            <Profile alt="profile" src={MyPageSrc} />
            <CommentFormBox onSubmit={handleSubmit}>
                <Commentinput
                    type="text"
                    placeholder="Write a comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <SendingBox type="submit"><Sendingimg alt="sending" src={sendingSrc} /></SendingBox>
            </CommentFormBox>
        </CommentAll>
    );
}

export default CommentForm;

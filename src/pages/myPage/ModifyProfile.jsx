import React from "react";
import styled from "styled-components";
import COLORS from "../styled/colors";
import { useState } from "react";

const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 15px 10px;
gap: 30px;
width: 100%;
`
const All = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;
`

const BoxTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 20px 100px;
gap: 10px;
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
`

const ListBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 0px;
gap: 15px;
`

const InnerBox = styled.div`
width: 614px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 10px;`

const Txt = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
`

const InputBox = styled.input`
width: 430px;
height: 44px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;
padding-left: 5px;

&:focus{
  outline: none;
  border: 2px solid ${COLORS.Navy_100};
}`

const BtnLayout = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
width: 100%;
`

const Btn = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 15px 8px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 30px;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};`

const ModifyProfile = () => {
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nickname: ${nickname}, Password: ${password}`);
  };


  return (
    <Layout>
      <All>
        <BoxTitle>
          프로필 수정하기
        </BoxTitle>

        <ListBox>
          <form onClick={handleSubmit}>
            <InnerBox type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)} >
              <Txt>
                닉네임 :
              </Txt>
              <InputBox />
            </InnerBox>
            <InnerBox type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} >
              <Txt>
                비밀번호 :
              </Txt>
              <InputBox />
            </InnerBox>
            <InnerBox>
              <Txt>
                비밀번호 확인 :
              </Txt>
              <InputBox />
            </InnerBox>
          </form>
        </ListBox>

        <BtnLayout>
          <Btn type="submit"  onSubmit={handleSubmit}>
            확인
          </Btn>
        </BtnLayout>
      </All>
    </Layout>
  );
}

export default ModifyProfile;
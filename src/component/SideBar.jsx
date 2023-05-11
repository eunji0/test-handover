import React, { useState } from "react";
import styled from "styled-components";
import COLORS from "../pages/styled/colors";
import { Link } from "react-router-dom";

const Layout = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 30px 10px 10px;
gap: 10px;
background: ${COLORS.WHITE};
width: 200px;
`

const Box = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.GRAY};
`

const MenuBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 10px;
gap: 10px;
font-style: normal;
font-weight: ${(props)=>props.fontWeight || 400};
font-size: 16px;
line-height: 19px;
color: ${(props) => props.color || `${COLORS.BLACK}`};
`

const LinkStyle = styled(Link)`
text-decoration: none;
`

const SideBar = () => {
  const [click, setClick] = useState(false);

  const clickBtn = () => {
    setClick(!click)
  }

  return (
    <div>
      <Layout>
        <Box>
          notice
        </Box>
        <LinkStyle to="/mypage/noticed" onClick={clickBtn}>
          <MenuBox color={click ? `${COLORS.Navy_100}` : `${COLORS.BLACK}`}
          fontWeight={click ? 600 : 400}>
            알림
          </MenuBox>
        </LinkStyle>
        <MenuBox>
          쪽지함
        </MenuBox>
        <Box>
          my
        </Box>
        <MenuBox>
          프로필 수정하기
        </MenuBox>
        <Box>
          matching
        </Box>
        <MenuBox>
          내가 쓴 매칭글
        </MenuBox>
        <LinkStyle to="/matches/favorites"onClick={clickBtn}>
          <MenuBox color={click ? `${COLORS.Navy_100}` : `${COLORS.BLACK}`}
          fontWeight={click ? 600 : 400}>
            내가 찜한 매칭글
          </MenuBox>
        </LinkStyle>
        <Box>
          settings
        </Box>
        <MenuBox>
          공지사항
        </MenuBox>
        <MenuBox>
          이용약관
        </MenuBox>
        <MenuBox>
          이용가이드
        </MenuBox>
      </Layout>
    </div>
  )
}

export default SideBar;
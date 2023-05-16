import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import logoSrc from '../svg/logoSrc.svg';
import SearchSrc from '../svg/Search.svg';
import MyPageSrc from '../svg/MyPage.svg';
import { Link } from 'react-router-dom';
import categoryDummy from "../categoryDummy";
import { useRecoilState } from 'recoil';
import { searchResultsState } from '../atoms/atoms';
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import COLORS from "../pages/styled/colors";
import alarmSrc from "../svg/alarm.svg";
import axios from "axios";

const All = styled.div`
position: relative;
/* width: 1000px; */
height: 90px;
margin: 0px auto;
`

const Allin = styled(All)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 15px;
isolation: isolate;
`

const Logo = styled.img.attrs({ alt: "로고" })`
`

const LogoLink = styled(Link)`
text-decoration-line: none;
`

const SearchBox = styled.form`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 0px 20px 0px 0px;
width: 420px;
height: 50px;
background: ${COLORS.WHITE};
border: 2px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
`

const MypageBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 7.5px 5px;
gap: 10px;
background: ${COLORS.WHITE};
`
const SearchBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0;
gap: 10px;
width: 25px;
height: 25px;
border: none;
background-color: ${COLORS.WHITE};
`
const Searchimg = styled.img.attrs({ alt: "검색 버튼" })`
width: 25px;
height: 25px;
`

const Searchinput = styled.input`
background: none;
width: 350px;
margin-left: 10px;
height: 30px;
border: none;
outline: none;
`

const SellTicket = styled.img.attrs({ alt: "sellTicketPage" })`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px 2px;
gap: 10px;
width: 39px;
height: 37px;
`

const Mypage = styled.img.attrs({ alt: "MyPage" })`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1px;
gap: 10px;
width: 39px;
height: 37px;
`


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const userToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiLsnYDsp4AiLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjg1MDUzNzY5fQ.g10lfvr--Su5kR4gUJVLk9OqjVHlDwWB0ssyvi-VrJv5oRICfc-oCWFennnAVo9zPwUobyn7gC-unr186BXejg";
    const navigate = useNavigate();
  
    const handleSearch = async (event) => {
        event.preventDefault();
      
        try {
          // API 요청 보내기
          const response = await axios.get(`http://15.164.244.154/api/search?keyword=${searchTerm}`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          });
          // 검색 결과 설정
          setSearchTerm(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    // console.log(searchTerm)
  
    //카테고리버튼 리셋
    const resetSelectedButton = () => {
      localStorage.setItem('selectedButton', null);
      setSelectedButton(null);
    };
  
    return (
      <div>
        <All>
          <Allin>
            <LogoLink to="/" onClick={resetSelectedButton}>
              <Logo src={logoSrc} />
            </LogoLink>
  
            <SearchBox onSubmit={handleSearch}>
              <Searchinput type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              <SearchBtn type="submit" onSubmit={handleSearch}>
                <Searchimg src={SearchSrc} />
              </SearchBtn>
            </SearchBox>
  
            <MypageBox>
              <Link to="/notice">
                <SellTicket src={alarmSrc} />
              </Link>
              <Link to="/favoritematching">
                <Mypage src={MyPageSrc} />
              </Link>
            </MypageBox>
          </Allin>
        </All>
      </div>
    );
  };
  
  export default Header;
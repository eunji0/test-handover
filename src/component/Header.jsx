import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import LogoSrc from '../svg/Logo.svg';
import SearchSrc from '../svg/Search.svg';
import SellTicketSrc from '../svg/SellTicket.svg';
import MyPageSrc from '../svg/MyPage.svg';
import { Link } from 'react-router-dom';
import categoryDummy from "../categoryDummy";
import { useRecoilState } from 'recoil';
import { searchResultsState } from '../atoms/atoms';
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

const All = styled.div`
position: relative;
width: 1000px;
height: 90px;
margin: 0px auto;
`

const Allin = styled(All)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 15px;
border-bottom: 1px solid rgba(28, 101, 243, 0.25);
`

const Logo = styled.img.attrs({ alt: "로고" })`
width: 124.85px;
height: 44.42px;
`

const LogoLink = styled(Link)`
text-decoration-line: none;
`

const SearchBox = styled.form`
width: 420px;
height: 50px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 20px 10px 15px;
background: #FFFFFF;
border: 2px solid #1C65F3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
`

const MypageBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 7.5px 15px;
gap: 10px;
width: 120px;
height: 52px;
background: #FFFFFF;
border: 2px solid #1C65F3;
border-radius: 40px;
`
const SearchBtn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;
width: 25px;
height: 25px;

border: none;
background-color: #FFFFFF;
`
const Searchimg = styled.img.attrs({ alt: "검색 버튼" })`
width: 25px;
height: 25px;
`

const Searchinput = styled.input`
width: 350px;
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


export default function Header() {

    const [searchTerm, setSearchTerm] = useState('');
    const [_, setSearchResults] = useRecoilState(searchResultsState);
    const navigate = useNavigate();

    // 검색 필터링 함수
    const filterResults = (searchTerm) => {
        const filteredData = categoryDummy.filter((item) =>
            item.ticket_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.ticket_place.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(filteredData);
    };

    // 검색어 유지
    useEffect(() => {
        const queryParams = queryString.parse(location.search);
        const initialSearchTerm = queryParams.q || '';
        setSearchTerm(initialSearchTerm);
    }, [location.search]);

    // 검색 결과 필터링
    useEffect(() => {
        filterResults(searchTerm);
    }, [searchTerm, setSearchResults]);

    const handleSearch = (event) => {
        event.preventDefault();

        filterResults(searchTerm);
        // URL 변경
        const queryParam = queryString.stringify({ q: searchTerm });
        navigate(`/all?${queryParam}`, { replace: true });
    };

    //카테고리버튼 리셋
    const resetSelectedButton = () => {
        localStorage.setItem("selectedButton", null);
        setSelectedButton(null);
    };


    return (
        <div>
            <All>
                <Allin>
                    <LogoLink to="/" onClick={resetSelectedButton}>
                        <Logo src={LogoSrc} />
                    </LogoLink>

                    <SearchBox onSubmit={handleSearch}>
                        <Searchinput type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        <SearchBtn type="submit" onSubmit={handleSearch}>
                            <Searchimg src={SearchSrc} />
                        </SearchBtn>
                    </SearchBox>

                    <MypageBox>
                        <div>
                            <SellTicket src={SellTicketSrc} />
                        </div>
                        <Link to="/favorite">
                            <Mypage src={MyPageSrc} />
                        </Link>
                        {/* <div>
                            <Mypage src={MyPageSrc} />
                        </div> */}
                    </MypageBox>
                </Allin>
            </All>

        </div>

    )
}

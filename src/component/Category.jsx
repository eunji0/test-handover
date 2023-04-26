import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { searchResultsState } from '../atoms/atoms';
import { useRecoilState } from 'recoil';
import categoryDummy from "../categoryDummy";
import { selectedButtonState } from '../atoms/atoms';

const All = styled.div`
position: relative;
width: 1000px;
height: 89px;
margin: 0px auto;
`

const Allin = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 30px 10px 20px 15px;
gap: 30px;
`

const CategoryBox = styled.div.attrs({ type: "button" })`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 20px;
gap: 10px;
cursor: pointer;
background: ${(props) => props.background || "#FFFFFF"};
border: 1px solid #1C65F3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
width: 91px;
height: 39px;
`

const BoxTxT = styled.span`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
word-spacing:0.8em;
color: ${(props) => props.color || "#1C65F3"};
`

const BtnLink = styled(Link)`
text-decoration-line: none;
`

export default function Category() {
  const categoryTxt = [
    {
      id: 1,
      txt: "전 체",
      to: 'all'
    },
    {
      id: 2,
      txt: "숙 소",
      to: 'hotel'
    },
    {
      id: 3,
      txt: "캠 핑",
      to: 'camping'
    },
    {
      id: 4,
      txt: "공 연",
      to: 'show'
    },
    {
      id: 5,
      txt: "기 타",
      to: 'etc'
    }
  ];

  // 기본값으로 null로 설정
  // const [selectedButton, setSelectedButton] = useState(
  //   parseInt(localStorage.getItem('selectedButton')) || null
  // );
  const [selectedButton, setSelectedButton] = useRecoilState(selectedButtonState);

  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [_, setSearchResults] = useRecoilState(searchResultsState);
  const navigate = useNavigate();

  const filterResults = (searchTerm) => {
    const filteredData = categoryDummy.filter((item) =>
      item.ticket_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ticket_place.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredData.length > 0 ? filteredData : null);
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);

    localStorage.setItem('selectedButton', buttonId);
    filterResults(searchTerm);

    // URL 변경
    const queryParam = queryString.stringify({ q: searchTerm });
    navigate(`/all?${queryParam}`, { replace: true });

  };

  console.log(selectedButton);

  useEffect(() => {
    if (location.pathname === '/all') {
      setSelectedButton(1);
    }
  }, [location.pathname]);


  const handleBeforeUnload = () => {
    localStorage.removeItem('selectedButton');
  };


  useEffect(() => {
    const buttonId = categoryTxt.findIndex((item) => item.to === location.pathname.substring(1));
    setSelectedButton(buttonId + 1);
  }, [location.pathname, categoryTxt]);

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <div>
      <All>
        <Allin>
          {categoryTxt.map((item) => (
            <BtnLink key={item.id} to={item.to}>
              <CategoryBox
                key={item.id}
                onClick={() => handleButtonClick(item.id)}
                className={selectedButton === item.id ? 'active' : ''}
                background={selectedButton === item.id ? '#1C65F3' : '#FFFFFF'}
              >
                <BoxTxT color={selectedButton === item.id ? '#FFFFFF' : '#1C65F3'}>
                  {item.txt}
                </BoxTxT>
              </CategoryBox>
            </BtnLink>
          ))}
        </Allin>
      </All>
    </div>
  );
}

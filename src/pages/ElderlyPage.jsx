import React from "react";
import styled from "styled-components";
import HeartSrc from "../svg/Heart.svg";
import { useState, useEffect } from "react";
import categoryDummy from "../categoryDummy";
import moreSrc from "../svg/More.svg";
import heartSelectedSrc from "../svg/heartSelect.svg";
import { useRecoilValue, useRecoilState } from 'recoil';
import { favoriteState, searchResultsState } from '../atoms/atoms';
import { useNavigate} from "react-router-dom";
import COLORS from "./styled/colors";

const All = styled.div`
position: relative;
width: 1000px;
margin: 0px auto;
`

const Allin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 0px 40px;
`

const List = styled.div`
cursor: pointer;
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
padding: 10px 20px 5px;
gap: 10px;
`

const ListTicket = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 15px;
gap: 30px;

`

const ListBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
height: 36px;
`

const ListTxt = styled.div`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: ${COLORS.Navy_100};
`

const TicketBox = styled.div`
width: 100%;
text-decoration: none;
`

const BoxinTop = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
`

const BoxinMid = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 10px 0px 0px;
gap: 50px;
`

const BoxBtm = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 10px 0px 0px;
gap: 83px;
`

const TicketNameBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 8px 10px 10px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;
`

const SitBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 10px;
gap: 10px;

`

const SellBox = styled.div`
/* width: 79px; */
height: 39px;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px 11px 10px 12px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;

`

const HeartBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
gap: 10px;
width: 38px;
height: 38px;
background: ${COLORS.WHITE};
border: ${(props) => props.border};
border-radius: 10px;
`

const TxtTicketName = styled.div`
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: ${COLORS.Navy_100};
`

const TxtSell = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
`

const BoxMidL = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;
`

const BoxMidR = styled.div`
height: 35px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
background: #FFFFFF;
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;
`

const LocationDateBox = styled.div`
height: 35px;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
background: ${COLORS.WHITE};;
border-radius: 10px;
`

const TxtLocationDate = styled.div`
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.15em;
color: ${COLORS.BLACK};;
`

const TxtPrice = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: ${COLORS.BLACK};;
`

const BoxTicketDetail = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 70%;
height: 70px;
background: ${COLORS.WHITE};
border-radius: 10px;
height: 70px;
`

const TxtDetail = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: ${COLORS.BLACK};
`

const BoxMore = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 30px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 40px;
width: 76px;
height: 38px;
`

const ListTicketBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 15px;
background-color: ${COLORS.Navy_5};
border-radius: 10px;
width: 100%;
`

const BoxBuy = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 124px;
height: 39px;
background: ${COLORS.WHITE};
border: 2px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const TxtBuy = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.Navy_100};
`

const TxtNone = styled.div`
margin-top: 50px;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.BLACK};
`

const ElderlyPage=()=> {
    const searchResults = useRecoilValue(searchResultsState);
    const [sortedCategoryDummy, setSortedCategoryDummy] = useState([]);
    const [sortBy, setSortBy] = useState("date");
    const [numVisibleItems, setNumVisibleItems] = useState(5);
    const [elderlyCategoryDummy, setElderlyCategoryDummy] = useState(categoryDummy.filter(category => category.category === "노인돌봄"));
    const [favorites, setFavorites] = useRecoilState(favoriteState);
    
    const categoryList =
        searchResults.length > 0
            ? sortBy === "lowPrice"
                ? [...searchResults].sort((a, b) => a.price - b.price)
                : sortBy === "highPrice"
                    ? [...searchResults].sort((a, b) => b.price - a.price)
                    : [...searchResults].sort(
                        (a, b) => new Date(a.date) - new Date(b.date)
                    )
            : elderlyCategoryDummy;



    useEffect(() => {
        let sortedDummy;
        if (sortBy === "lowPrice") {
            sortedDummy = [...elderlyCategoryDummy].sort(
                (a, b) => a.price - b.price
            );
        } else if (sortBy === "highPrice") {
            sortedDummy = [...elderlyCategoryDummy].sort(
                (a, b) => b.price - a.price
            );
        } else {
            sortedDummy = [...elderlyCategoryDummy].sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            );
        }
        setElderlyCategoryDummy(sortedDummy);
    }, [categoryDummy, sortBy]);

    const navigate = useNavigate();

    const handleTicketClick=(matchingId)=> {
        navigate(`/detailticket/${matchingId}`);
    }

    const handleClick = (sortType) => {
        setSortBy(sortType);
    };

    const handleMoreButtonClick = () => {
        setNumVisibleItems(numVisibleItems + 5);
        // 5개씩 더 보여줌
    };

    // 하트 버튼 클릭 시 호출되는 함수
    const handleFavoriteClick = (matchingId) => {
        if (favorites.includes(matchingId)) {
          // 이미 즐겨찾기에 추가된 티켓일 경우
          const newFavorites = favorites.filter((id) => id !== matchingId);
          setFavorites(newFavorites);
        } else {
          // 즐겨찾기에 추가되지 않은 티켓일 경우
          const newFavorites = [...favorites, matchingId];
          setFavorites(newFavorites);
        }
      };

    return (
        <div>
            <All>
                <Allin>
                    <List>
                        <ListBox>
                            <ListTxt type="button" onClick={() => handleClick("date")}>
                                날짜순
                            </ListTxt>
                            <ListTxt>|</ListTxt>
                            <ListTxt type="button" onClick={() => handleClick("lowPrice")}>
                                가격낮은순
                            </ListTxt>
                            <ListTxt>|</ListTxt>
                            <ListTxt type="button" onClick={() => handleClick('highPrice')}>
                                가격높은순
                            </ListTxt>
                        </ListBox>
                    </List>

                    <ListTicket>
                        {searchResults.length === 0 && (
                            <TxtNone>일치하는 티켓이 없습니다.</TxtNone>
                        )}
                        <>
                            {elderlyCategoryDummy.slice(0, numVisibleItems).map((item, index) => (
                                <TicketBox key={index}
                                    onClick={() => handleTicketClick(item.id)}
                                >
                                    <ListTicketBox key={item.seller_ID}>
                                        <BoxinTop>
                                            <TicketNameBox>
                                                <TxtTicketName>{item.category}</TxtTicketName>
                                            </TicketNameBox>
                                            <SitBox>
                                                <SellBox>
                                                    <TxtSell>{item.state}</TxtSell>
                                                </SellBox>
                                                <HeartBox onClick={(event) => {
                                                    event.stopPropagation(); // 이벤트 버블링 방지
                                                    handleFavoriteClick(item.id);
                                                }} border={favorites.includes(item.id) ? `1px solid ${COLORS.Navy_100}` : `1px solid ${COLORS.GRAY}`}>
                                                    <img style={{ width: "24px", height: "20px" }} src={favorites.includes(item.id) ? heartSelectedSrc : HeartSrc} />
                                                </HeartBox>


                                            </SitBox>
                                        </BoxinTop>
                                        <BoxMidL>
                                            <LocationDateBox>
                                                <TxtLocationDate>{item.title}</TxtLocationDate>
                                            </LocationDateBox>
                                        </BoxMidL>
                                        <BoxinMid>
                                            <BoxMidL>
                                                <LocationDateBox>
                                                    <TxtLocationDate>{item.location}</TxtLocationDate>
                                                </LocationDateBox>
                                                <LocationDateBox>
                                                    <TxtLocationDate>{item.date}</TxtLocationDate>
                                                </LocationDateBox>
                                            </BoxMidL>
                                            <BoxMidR>
                                                <TxtPrice>{item.price}원</TxtPrice>
                                            </BoxMidR>
                                        </BoxinMid>

                                        <BoxBtm>
                                            <BoxTicketDetail>
                                                <TxtDetail>{item.content}</TxtDetail>
                                            </BoxTicketDetail>

                                            <BoxBuy>
                                                <TxtBuy>매 칭 하 기</TxtBuy>
                                            </BoxBuy>
                                        </BoxBtm>
                                    </ListTicketBox>
                                </TicketBox>
                            ))}
                        </>

                        <BoxMore type="button" onClick={handleMoreButtonClick}>
                            <img src={moreSrc} />
                        </BoxMore>
                    </ListTicket>
                </Allin>
            </All>
        </div>
    )
}

export default ElderlyPage;
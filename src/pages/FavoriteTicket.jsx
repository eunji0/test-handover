import React from "react";
import styled from "styled-components";
import MoreSrc from "../svg/More.svg";
import HeartSelectedSrc from "../svg/HeartSelect.svg";
import HeartSrc from "../svg/Heart.svg";

const All = styled.div`
position: relative;
width: 1000px;
margin: 0px auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 0px 0px;
`

const BoxTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-start;
padding: 10px 20px 30px;
gap: 10px;
`

const DivTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
`

const TxtTitle = styled.div`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: #1C65F3;
`

const BoxFavorite = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 15px 40px;
gap: 40px;
width: 100%;
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
gap: 10px;

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
height: 39px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
background: #FFFFFF;
border: 1px solid #1C65F3;
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
height: 39px;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 14px;
gap: 10px;
background: #FFFFFF;
border: 1px solid #1C65F3;
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
background: #FFFFFF;
border: 1px solid #C9C9C9;
border-radius: 10px;
`

const TxtTicketName = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: flex-end;
text-align: center;
letter-spacing: 0.05em;
color: #222222;
`

const TxtSell = styled.div`
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
color: #1C65F3;
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
border: 1px solid #1C65F3;
border-radius: 10px;
`

const LocationDateBox = styled.div`
height: 35px;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
background: #FFFFFF;
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
color: #222222;
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
color: #222222;
`

const BoxTicketDetail = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 10px;
width: 70%;
height: 70px;
background: #FFFFFF;
border-radius: 10px;
height: 70px;
`

const TxtDetail = styled.div`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #222222;
`

const BoxMore = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
`

const ListTicketBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 20px;
background: rgba(28, 101, 243, 0.05);
border-radius: 10px;
width: 100%;
height: 205px;
`

const BoxBuy = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 20px;
gap: 10px;
width: 124px;
height: 39px;
background: #FFFFFF;
border: 2px solid #1C65F3;
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
color: #1C65F3;
`

export default function FavoriteTicket({ favorites }) {
    return (
        <div>
            <All>
                <BoxTitle>
                    <DivTitle>
                        <TxtTitle>내가 찜한 티켓</TxtTitle>
                    </DivTitle>
                </BoxTitle>

                <BoxFavorite>
                    <TicketBox>
                        {favorites.length > 0 ? (
                            favorites.map((ticket) => (
                                <ListTicketBox key={ticket.id} ticket={ticket}>
                                    <BoxinTop>
                                        <TicketNameBox>
                                            <TxtTicketName>바다캠핑장</TxtTicketName>
                                        </TicketNameBox>
                                        <SitBox>
                                            <SellBox type="button">
                                                <TxtSell>판매중</TxtSell>
                                            </SellBox>
                                            <HeartBox>
                                                <img src={HeartSrc} alt="favorite" />

                                            </HeartBox>
                                        </SitBox>
                                    </BoxinTop>

                                    <BoxinMid>
                                        <BoxMidL>
                                            <LocationDateBox>
                                                <TxtLocationDate>인천 서구 완정로117번길 35"</TxtLocationDate>
                                            </LocationDateBox>
                                            <LocationDateBox>
                                                <TxtLocationDate>오션뷰 조식 미포함 11시 체크아웃</TxtLocationDate>
                                            </LocationDateBox>
                                        </BoxMidL>
                                        <BoxMidR>
                                            <TxtPrice>250,000원</TxtPrice>
                                        </BoxMidR>
                                    </BoxinMid>

                                    <BoxBtm>
                                        <BoxTicketDetail>
                                            <TxtDetail>오션뷰 조식 미포함 11시 체크아웃</TxtDetail>
                                        </BoxTicketDetail>

                                        <BoxBuy>
                                            <TxtBuy>구 매 하 기</TxtBuy>
                                        </BoxBuy>
                                    </BoxBtm>
                                </ListTicketBox>
                            ))
                        ) : (
                            <p>즐겨찾기한 항목이 없습니다.</p>
                        )}

                    </TicketBox>
                </BoxFavorite>
            </All>
        </div>
    );
}

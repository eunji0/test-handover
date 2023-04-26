import styled from "styled-components";
import HeartSrc from "../svg/Heart.svg";
import ModalBtnSrc from "../svg/ModalBtn.svg";
import { useParams } from 'react-router-dom';
import { getTicketById } from '../categoryDummy';
import selectedHeart from "../svg/HeartSelect.svg";
import React, { useState } from 'react';

const Box = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-end;
padding: 40px 0px 10px;
width: 1000px;
gap: 10px;
`

const InnerBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 20px;
isolation: isolate;
width: 100%;
height: 523px;
background: rgba(28, 101, 243, 0.05);
border-radius: 25px;`

const TopBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px 0px 30px;
gap: 10px;
width: 100%;
height: 68px;
`

const NameBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 15px 20px;
gap: 10px;
background: #FFFFFF;
border: ${(props) => props.border};
border-radius: 10px;
`

const NameTxt = styled.div`
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: #000000;
`

const ItemBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 20px;
`

const DateBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px 10px 0px 0px;
gap: 10px;
isolation: isolate;
width: 100%;
`

const DateinnerBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
background: #FFFFFF;
border-radius: 10px;
`

const DateTxt = styled.div`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: #000000;
cursor: pointer;
`

const SellBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 10px 10px 15px;
gap: 10px;
height: 48px;
background: #FFFFFF;
border: 1px solid #1C65F3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const SellTxt = styled.div`
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

const HeartBox = styled.div`
    display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5px;
gap: 10px;
width: 48px;
height: 48px;
background: #FFFFFF;
border: ${(props) => props.border};
border-radius: 10px;
`

const ContextBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 0px;
gap: 10px;
width: 100%;
border-radius: 10px;
`

const Detail = styled.div`
width: 750px;
height: 265px;
background: #FFFFFF;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 10px 10px 15px;
gap: 10px;
`

const BuyFrame = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
padding: 10px 10px 15px;
gap: 15px;
width: 220px;
height: 265px;
`

const DetailTxt = styled.div`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
letter-spacing: 0.2em;
color: #000000;
`

const PriceBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 15px 15px 15px 20px;
gap: 10px;
background: #FFFFFF;
border: 1px solid #1C65F3;
border-radius: 10px;
`

const PriceTxt = styled.div`
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2em;
color: #000000;
`

const BuyBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 15px 30px 15px 35px;
gap: 10px;
background: #FFFFFF;
border: 2px solid #1C65F3;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const BuyTxt = styled.div`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.3em;
color: #1C65F3;
`

const Heartsvg = styled.img`
width: 30px;
height: 26px;
`



export default function TicketDetail() {
    const { ticket_id } = useParams();
    const ticket = getTicketById(ticket_id);
    //임시 favorite
    const [favorite, setFavorite] = useState(false);

    return (
        <div>
            
            {ticket && (
                <Box>
                    <InnerBox>
                        <TopBox>
                            <NameBox border='1px solid #1C65F3'>
                                <NameTxt>{ticket.ticket_name}</NameTxt>

                            </NameBox>
                            <ItemBox>
                                <SellBox>
                                    <SellTxt>{ticket.ticket_state}</SellTxt>
                                </SellBox>
                                <div onClick={() => setFavorite(!favorite)}>
                                    <HeartBox border={favorite == false ? "1px solid #C9C9C9" : "1px solid #1C65F3"}>
                                        {favorite == false ? <Heartsvg alt="heart" src={HeartSrc} /> : <img alt="selectHeart" src={selectedHeart} />}
                                    </HeartBox>
                                </div>
                                <HeartBox border="1px solid #1C65F3">
                                    <img alt="modal" src={ModalBtnSrc} />
                                </HeartBox>
                            </ItemBox>
                        </TopBox>
                        <DateBox>

                            <DateinnerBox>
                                <DateTxt>
                                    {ticket.ticket_date}
                                </DateTxt>
                            </DateinnerBox>
                            <DateinnerBox>
                                <DateTxt>
                                    {ticket.ticket_place}
                                </DateTxt>
                            </DateinnerBox>
                        </DateBox>
                        <DateBox>
                            <DateinnerBox>
                                <DateTxt>
                                    {ticket.url}
                                </DateTxt>
                            </DateinnerBox>
                        </DateBox>
                        <ContextBox>
                            <Detail>
                                <DetailTxt>
                                    {ticket.ticket_detail}
                                </DetailTxt>
                            </Detail>
                            <BuyFrame>
                                <PriceBox><PriceTxt>{ticket.ticket_price}원</PriceTxt></PriceBox>
                                <BuyBox><BuyTxt>구매하기</BuyTxt></BuyBox>
                            </BuyFrame>
                        </ContextBox>
                    </InnerBox>
                </Box>
            )}
        </div>
    )
}
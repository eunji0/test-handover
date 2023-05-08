import styled from "styled-components";
import HeartSrc from "../svg/Heart.svg";
import modalBtnSrc from "../svg/ModalBtn.svg";
import { useParams } from 'react-router-dom';
import { getWritingById } from '../categoryDummy';
import selectedHeart from "../svg/HeartSelect.svg";
import React, { useState } from 'react';
import COLORS from "../pages/styled/colors";
import Modal from "./Modal";

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
padding: 10px 20px;
gap: 5px;
isolation: isolate;
width: 100%;
background: ${COLORS.Navy_5};
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
padding: 10px;
gap: 10px;
background: ${COLORS.WHITE};
border-radius: 10px;
`

const NameTxt = styled.div`
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: left;
text-align: center;
color: ${COLORS.BLACK};
`

const ItemBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
`

const ItemInBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 5px;
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
background: ${COLORS.WHITE};
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
color: ${COLORS.BLACK};
cursor: pointer;
`

const SellBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 7px 10px 10px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
`

const SellTxt = styled.div`
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

const ContextBox = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 0px 0px 10px;
`

const Detail = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 0px;
gap: 20px;
width: 70%;
`

const DetailBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 20px 10px 10px 15px;
gap: 10px;
height: 179px;
background: #FFFFFF;
border-radius: 10px;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: left;
color: ${COLORS.BLACK};
`

const ImportantBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 10px 10px 10px 15px;
gap: 10px;
background: ${COLORS.WHITE};
border-radius: 10px;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: left;
color: ${COLORS.BLACK};`

const BuyFrame = styled.div`
margin-top: 120px;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
padding: 10px;
gap: 15px;
`

const DetailTxt = styled.div`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
letter-spacing: 0.2em;
color: ${COLORS.BLACK};
`

const PriceBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 12px 10px 15px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
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
color: ${COLORS.BLACK};
`

const BuyBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 12px 15px;
gap: 10px;
background: ${COLORS.WHITE};
border: 2px solid ${COLORS.Navy_100};
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
color: ${COLORS.Navy_100};
`

const Heartsvg = styled.img`
width: 24px;
height: 20px;
`



export default function TicketDetail() {
    const { ticket_id } = useParams();
    const matching = getWritingById(ticket_id);
    //임시 favorite
    const [favorite, setFavorite] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleModalClick = () => {
        setShowModal(!showModal);
    }

    return (
        <div>

            {matching && (
                <Box>
                    <InnerBox>
                        <TopBox>
                            <NameBox>
                                <NameTxt>{matching.title}</NameTxt>
                            </NameBox>
                            <ItemBox>
                                <ItemInBox>
                                    <SellBox>
                                        <SellTxt>{matching.state}</SellTxt>
                                    </SellBox>
                                    <div onClick={() => setFavorite(!favorite)}>
                                        <HeartBox border={favorite == false ? `1px solid ${COLORS.GRAY}` : `1px solid ${COLORS.Navy_100}`}>
                                            {favorite == false ? <Heartsvg alt="heart" src={HeartSrc} /> : <Heartsvg alt="selectHeart" src={selectedHeart} />}
                                        </HeartBox>
                                    </div>
                                    <HeartBox border={`1px solid ${COLORS.Navy_100}`} onClick={handleModalClick}>
                                        <img alt="modal" src={modalBtnSrc} />
                                    </HeartBox>
                                </ItemInBox>

                                {showModal && (
                                    <Modal>
                                    </Modal>
                                )}
                            </ItemBox>
                        </TopBox>
                        <DateBox>

                            <DateinnerBox>
                                <DateTxt>
                                    {matching.date}
                                </DateTxt>
                            </DateinnerBox>
                            <DateinnerBox>
                                <DateTxt>
                                    {matching.location}
                                </DateTxt>
                            </DateinnerBox>
                        </DateBox>
                        <ContextBox>
                            <Detail>
                                <DetailBox>
                                    {matching.content}
                                </DetailBox>
                                <ImportantBox>
                                    {matching.important}
                                </ImportantBox>
                            </Detail>
                            <BuyFrame>
                                <PriceBox>
                                    <PriceTxt>{matching.price}원</PriceTxt>
                                </PriceBox>
                                <BuyBox>
                                    <BuyTxt>매 칭 하 기</BuyTxt>
                                </BuyBox>
                            </BuyFrame>
                        </ContextBox>
                    </InnerBox>
                </Box>
            )}
        </div>
    )
}
import styled from "styled-components";
import HeartSrc from "../svg/Heart.svg";
import modalBtnSrc from "../svg/ModalBtn.svg";
import heartSelectedSrc from "../svg/heartSelect.svg";
import React, { useState, useEffect } from 'react';
import COLORS from "../pages/styled/colors";
import Modal from "./Modal";
import { getFavoriteMatches } from "../api/api";
import { toggleFavoriteMatch } from "../api/api";
import { userToken } from "../api/api";
import { useParams } from 'react-router-dom';
import { getMatchById } from '../api/api';

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
flex-direction: column;
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
padding: 10px 10px 10px 15px;
gap: 10px;
min-height: 179px;
overflow: auto;
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
min-height: 38px;
overflow: auto;
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
  padding: 10px 15px;
  gap: 10px;
  background: ${COLORS.WHITE};
  border: 2px solid ${COLORS.Navy_100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  &:active {
    transform: translateY(2px);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }
`;

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


export default function TicketDetail() {
	const params = useParams();
	const matchingId = params.id;
	const [showModal, setShowModal] = useState(false);
	const [favorites, setFavorites] = useState([]);
	const [match, setMatch] = useState(null);

	const handleModalClick = () => {
		setShowModal(!showModal);
	}


	//매칭글 정보 API
	useEffect(() => {
		const fetchMatch = async () => {
			try {
				const matchData = await getMatchById(matchingId);
				setMatch(matchData);
			} catch (error) {
				// 오류 처리
			}
		};

		fetchMatch();
	}, [matchingId]);


	// 기존 즐겨찾기 목록
	useEffect(() => {
		const favorites = async () => {
			try {
				const response = await getFavoriteMatches(userToken);
				setFavorites(response.data.result.data.matches.map((item) => item.id));
			} catch (error) {
				console.error(error);
			}
		};

		favorites();
	}, []);

	// 하트 버튼 클릭 시 호출되는 함수
	const handleFavoriteClick = (matchingId) => {
		if (favorites.includes(matchingId)) {
			toggleFavoriteMatch(userToken, matchingId)
				.then(() => {
					const newFavorites = favorites.filter((id) => id !== matchingId);
					setFavorites(newFavorites);
				})
				.catch((err) => {
					console.error(err);
				});
		} else {
			toggleFavoriteMatch(userToken, matchingId)
				.then(() => {
					const newFavorites = [...favorites, matchingId];
					setFavorites(newFavorites);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	};


	return (
		<div>
			{match && match.result && match.result.data ? (
				< Box >
					<InnerBox>
						<TopBox>
							<NameBox>
								<NameTxt>{match.result.data.matchName}</NameTxt>
							</NameBox>
							<ItemBox>
								<ItemInBox>
									<SellBox>
										<SellTxt>판매중</SellTxt>
									</SellBox>
									<HeartBox onClick={(event) => {
										event.stopPropagation(); // 이벤트 버블링 방지
										handleFavoriteClick(match.result.data.id);
									}} border={favorites.includes(match.result.data.id) ? `1px solid ${COLORS.Navy_100}` : `1px solid ${COLORS.GRAY}`}>
										<img style={{ width: "24px", height: "20px" }} src={favorites.includes(match.result.data.id) ? heartSelectedSrc : HeartSrc} />
									</HeartBox>
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
									{match.result.data.startDate} ~ {match.result.data.endDate}
								</DateTxt>
							</DateinnerBox>
							<DateinnerBox>
								<DateTxt>
									{match.result.data.address}
								</DateTxt>
							</DateinnerBox>
						</DateBox>
						<ContextBox>
							<Detail>
								<DetailBox>
									{match.result.data.detailsContent}
								</DetailBox>
								<ImportantBox>
									{match.result.data.precaution}
								</ImportantBox>
							</Detail>
							<BuyFrame>
								<PriceBox>
									<PriceTxt>{match.result.data.price}원</PriceTxt>
								</PriceBox>
								<BuyBox>
									<BuyTxt>매 칭 하 기</BuyTxt>
								</BuyBox>
							</BuyFrame>
						</ContextBox>
					</InnerBox>
				</Box>
			) : (
				<div>Loading...</div>
			)}
		</div >
	)
}

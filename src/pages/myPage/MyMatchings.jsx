import React from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { favoriteState } from "../../atoms/atoms";
import { getWritingById } from '../../categoryDummy';
import COLORS from "../styled/colors";

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
width: 100%;
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
padding: 10px;
gap: 20px;
width: 100%;
`

const MatchingBox = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
gap: 15px;
width: 100%;
background: ${COLORS.Navy_5};
border-radius: 10px;
`

const MatchingLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
padding: 10px;
width: 100%;
`

const TitleBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
background: ${COLORS.WHITE};
border-radius: 10px;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
color: ${COLORS.BLACK};
`

const StateBox = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 8px 10px 10px;
gap: 10px;
background: ${COLORS.WHITE};
border: 1px solid ${COLORS.Navy_100};
border-radius: 10px;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.15em;
color: ${COLORS.Navy_100};
`

const MyMatchings = () => {
    const favorites = useRecoilValue(favoriteState);
    const matchings = favorites.map((id) => getWritingById(id));


    return (
            <Layout>
                <All>
                    <BoxTitle>
                        내가 쓴 매칭글
                    </BoxTitle>

                    <ListBox>
                        {matchings.length === 0 && <p>내가 쓴 매칭글이 없습니다.</p>}
                        {matchings.map((item, index) => (
                            <MatchingBox key={index}>
                                <MatchingLayout key={index} item={item}>
                                    <TitleBox>
                                        {item.title}
                                    </TitleBox> 
                                    <StateBox>
                                        {item.state}
                                    </StateBox>
                                </MatchingLayout>
                            </MatchingBox>
                        ))}
                    </ListBox>
                </All>
            </Layout>
    );
}

export default MyMatchings;
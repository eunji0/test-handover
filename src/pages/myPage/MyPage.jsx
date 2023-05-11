import React from "react";
import styled from "styled-components";
import COLORS from "../styled/colors";
import SideBar from "../../component/SideBar";
import FavoriteMathcing from "./FavoriteMatching";
import ModifyProfile from "./ModifyProfile";
import MyMatching from "./MyMatchings";
import NoteBox from "./MessageBox";
import Noticed from "./Noticed";

const Layout = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
background: ${COLORS.WHITE};
`

const InnerLayout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px 20px 10px;
gap: 10px;
width: 100%;
`

const MyPage = () => {

  return (
    <div>
      {/* <Layout>
        <SideBar />
        <InnerLayout>
        </InnerLayout>
      </Layout> */}
    </div>
  )
}
export default MyPage;


{/* <ModifyProfile/>
          <MyMatching/>
          <NoteBox/>
          <Noticed /> */}
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from './component/Header'
import Category from "./component/Category";
import './App.css'
import AllPage from "./pages/AllPage";
import KidsPage from "./pages/KidsPage";
import EtcPage from "./pages/EtcPage";
import ElderyPage from "./pages/ElderlyPage";
import PetPage from "./pages/PetPage";
import DetailTicketPage from "./pages/DetailTicketPage";
import ScrollToTop from "./component/ScrollToTop";
import GlobalStyle from "./pages/styled/GlobalStyle";
import Introduction from "./component/Introduction";
import Noticed from "./pages/myPage/Noticed";
import FavoriteMatching from "./pages/myPage/FavoriteMatching";
import SideBar from "./component/SideBar";
import MessageBox from "./pages/myPage/MessageBox";
import ModifyProfile from "./pages/myPage/ModifyProfile";
import MyMatchings from "./pages/myPage/MyMatchings";

export default function App() {
  return (
    <div className="App">
      
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<AllPage />} />
            <Route path="/elderly" element={<ElderyPage />} />
            <Route path="/pet" element={<PetPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/etc" element={<EtcPage />} />
          </Route>

          <Route element={<CategoryLayout />}>
            <Route path="/matches/:id" element={
              <>
                <ScrollToTop />
                <DetailTicketPage />
              </>
            } />
          </Route>

            <Route element={<MypageLayout />}>
              <Route path="/messages" element={<MessageBox />} />
              <Route path="/notice" element={<Noticed />} />
              <Route path="/modifyprofile" element={<ModifyProfile />} />
              <Route path="/favoritematching" element={<FavoriteMatching />} />
              <Route path="/mymatchings" element={<MyMatchings />} />
            </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Layout = () => {
  return (
    <>
      <Introduction />
      <Category />
      <div>
        {<Outlet />}
      </div>
    </>
  );
}

const CategoryLayout = () => {
  return (
    <>
      <Category />
      <div>
        {<Outlet />}
      </div>
    </>
  );
}

const MypageLayout = () => {
  return (
    <div style={{display: "flex", flexDirection:"row"}}>
      <SideBar />
          {<Outlet />}
    </div>
  )
}

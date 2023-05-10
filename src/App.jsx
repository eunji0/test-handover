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
import MyPage from "./pages/myPage/myPage";
import FavoriteTicket from "./pages/myPage/FavoriteMatching";

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
            <Route path="/detailticket/:id" element={
              <>
                <ScrollToTop />
                <DetailTicketPage />
              </>
            } />
          </Route>
          <Route path="/mypage" element={<MyPage />} >
          </Route>
          {/* <Route path="/matches/:id/favorites" element={<FavoriteTicket />}/> */}
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

function CategoryLayout() {
  return (
    <>
      <Category />
      <div>
        {<Outlet />}
      </div>
    </>
  );
}
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from './component/Header'
import Category from "./component/Category";
import './App.css'
import AllPage from "./pages/AllPage";
import CampingPage from "./pages/CampingPage";
import EtcPage from "./pages/EtcPage";
import HotelPage from "./pages/HotelPage";
import ShowPage from "./pages/ShowPage";
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";
import DetailTicketPage from "./pages/DetailTicketPage";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Header />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/all" element={<AllPage/>} />
            <Route path="/camping" element={<CampingPage/>} />
            <Route path="/etc" element={<EtcPage/>} />
            <Route path="/hotel" element={<HotelPage/>} />
            <Route path="/show" element={<ShowPage/>} />
            <Route path="/all/detailticket/:ticket_id" element={<DetailTicketPage />} />
          </Route>
          <Route path="/favorite" element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Category />
      <div>
        {<Outlet/>}
      </div>
    </>
  );
}

export default App;

import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./Components/navbar";
import Login from "./pages/login";
import LandingPage from "../src/Components/LandingPage/landingPage.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

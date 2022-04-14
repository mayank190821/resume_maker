import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./Components/navbar";
import Login from "./pages/login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

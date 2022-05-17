import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { OpenLoginContext } from "./context.js";
import LandingPage from "../src/Components/LandingPage/landingPage.jsx";
import Signup from "./pages/signup";
import PrivateRouter from "./pages/privateRouter";
import DetailsPage from "./Components/FillResumeDataPage/DetailsPage";

function AppRouter() {
  const [open, setOpen] = useState(false);
  const [loginToggle, setLoginToggle] = useState(true);
  return (
    <BrowserRouter>
      <OpenLoginContext.Provider
        value={{ openLogin: open, setOpenLogin: setOpen }}
      >
        <Routes>
          <Route path="/editData" element={<PrivateRouter element={<DetailsPage/>} setOpen={setOpen}/>}/>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Dialog
          open={open}
          keepMounted
          onClose={() => {
            setOpen(false);
          }}
        >
          {loginToggle ? (
            <Login setOpen={setOpen} setLoginToggle={setLoginToggle} />
          ) : (
            <Signup setOpen={setOpen} setLoginToggle={setLoginToggle} />
          )}
        </Dialog>
      </OpenLoginContext.Provider>
    </BrowserRouter>
  );
}

export default AppRouter;

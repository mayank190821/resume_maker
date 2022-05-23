import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import { useState } from "react";
import { Dialog } from "@mui/material";
import { GlobalContext } from "./context.js";
import LandingPage from "../src/Components/LandingPage/landingPage.jsx";
import Signup from "./pages/signup";
import PrivateRouter from "./pages/privateRouter";
import DetailsPage from "./Components/FillResumeDataPage/DetailsPage";

function AppRouter() {
  const [open, setOpen] = useState(false);
  const [redirectPath, setRedirectPath] = useState("/");
  const [image, setImage] = useState();
  const [loginToggle, setLoginToggle] = useState(true);
  return (
    <BrowserRouter>
      <GlobalContext.Provider
        value={{ openLogin: open, setOpenLogin: setOpen, setRedirectPath : setRedirectPath, redirectPath: redirectPath, image: image,setImage: setImage, oldData:JSON.parse(sessionStorage.getItem("data"))}}
      >
        <Routes>
          <Route path="/editData" element={<PrivateRouter path="/editData" setRedirectPath={setRedirectPath} element={<DetailsPage/>} setOpen={setOpen}/>}/>
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
            <Login setOpen={setOpen} redirectPath={redirectPath} setRedirectPath={setRedirectPath} setLoginToggle={setLoginToggle} />
          ) : (
            <Signup setOpen={setOpen} redirectPath={redirectPath} setRedirectPath={setRedirectPath} setLoginToggle={setLoginToggle} />
          )}
        </Dialog>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default AppRouter;

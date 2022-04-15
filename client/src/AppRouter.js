import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/login";
import {useState} from "react";
import {Dialog} from "@mui/material";
import {OpenLoginContext} from "./context.js";
import LandingPage from "../src/Components/LandingPage/landingPage.jsx";

function AppRouter() {
  const [open, setOpen] = useState(false);
  
  return (
    <BrowserRouter>
      <OpenLoginContext.Provider value={{openLogin: open, setOpenLogin: setOpen}}>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
        <Dialog
          open={open}
          keepMounted
          onClose={() => {setOpen(false)}}
          >
          <Login setOpen={setOpen}/>
        </Dialog>
      </OpenLoginContext.Provider>
    </BrowserRouter>
  );
}

export default AppRouter;

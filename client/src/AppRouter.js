import {Routes, Route, BrowserRouter} from "react-router-dom";
import Navbar from "./Components/navbar";
import Login from "./pages/login";
import {useState} from "react";
import {Dialog} from "@mui/material";
import {OpenLoginContext} from "./context.js";

function AppRouter() {
  const [open, setOpen] = useState(false);
  
  return (
    <BrowserRouter>
      <OpenLoginContext.Provider value={{openLogin: open, setOpenLogin: setOpen}}>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
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

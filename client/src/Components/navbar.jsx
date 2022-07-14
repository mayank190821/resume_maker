import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Toolbar } from "@mui/material";
import { GlobalContext } from "./../context.js";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { setOpenLogin } = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <Box>
      <AppBar
        position="relative"
        style={{ height: "60px", backgroundColor: "white", padding: "0 50px" }}
      >
        <Toolbar style={{ color: "#006370" }}>
          <Typography
            variant="h5"
            sx={{ flexGrow: 1 }}
            style={{
              fontWeight: "500",
              letterSpacing: "2px",
              fontSize: "35px",
              fontFamily: "Beau Rivage, cursive",
            }}
          >
            ResumeMaker
          </Typography>
          {!sessionStorage.getItem("t") ? (
            <Button
              onClick={() => {
                setOpenLogin(true);
              }}
              style={{ backgroundColor: "#006370", color: "white" }}
              variant="h5"
            >
              LogIn{" "}
            </Button>
          ) : (
            <Button
              onClick={() => {
                sessionStorage.clear();
                navigate("/");
              }}
              style={{ backgroundColor: "#006370", color: "white" }}
              variant="h6"
            >
              {" "}
              LogOut{" "}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

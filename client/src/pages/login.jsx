import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  LockOutlined,
  Close,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

export default function LoginPage({setOpen}) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [flags, setFlags] = useState({
    showPassword: false,
  });

  const handleChange = (field) => (event) => {
    setUserData({ ...userData, [field]: event.target.value });
  };

  const handleFlag = (flag) => {
    setFlags({ ...flags, [flag]: !flags[flag] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("No server exists for now!");
  };

  return (
    <Box
      sx={{
        width: "28vw",
        minWidth: "320px",
        height: "50vh",
        padding: "30px",
        boxShadow: "1px 1px 5px 1px rgba(50,50,50,0.2)",
      }}
    >
      <Box
        onClick={() => {setOpen(false)}}
        sx={{
          float: "right",
          cursor: "pointer",
          position: "relative",
          top: "-20px",
          right: "-15px",
          width: "20px",
          height: "20px",
        }}
      >
        <Close />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "25px",
          "& > *": { marginRight: "20px" },
        }}
      >
        <Avatar style={{ backgroundColor: "#0d4783" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h6">Sign in</Typography>
      </Box>
      <form noValidate>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={handleChange("email")}
          value={userData.email}
          autoComplete="email"
          autoFocus
        />
        <FormControl variant="outlined" margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id="password"
            variant="outlined"
            onChange={handleChange("password")}
            value={userData.password}
            type={flags.showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    handleFlag("showPassword");
                  }}
                  edge="end"
                >
                  {flags.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password *"
          />
        </FormControl>
        <br />
        <Box mt={2} sx={{ justifyContent: "center", display: "flex" }}>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: "#0d4783" }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
        <Box mt={2} sx={{ width: "96%", textAlign: "right" }}>
          <Link to={`../signup`} style={{ textDecoration: "none" }}>
            {"New user? Sign Up"}
          </Link>
        </Box>
      </form>
      <Box mt={4}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright "} &copy;{" Resume Maker "}
          {"2022."}
        </Typography>
      </Box>
    </Box>
  );
}

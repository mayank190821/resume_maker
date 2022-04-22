import {
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    FormControl,
    InputAdornment,
    IconButton,
    Stack,
    OutlinedInput,
    InputLabel,
} from '@mui/material';
import React, { useState } from 'react';
import {
    LockOutlined,
    Close,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import {SignupAuth} from "../api/auth.api";


export default function Signup({ setOpen, setLoginToggle }) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [flags, setFlags] = useState({
        setFlags: false
    });
    const handleChange = (field) => (event) => {
        setUserData({ ...userData, [field]: event.target.value });
    }
    const handleFlag = (flag) => {
        setFlags({ ...flags, [flag]: !flags[flag] });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let nameRegex = /^[a-zA-Z]+$/
        let emailRegex = /^([a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$)/
        let passwordRegex = /^([0-9]*)(?=.*[a-z])(?=.*[!@#$%^&])(?=.*[^a-z0-9A-Z]).{8,20}$/
        if(!nameRegex.test(userData.name)){
            alert("Please use only Alphabet")
        }
        else if(!emailRegex.test(userData.email)){
            alert("Incorrect Email");
        }
        else if(!passwordRegex.test(userData.password) && !passwordRegex.test(userData.confirmPassword)){
            alert("Check Password and Confirm Password")
        }
        else{
            SignupAuth(userData).then((res)=>{
                console.log(res.status);
            });
        }
    }
    return (
        <Box
            sx={{
                width: "28vw",
                minWidth: "320px",
                padding: "30px",
                boxShadow: "1px 1px 5px 1px rgba(50,50,50,0.2)",
            }}
        >
            <Box
                onClick={() => { setOpen(false) }}
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
                <Typography variant="h6">Sign up</Typography>
            </Box>
            <form noValidate >
                <Stack direction="row" spacing={2}>

                    <TextField
                        variant="outlined"
                        required
                        id="Name"
                        label="Name"
                        name="Name"
                        onChange={handleChange("name")}
                        value={userData.name}
                        autoComplete="name"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={handleChange("email")}
                        value={userData.email}
                        autoComplete="email"
                        autoFocus
                    />
                </Stack>
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
                <FormControl variant="outlined" margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="Cpassword"
                        variant="outlined"
                        onChange={handleChange("confirmPassword")}
                        value={userData.confirmPassword}
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
                        label="Confirm password *"
                    />
                </FormControl>
                <Box mt={2} sx={{ justifyContent: "space-around", display: "flex" }}>
                    <Button
                        type="submit"
                        variant="contained"
                        style={{ backgroundColor: "#0d4783" }}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => { setLoginToggle(true) }}>
                        {"Sign In"}
                    </Button>
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
import React, {useContext} from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";
import {OpenLoginContext} from "./../context.js";

export default function NavBar(){
    const {setOpenLogin} = useContext(OpenLoginContext);
    return(
        <Box>
            <AppBar position="relative" style={{height: "60px",backgroundColor:"white", padding:"0 50px"}}>
                <Toolbar style={{color:"#006370"}}>
                <Typography variant="h5" sx= {{flexGrow:1}} style={{fontWeight:"500",letterSpacing:"2px",fontSize:"35px",fontFamily:"Beau Rivage, cursive"}}>
                    ResumeMaker
                </Typography>
                <Button onClick={() => {setOpenLogin(true)}} style={{backgroundColor:"#006370",color:"white"}} variant="h5"> LogIn </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
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
            <AppBar position="relative" style={{backgroundColor:"white"}}>
                <Toolbar style={{color:"#0d4783"}}>
                <Typography variant="h5" sx= {{flexGrow:1}}>
                    ResumeMaker
                </Typography>
                <Button onClick={() => {setOpenLogin(true)}} color="inherit" variant="h5"> LogIn </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Toolbar } from "@mui/material";

export default function NavBar(){
    return(
        <Box>
            <AppBar position="relative" style={{backgroundColor:"white"}}>
                <Toolbar style={{color:"#0d4783"}}>
                <Typography variant="h5" sx= {{flexGrow:1}}>
                    ResumeMaker
                </Typography>
                <Button color="#0d4783" variant="h5"> LogIn </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
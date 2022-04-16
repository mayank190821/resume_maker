import { Box, AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
        <div style={{ position:"relative", backgroundColor: 'white',color:"#be1952", height:"5vh"}}>
          <Typography style={{textAlign:"center", verticleAlign:"middle", lineHeight:"2"}}>
            &copy;Resume Maker
          </Typography>
        </div>
  )
}

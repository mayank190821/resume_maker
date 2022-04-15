import { Box, AppBar, Typography, Toolbar } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
        <div style={{ position:"relative", backgroundColor: 'white',color:"#0d4783", height:"5vh"}}>
          <Typography style={{textAlign:"center", verticleAlign:"middle", lineHeight:"2"}}>
            &copy;Resume Maker
          </Typography>
        </div>
  )
}

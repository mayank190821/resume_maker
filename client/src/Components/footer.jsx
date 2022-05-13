import { Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
        <div style={{width: "100vw", height: "40px", display: "flex", justifyContent:"center",alignItems: "center",backgroundColor: 'white',color:"#be1952" }}>
          <Typography style={{textAlign:"center", verticalAlign: "middle"}}>
            &copy; Resume Maker 2022
          </Typography>
        </div>
  )
}

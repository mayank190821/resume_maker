import React from 'react'
import NavBar from '../navbar'
import Footer from '../footer'
import { Box } from '@mui/material'
import Content1 from './content1'
export default function LandingPage() {
  return (
      <div>
        <NavBar />
        <Content1/>
        <Footer />
      </div>
  )
}

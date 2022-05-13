import React from 'react'
import NavBar from '../navbar'
import Footer from '../footer'
import Content1 from './content1'

export default function LandingPage() {
  return (
      <div style={{height: "100vh", display: "flex", flexDirection:"column"}}>
        <NavBar />
        <Content1/>
        <Footer />
      </div>
  )
}

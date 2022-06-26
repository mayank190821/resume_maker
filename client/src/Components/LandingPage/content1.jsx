import {Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import image1 from "../../images/resume1.webp";
import image2 from "../../images/resume2.webp";
import image3 from "../../images/resume4.png";
import { Link } from "react-router-dom";
import Styled from "styled-components";

let colors = ["#be1952", "#006370", "#00bf7a"];
let images = [image1, image2, image3];

const Div = Styled.div`
height:inherit;
 display:flex;
  color:white;
  width:100%;
  @media (max-width:768px){
      flex-wrap:wrap;
    }
`;
const TextDiv = Styled.div`
width:50%;
 text-align:left;
 padding:50px;
 @media (max-width:768px){
    text-align:center;
    width:100%;
    order:2;
 }
`;
const H2 = Styled.h1`
font-weight: 600;
margin: 0 0 20px 0;
font-family: Libre Baskerville, serif;
font-size:60px;
@media (max-width:768px){
    font-size:50px;
    width:100%;
}
`;
const ImageDiv = Styled.div`
overflow: hidden;
width: 50%;
display: flex;
align-items: center;
justify-content: center;
height: inherit;
@media (max-width:768px){
    order: 1;
    width:100%;
    display:none;
}
`;
export default function Content1() {
  const [color, setColor] = useState(colors[0]);
  const MainBox = Styled.div`
    flex-grow: 1;
    padding: 50px;
    height: calc( 100vh - 120px ) !important;
    background-color: ${color};
    overflow: hidden;
    position: relative;
    @media (max-width:768px){
        overflow-y:scroll;
    }
    `;
  const [image, setImage] = useState(images[0]);
  useEffect(() => {
    var i = 0;
    const interval = setInterval(() => {
      setColor(colors[i]);
      setImage(images[i]);
      i = (i + 1) % 3;
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <MainBox style={{ alignItems: "center", display: "flex" }}>
        <Div>
          <TextDiv>
            <H2>
              The CV that gets <br />
              the job (done)
            </H2>
            <Typography
              variant="h6"
              style={{
                marginTop: "40px",
                fontFamily: "Libre Baskerville",
                fontWeight: "400",
              }}
            >
              Standing out. Professional. Recruiter-approved.
              <br />
              Ready in minutes with our step-by-step builder.
            </Typography>
            <br />
            <br />
            <Link to="./editData" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  fontSize: "20px",
                  boxShadow: "0 0 5px 1px #0011118c",
                  fontWeight: "600",
                  color: "white",
                  background: "#ff8400",
                }}
              >
                Create Your Resume
              </Button>
            </Link>
          </TextDiv>
          <ImageDiv
          >
            <img
              src={image}
              alt=""
              style={{
                width: "300px",
                height: "400px",
                boxShadow: "0 0 5px 1px #0011118c",
                borderRadius: "20px",
              }}
            />
          </ImageDiv>
        </Div>
      </MainBox>
    </>
  );
}

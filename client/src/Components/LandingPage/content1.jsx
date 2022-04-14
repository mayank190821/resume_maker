import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import image1 from "../../images/resume1.webp";
import image2 from "../../images/resume2.webp";
// import image3 from "../../images/resume3.webp";
import image3 from "../../images/resume4.png";

let colors = ["#be1952","#006370","#00bf7a"];
let images=[image1,image2,image3];
export default function Content1(){
    const [color, setColor] = useState(colors[0]);
    const [image,setImage]= useState(image1[0]);
    useEffect(()=>{
        var i = 0;
        const interval = setInterval(()=>{
            setColor(colors[i]);
            setImage(images[i]);
            i=(i+1)%3;
        }, 2000);
        return (()=>{
            clearInterval(interval);
        })
    }, []);
    return (
        <>
            <Box sx={{flexGrow:1,p:"50px", height:"70vh",backgroundColor:color}} style={{ alignItems:"center", display:"flex"}}>
                <div style={{height:"inherit", display:"flex", color:"white",width:"100%"}}>
                    <div style={{width:"50%", textAlign:"left",padding:"50px"}} >
                        <Typography variant="h2" style={{fontWeight:"600", margin:"0 0 20px 0"}}>
                        The CV that gets <br/>the job (done)
                        </Typography>
                        <Typography variant="h5" style={{fontWeight:"550"}}>
                        Standing out. Professional. Recruiter-approved.<br/>
                        Ready in minutes with our step-by-step builder.
                        </Typography>
                        <br/>
                        <br/>
                        <Button style={{fontSize:"20px",boxShadow:"0 0 5px 1px #0011118c",fontWeight:"600",color:"white",background:"#ff8400"}}>Create Your Resume</Button>
                    </div>
                    <div style={{overflow:"hidden",width:"50%",display:"flex",alignItems:"center",justifyContent:"center",height:"inherit"}}>
                        <img src={image} alt="" srcset="" style={{width:"300px",height:"400px",boxShadow:"0 0 5px 1px #0011118c",borderRadius:"20px"}} />
                    </div>
                </div>
            </Box>
            
        </>
    )
}

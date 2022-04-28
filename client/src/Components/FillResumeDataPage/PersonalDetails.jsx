import React, { useState } from 'react'
import styledC from "styled-components";
import { TextField, Stack, styled } from '@mui/material';
function PersonalDetails({pDetails,setPDetails}) {
    
    const handleChange = (field) => (e) => {
        setPDetails({ ...pDetails, [field]: e.target.value });
    }
    return (
        <FormContainer>
            <form action="">
                <h1 style={{ color: "#006370" }}>Personal Details</h1>
                <Stack direction="row" spacing={3}>
                    <TextField
                        variant="outlined"
                        required
                        // fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        size="small"
                        value={pDetails.name}
                        autoFocus
                        sx={{ color: "#006370" }}
                        onChange={handleChange('name')}
                    />
                    <TextField
                        variant="outlined"
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        size="small"
                        value={pDetails.email}
                        onChange={handleChange('email')}
                    />

                </Stack>
                <br />
                <Stack direction="row" spacing={3}>
                    <TextField
                        variant="outlined"
                        required
                        id="address"
                        value={pDetails.address}
                        label="Address"
                        name="address"
                        autoComplete="address"
                        size="small"
                        onChange={handleChange('address')}
                    />
                    <TextField
                        variant="outlined"
                        required
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        value={pDetails.phone}
                        autoComplete="phone"
                        size="small"

                        onChange={handleChange('phone')}
                    />
                </Stack>
                <br />
                <Stack direction="row" spacing={3}>
                    <TextField
                        variant="outlined"
                        id="git"
                        label="GitHub Link"
                        name="git"
                        autoComplete="git"
                        size="small"
                        value={pDetails.github}
                        onChange={handleChange('github')}
                    />
                    <TextField
                        variant="outlined"
                        id="Leetcode"
                        label="Leetcode Link"
                        name="leetcode"
                        autoComplete="leetcode"
                        size="small"
                        value={pDetails.leetcode}
                        onChange={handleChange('leetcode')}
                    />
                </Stack>
                <br />
                <TextField
                    variant="outlined"
                    id="portfolio"
                    label="Portfolio Link"
                    name="portfolio"
                    autoComplete="portfolio"
                    size="small"
                    value={pDetails.portfolio}
                    onChange={handleChange('portfolio')}

                />
            </form>
        </FormContainer>
    )
}
const FormContainer = styledC.div`
    // border:2px solid brown;
    display:flex;
    height:fit-content;
    overflow:scroll;
    justify-content:center;
    align-items:center;
    form{
        display:flex;
        flex-direction:column;
        border-radius:10px;
        box-shadow: inset 0 0px 12px 2px #bdc0c1a6;
        padding:5px 20px;
        margin-top:50px;
        overflow:scroll;
        margin-bottom:15px;
        min-height:50vh;
        max-height:70vh;
        align-items:center;
        #multiLinks{
            #addLink{
                border-radius:50%;
                border:0px;
                // background-color:red;
                color:white;
                cursor:pointer;
            }
            .deleteLink{
                display:flex;
                background:#edeaea;
                margin:5px;
                border-radius:10px;
                width:fit-content ;
                padding:5px;

                button{
                    border:0px;
                    background:transparent;
                    color:red
                }
            }
        }
    }
`;
export default PersonalDetails
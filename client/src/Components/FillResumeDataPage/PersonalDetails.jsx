import React, { useRef, useEffect, useState } from "react";
import styledC from "styled-components";
import EditIcon from "@mui/icons-material/EditOutlined";
import { TextField, Stack, Badge, Avatar } from "@mui/material";

function PersonalDetails({ pDetails, setPDetails }) {

  const inputFile = useRef();
  const [selected, setSelected] = useState();

  useEffect(() => {
    if (selected) {
      const image = URL.createObjectURL(selected);
      setPDetails({ ...pDetails, photo: image });
      return () => {
        URL.revokeObjectURL(image);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);
  
  const handleChange = (field) => (e) => {
    setPDetails({ ...pDetails, [field]: e.target.value });
  };
  const handleImage = (e) => {
    if (e.target.files && e.target.files.length !== 0)
      setSelected(e.target.files[0]);
  };
  
  return (
    <FormContainer>
      <form action="">
        <h1 style={{ color: "#006370", margin: "10px 0px 0px 0px" }}>
          Personal Details
        </h1>
        <Badge
          badgeContent={
            <Avatar
              style={{
                width: "25px",
                height: "25px",
                backgroundColor: "royalblue",
                marginBottom: "15px",
                marginRight: "12px",
                border: "2px solid white",
                cursor: "pointer",
              }}
              onClick={() => inputFile.current.click()}
            >
              <EditIcon sx={{ fontSize: "15px" }} />
            </Avatar>
          }
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          {selected ? (
            <img
              src={pDetails.photo}
              style={{
                margin: "10px",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                boxShadow: "0px 0px 10px 2px rgba(150,150,150,0.3)",
              }}
              alt="unable to access file"
            />
          ) : (
            <Avatar
              style={{
                margin: "10px",
                width: "70px",
                height: "70px",
              }}
            />
          )}

          <input
            accept="image/*"
            id="file"
            ref={inputFile}
            style={{ display: "none" }}
            onChange={handleImage}
            type="file"
          />
        </Badge>
        <Stack direction="row" spacing={3}>
          <TextField
            variant="outlined"
            required
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            size="small"
            value={pDetails.name}
            autoFocus
            sx={{ color: "#006370" }}
            onChange={handleChange("name")}
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
            onChange={handleChange("email")}
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
            onChange={handleChange("address")}
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
            onChange={handleChange("phone")}
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
            onChange={handleChange("github")}
          />
          <TextField
            variant="outlined"
            id="Leetcode"
            label="Leetcode Link"
            name="leetcode"
            autoComplete="leetcode"
            size="small"
            value={pDetails.leetcode}
            onChange={handleChange("leetcode")}
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
          onChange={handleChange("portfolio")}
        />
      </form>
    </FormContainer>
  );
}
const FormContainer = styledC.div`
    display:flex;
    height:85%;
    justify-content:center;
    align-items:center;
    form{
        display:flex;
        flex-direction:column;
        border-radius:6px;
        box-shadow: 0 0px 22px 2px #bcbcbc77;
        padding:0px 20px 30px 20px;
        min-height:50vh;
        max-height:70vh;
        align-items:center;
        justify-content: space-around;
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
export default PersonalDetails;

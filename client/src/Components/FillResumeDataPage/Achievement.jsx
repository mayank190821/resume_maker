import { Stack, TextField, Grid, Button, Divider, Chip } from "@mui/material";
import React, { useState } from "react";
import styledC from "styled-components";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function SnaDetails({ snaDetails, setSnaDetails }) {
  const [sna, setSna] = useState({
    proSkills: "",
    techSkills: "",
    achievements: "",
  });
  const handleChange = (field) => (e) => {
    e.preventDefault();
    setSna({ ...sna, [field]: e.target.value });
  };
  function capitalize(str) {
    return str[0].toUpperCase() + str.substr(1).toLowerCase();
  }
  const handleAdd = (field) => {
    let data = [...snaDetails[field]];
    if (data.indexOf(capitalize(sna[field])) === -1 && sna[field] !== "" && data.length < 10)
      setSnaDetails({
        ...snaDetails,
        [field]: [...snaDetails[field], capitalize(sna[field])],
      });
    setSna({ ...sna, [field]: "" });
  };

  function handleDelete(field, elem) {
    let data = [...snaDetails[field]];
    let i = data.indexOf(elem);
    data.splice(i, 1);
    setSnaDetails({ ...snaDetails, [field]: data });
  }
  return (
    <Stack direction="row" spacing={5} style={stackStyles}>
      <Grid container spacing={5}>
        <Grid item xs={6} style={gridStyles}>
          <form>
            <TextField
              variant="outlined"
              required
              id="tech"
              label="Technical Skills"
              name="tech-skill"
              autoComplete="name"
              size="small"
              fullWidth
              value={sna.techSkills}
              autoFocus
              sx={{ color: "#006370" }}
              helperText="Max 10 skills"
              onChange={handleChange("techSkills")}
            ></TextField>
            <Button
              color="primary"
              type="submit"
              variant="contained"
              size="small"
              sx={{ float: "right", marginTop: "10px" }}
              onClick={(e) => {
                e.preventDefault();
                handleAdd("techSkills");
              }}
            >
              <AddRoundedIcon /> Add
            </Button>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {snaDetails.techSkills.map((elem, ind) => {
              return (
                <Chip
                  label={elem}
                  key={elem + ind}
                  sx={{ marginRight: "10px", marginTop:"10px"  }}
                  onDelete={() => {
                    handleDelete("techSkills", elem);
                  }}
                />
              );
            })}
          </div>
          <Divider sx={{ margin: "20px auto", height: "5px", width: "100%" }} />
          <form>
            <TextField
              variant="outlined"
              required
              id="pro"
              label="Professional Skills"
              name="pro-skill"
              autoComplete="name"
              size="small"
              fullWidth
              value={sna.proSkills}
              sx={{ color: "#006370" }}
              onChange={handleChange("proSkills")}
              helperText="Max 10 skills"
            ></TextField>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              size="small"
              sx={{ float: "right", marginTop: "10px"  }}
              onClick={(e) => {
                e.preventDefault();
                handleAdd("proSkills");
              }}
            >
              <AddRoundedIcon /> Add
            </Button>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            {snaDetails.proSkills.map((elem, ind) => {
              return (
                <Chip
                  label={elem}
                  key={elem + ind}
                  sx={{ marginRight: "10px", marginTop:"10px" }}
                  onDelete={() => {
                    handleDelete("proSkills", elem);
                  }}
                />
              );
            })}
          </div>
        </Grid>
        <Grid item xs={6} style={gridStyles}>
          <form>
            <TextField
              variant="outlined"
              required
              id="achieve"
              label="Achievements"
              name="achieve" 
              autoComplete="name"
              size="small"
              fullWidth
              value={sna.achievements}
              sx={{ color: "#006370" }}
              helperText="Maximum 10"
              onChange={handleChange("achievements")}
            ></TextField>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              size="small"
              sx={{ float: "right", marginTop: "10px"}}
              onClick={(e) => {
                e.preventDefault();
                handleAdd("achievements");
              }}
            >
              <AddRoundedIcon /> Add
            </Button>
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {snaDetails.achievements.map((elem, ind) => {
              return (
                <Chip
                  label={elem}
                  key={elem + ind}
                  sx={{ marginRight: "10px", marginTop:"10px" }}
                  onDelete={() => {
                    handleDelete("achievements", elem);
                  }}
                />
              );
            })}
          </div>
        </Grid>
      </Grid>
    </Stack>
  );
}
const stackStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  width: "100vw",
  padding: "50px",
  boxSizing: "border-box",
  height: "85%",
};
const gridStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  boxSizing: "border-box"
}
export default SnaDetails;

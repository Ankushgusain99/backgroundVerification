import { useState } from "react";
import {Grid, IconButton, Popover, Typography, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const EducationalDetails = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [formData, setFormData] = useState({});

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSave = () => {
    // Handle saving form data here
    console.log("Form data:", formData);
    handleClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
    <h1>Educational Details</h1>
    <Grid items xs={12}>
      <IconButton onClick={handleClick}>
        <AddIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <div style={{ padding: "20px", minWidth: "200px" }}>
          <Typography variant="h6" gutterBottom>
            Add Educational Details
          </Typography>
          <form>
            <TextField
              name="institution name"
              label="Institution name"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="Degree"
              label="degree"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="Major"
              label="major"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />
            <TextField
              name="percentage"
              label="percentage"
              variant="outlined"
              margin="normal"
              fullWidth
              onChange={handleChange}
            />
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
              <Button variant="contained" onClick={handleSave} style={{ marginRight: "10px" }}>
                Save
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
            </div>
          </form>
        </div>
      </Popover>
      </Grid>
      <Link to='/experiencedetails'>
      <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "  type="button" style={{marginTop:'20PX',height:'30px',width:'310px',borderRadius:'5px',backgroundColor:'darkblue',color:'white',border:'5px'}}>
        Save And Next
      </button>
      </Link>
    </>
  );
};

export default EducationalDetails;

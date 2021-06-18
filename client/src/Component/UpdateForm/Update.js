import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./Style";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateprofile } from "../../redux/actions/auth";
import Navbar from "../Navbar/Navbar.js";
import { useHistory } from "react-router";
import InternetConn from "../InternetConn/InternetConn";

const Update = () => {
  const history = useHistory();
  let isloading = useSelector((state) => state.auth.isloading);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [image, setImage] = useState(null);
  const user = JSON.parse(localStorage.getItem("profile"));
  const fullname = user?.result?.fullname;
  const username = user?.result?.username;
  const currentId = user?.result?._id;
  const [postData, setPostData] = useState({
    fullname: fullname,
    username: username,
  });

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostData({ ...postData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram_clone");
    data.append("cloud_name", "daynsu4jq");
    try {
      const image = await axios.post(
        "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
        data
      );
      dispatch(
        updateprofile(
          currentId,
          { ...postData, pic: image?.data?.secure_url },
          history
        )
      );
    } catch (err) {}
  };
  console.log(isloading);
  if (isloading) {
    return (
      <>
        <InternetConn text=" Please wait while we Update your post!!"></InternetConn>
      </>
    );
  }
  if (!user?.result?.name && !user?.result?._id) {
    return (
      <>
        <Navbar></Navbar>
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Please Sign In to create your own memories and like other's
            memories.
          </Typography>
        </Paper>
        {history.push("/")}
      </>
    );
  }

  return (
    <div>
      <Navbar></Navbar>

      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={handleSubmit}
        >
          <Typography variant="h3">Update the profile</Typography>
          <TextField
            name="username"
            variant="outlined"
            label="username"
            fullWidth
            inputProps={{ style: { fontSize: 20 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            value={postData.username}
            onChange={handlechange}
          />
          <TextField
            name="fullname"
            variant="outlined"
            label="fullname"
            inputProps={{ style: { fontSize: 20 } }}
            InputLabelProps={{ style: { fontSize: 15 } }}
            fullWidth
            value={postData.fullname}
            onChange={handlechange}
          />
          <div
            style={{ marginBottom: "20px", display: "flex" }}
            className="btn #64b5f6 blue darken-1"
          >
            <span>Update Image</span>
            <input
              name="pic"
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Update
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Update;

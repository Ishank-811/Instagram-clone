import useStyles from "./Style";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createposts } from "../../redux/actions/post";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import InternetConn from "../InternetConn/InternetConn";
const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [postData, setPostData] = useState({
    name: "",
    title: "",
    message: "",
    image: "",
  });
  const isloading = useSelector((state) => state.auth.isloading);
  const [image, setImage] = useState(null);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "START_LOADING" });
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram_clone");
    data.append("cloud_name", "daynsu4jq");
    try {
      const image = await axios.post(
        "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
        data
      );
      let loginname = user?.result?.name;

      dispatch(
        createposts(
          {
            ...postData,
            image: image?.data?.secure_url,

            name: loginname ? user?.result?.name : user?.result?.fullname,
          },
          history
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  if (isloading) {
    return (
      <>
        <InternetConn text="please wait we are creating your post"></InternetConn>
      </>
    );
  }
  const clear = () => {
    setPostData({ title: "", message: "" });
  };

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPostData({ ...postData, [name]: value });
  };

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
  } else {
    return (
      <>
        <Navbar></Navbar>
        <Paper className={classes.paper}>
          <form
            autoComplete="off"
            noValidate
            className={`${classes.root} ${classes.form}`}
            onSubmit={handleSubmit}
          >
            <Typography variant="h3">Create a post</Typography>
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              multiline
              required
              inputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              value={postData.title}
              onChange={handlechange}
            />
            <TextField
              name="message"
              variant="outlined"
              label="Message"
              fullWidth
              multiline
              required
              rows={3}
              inputProps={{ style: { fontSize: 20 } }}
              InputLabelProps={{ style: { fontSize: 15 } }}
              value={postData.message}
              onChange={handlechange}
            />
            <div
              style={{ marginBottom: "20px", display: "flex" }}
              className="btn #64b5f6 blue darken-1"
            >
              <span>Uplaod Image</span>
              <input
                name="image"
                type="file"
                required
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="medium"
              onClick={clear}
            >
              Clear
            </Button>
          </form>
        </Paper>
      </>
    );
  }
};

export default Form;

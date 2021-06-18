import React from "react";
import { Paper, CircularProgress, Typography } from "@material-ui/core";
import { Offline, Online } from "react-detect-offline";
import Navbar from "../Navbar/Navbar";
import "./internetConn.css";
const InternetConn = ({ text }) => {
  return (
    <>
      <Online>
        {
          <Paper style={{ height: "100vh" }} className="loadingpaper">
            <Navbar></Navbar>
            <Typography
              style={{ position: "relative", top: "30%" }}
              variant="h3"
              align="center"
            >
              {text}
            </Typography>
            <CircularProgress
              style={{
                color: "red",
                position: "relative",
                top: "40%",
                left: "50%",
              }}
              size="7em"
            />
          </Paper>
        }
      </Online>
      <Offline>
        {
          <Paper style={{ height: "100vh" }} className="loadingpaper">
            <Navbar></Navbar>
            <Typography
              style={{ position: "relative", top: "30%" }}
              variant="h3"
              align="center"
            >
              You are offline check your connection
            </Typography>
            <CircularProgress
              style={{
                color: "red",
                position: "relative",
                top: "40%",
                left: "50%",
              }}
              size="7em"
            />
          </Paper>
        }
      </Offline>
    </>
  );
};

export default InternetConn;

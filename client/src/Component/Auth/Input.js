import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  name,
  handleChange,
  half,
  type,
  autoFocus,
  handleShowPassword,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      placeholder="password"
      onChange={handleChange}
      fullWidth
      required
      type={type}
      InputProps={
        name === "password"
          ? {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  style={{
                    position: "relative",
                    top: "-46px",
                    left: "107px",
                  }}
                  onClick={handleShowPassword}
                >
                  {type === "password" ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }
          : null
      }
    />
  </Grid>
);

export default Input;

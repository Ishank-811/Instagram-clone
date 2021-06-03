import React, { useState } from 'react';
import axios from "axios"  ; 
import { useHistory } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { Button} from "@material-ui/core";
import "./index.css";
import Input from "../Input"
import {signup } from "../../../redux/actions/auth" ; 
import { GoogleLogin } from "react-google-login";
import { Offline, Online } from "react-detect-offline";
const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formdata, setform] = useState({
    email: '',
    fullname: '',
    username: '',
    password: '',
   
  });
  let error = useSelector(state => state.auth.signup_error) ; 
  console.log(error) ; 
  const [image, setImage] = useState(null);

  const [showPassword, setshowPassword] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "instagram_clone");
        data.append("cloud_name", "daynsu4jq");
    try{
      const image = await axios.post(
        "https://api.cloudinary.com/v1_1/daynsu4jq/image/upload",
        data
      );
        
      dispatch(signup({...formdata ,  pic: image?.data?.secure_url }, history)) ; 
   
  }
  catch(err){ 
      console.log(err) ; 
  }
  }
  const handleShowPassword = () =>
    setshowPassword((prevShowpasword) => !prevShowpasword);

    const googleSuccess = async (res) => {
      const result = res?.profileObj;
      const token = res?.tokenId;
      console.log(result) ; 
      try {
          dispatch(signup({email:result.email , fullname:result.name  ,id:res.googleId  , token}, history)) ; 
    
           console.log(result , token) ; 
          alert("you are logged in")  ;
      } catch (err) {
          console.log(err);
          alert("error")  ;
      }
  };
  const googleFailure = () => {
      console.log("google failed to singin");
  };
  


  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setform({ ...formdata, [name]: value });
  }
  return (
    <main>
       <Offline>You're offline right now. Check your connection.</Offline>
      <div className="page">
        <div className="header">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="Instagram"></img>
          <p>Sign up to see photos and videos from your friends.</p>
          {/* <button><i className="fab fa-facebook-square"></i> Log in with Facebook</button> */}
          <GoogleLogin
                        clientId="686063206026-pb2taeqd40h2is1obbt6hgsmblorgua6.apps.googleusercontent.com"
                        render={(renderprops) => (
                            <Button
                              
                                color="primary"
                                fullWidth
                                onClick={renderprops.onClick}
                                disabled={renderprops.disabled}
                                // startIcon={<Icon />}  
                                variant="contained"
                            >
                                google Signin
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    ></GoogleLogin>
          <div>

          </div>
        </div>
        <div className="container">
        {error!==null ? 
          <h1 style={{color:"red" , fontWeight:"500"}}> {error}</h1> : " " 
           }
          <form onSubmit={handleSubmit} action="">
            <input type="text" name="email" onChange={handleChange} placeholder="Mobile Number or Email"></input>
            <input type="text" name="fullname" onChange={handleChange} placeholder="Full Name"></input>
            <input type="text" name="username" onChange={handleChange} placeholder="Username"></input>
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            ></Input> 
              <input
              name="selectedFile"
              type="file"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button className="submit">Sign up</button>
          </form>

          <ul>
            <li>By signing up, you agree to our</li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/datapolicy">Data Policy</a></li>
            <li>and</li>
            <li><a href="/cookies">Cookies Policy</a> .</li>
          </ul>
        </div>
      </div>
      <div className="option">
        <p>Have an account? <a href="/">Log in</a></p>
      </div>
      <div className="otherapps">
        <p>Get the app.</p>
        <button type="button"><i className="fab fa-apple"></i> App Store</button>
        <button type="button"><i className="fab fa-google-play"></i> Google Play</button>
      </div>
      <div className="footer">
        <ul>
           <li><a href="https://about.instagram.com/">ABOUT</a></li>
                      <li><a href="https://about.instagram.com/en_US/blog">Blog</a></li>
                      <li><a href="https://www.instagram.com/developer/">API</a></li>
                      <li><a href="https://about.instagram.com/about-us/careers">JOBS</a></li>
                      <li><a href="https://help.instagram.com/519522125107875">PRIVACY</a></li>
                      <li><a href="https://help.instagram.com/581066165581870">TERMS</a></li>
                      <li><a href="https://www.instagram.com/explore/locations/">LOCATIONS</a></li>
                      <li><a href="https://www.instagram.com/directory/profiles/">TOP ACCOUNTS</a></li>
                      <li><a href="https://www.instagram.com/directory/hashtags/">HASHTAGS</a></li>
                     
        </ul>
        <p>© 2020 PICTUREGRAM</p>
      </div>
    </main>
  )
}

export default Signup

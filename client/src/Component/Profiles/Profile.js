import React, { useState, useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { myprofile } from "../../redux/actions/post";
import Profilepost from "./Profilepost";
import Header from "./Header";
import {CircularProgress} from "@material-ui/core";
import Navbar from "../Navbar/Navbar"; 
const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  let posts = useSelector((state) => state.profile.myprofile);
  const isloading = useSelector(state => state.auth.isloading)
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  const follow_number = user?.result?.followers.length;
  const following_number = user?.result?.following.length;
  const profile_pic = user?.result?.pic;
const numberofpost=posts?.length;
 
 
  const username = user.result.name ? user.result.name : user.result.fullname;
  useEffect(() => {
    dispatch(myprofile());
    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  if(isloading){
    return <>
  <CircularProgress style={{color:"red", position:"relative" , top:"50%" ,left:"50%"}} size="7em"  />
    </>
  }

  return (
    <>
    <Navbar></Navbar>
      <Header
        profile_pic={profile_pic}
        following_number={following_number}
        follow_number={follow_number}
        username={username}
        numberofpost={numberofpost}
       
      ></Header>

      <main>
        <div style={{ width: "100%" }} className="container">
          <div className="gallery">
            {posts?.map((post) => (
              <Profilepost key={post._id} posts={post}></Profilepost>

            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;

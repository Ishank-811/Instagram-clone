import React, { useState, useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { myprofile } from "../../redux/actions/post";
import Profilepost from "./Profilepost";
import Header from "./Header";
import Navbar from "../Navbar/Navbar";
import { useHistory } from "react-router";
import { Offline } from "react-detect-offline";
import InternetConn from "../InternetConn/InternetConn";
const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  let posts = useSelector((state) => state.profile.myprofile);
  const isloading = useSelector((state) => state.auth.isloading);
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));

  const follow_number = user?.result?.followers.length;
  const following_number = user?.result?.following.length;
  const profile_pic = user?.result?.pic;
  const numberofpost = posts?.length;

  let username;
  if (user) {
    username = user.result.name ? user.result.name : user.result.fullname;
  }
  useEffect(() => {
    dispatch(myprofile());
    setuser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const content = "Please wait while we redirect you to your profile";
  if (isloading) {
    return (
      <>
        <InternetConn text={content}></InternetConn>
      </>
    );
  }
  if (!user?.result?.name && !user?.result?._id) {
    return (
      <>
        <Navbar></Navbar>

        {history.push("/")}
      </>
    );
  }
  return (
    <>
      <Offline>You're offline right now. Check your connection.</Offline>
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

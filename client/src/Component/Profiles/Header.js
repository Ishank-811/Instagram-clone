import React from 'react'
import "./index.css";
import { Link } from "react-router-dom";
import profile_pic from "./image/profile_pic.jpg";
const Header = (props) => {


  return (
    <header>
      <div className="container">
        <div className="profile">
          <div className="profile-image">
            <img
              src={props?.profile_pic ? props?.profile_pic : profile_pic}
              alt=""
            ></img>
          </div>

          <div className="profile-user-settings">
            <h1 style={{ marginBottom: "20px" }} className="profile-user-name">{props.username}</h1>
            <Link to="/update">
              <button

                className="btn profile-edit-btn">Edit Profile</button>
            </Link>
            <Link to="/Create">
              <button style={{marginTop :"10px" , marginBottom:"10px"}}

                className="btn profile-edit-btn">Create Post</button>
            </Link>
          </div>
          
          <div className="profile-stats">
            <ul>
              <li>
                <span className="profile-stat-count">{props?.numberofpost}</span> posts
                </li>
              <li>
                <span className="profile-stat-count">{props?.follow_number}</span> followers
                </li>
              <li>
                <span className="profile-stat-count">{props?.following_number}</span> following
                </li>
            </ul>
          </div>

          <div className="profile-bio">
            <p>
              <span className="profile-real-name">Jane Doe</span> Lorem ipsum
                dolor sit, amet consectetur adipisicing elit 📷✈️🏕️
              </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

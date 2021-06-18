import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { myprofile } from "../../redux/actions/post";
import profilepic from "../Profiles/image/profile_pic.jpg";
import "./index.css";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";
export default function PrimarySearchAppBar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  const fetchprofile = () => {
    dispatch(myprofile());
    history.push("/Profile");
  };
  const user = useState(JSON.parse(localStorage.getItem("profile")));

  const profile_pic = user["0"]?.result?.pic;

  return (
    <nav className="navbar">
      <Link to="/Home">
        <section className="logo-section">
          <img
            className="logo"
            alt="logo"
            src="https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png"
          />
          <div></div>
          <img
            className="logoname"
            alt="logoname"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
          />
        </section>
      </Link>
      <form className="search-section">
        <input
          className="input-search"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
      <section className="icons-section">
        <img
          data-tip="Profile"
          className="profile_pic"
          src={profile_pic ? profile_pic : profilepic}
          alt="profile_pic"
          onClick={fetchprofile}
        ></img>

        <div
          data-tip="Logout"
          className="fa fa-sign-out-alt"
          onClick={logout}
        ></div>
        <ReactTooltip />
      </section>
    </nav>
  );
}

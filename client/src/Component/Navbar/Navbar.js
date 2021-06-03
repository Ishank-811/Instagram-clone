import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { myprofile } from "../../redux/actions/post";
import profilepic from "../Profiles/image/profile_pic.jpg" ;
import "./index.css"
import ReactTooltip from 'react-tooltip';
import {Link} from "react-router-dom"; 
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
  const user  =useState(JSON.parse(localStorage.getItem('profile'))) ; 
  
  const profile_pic = user["0"]?.result?.pic;
  
  
  return (
    //     <div >
    // <Button variant="contained"  color="secondary" onClick={logout} >Logout</Button>
    //     </div>

    <nav class="navbar">
    <Link to="/Home">
      <section class="logo-section">
        <img
          class="logo"
          alt="logo"
          src="https://seeklogo.com/images/I/instagram-new-2016-glyph-logo-84CB825424-seeklogo.com.png"
        />
        <div></div>
        <img
          class="logoname"
          alt="logoname"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
        />
      </section>
      </Link>
      <form class="search-section">
        <input
          class="input-search"
          type="search"
          name="search"
          placeholder="Search"
        />
      </form>
      <section class="icons-section">
        
    
      <img data-tip="Profile" class="profile_pic" src={profile_pic?profile_pic:profilepic} alt="profile_pic" onClick={fetchprofile}></img>
     
      <a data-tip="Logout" class="fa fa-sign-out-alt" onClick={logout} ></a>
     <ReactTooltip/>
      </section>
    </nav>
  );
}

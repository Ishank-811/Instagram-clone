import React ,{useState , useEffect} from 'react'
import "./index.css";
import {useDispatch} from "react-redux" ; 
import { follow , unfollow } from "../../../redux/actions/post";
import profilepic from "../image/profile_pic.jpg"; 
const Header = (props) => {

const dispatch = useDispatch();

const userid = JSON.parse(localStorage.getItem("profile"));

const[showfollow , setshowfollow] = useState(false) ;

const follow_number = props.followers.findIndex((id) => id ===String(userid?.result?._id)); 

const profile_pic = props?.userinfo["0"].pic 
const followbtn = ()=>{
 
  dispatch(follow({followId :props?.userinfo["0"]._id , userid:userid?.result?._id   }))
   
  props.onselect(); 
}
const unfollowbtn = ()=>{
 
  dispatch(unfollow({unfollowId :props?.userinfo["0"]._id , userid:userid?.result?._id   }))
  props.onselect(); 
}
useEffect(() => {
  const follow_number = props.followers.findIndex((id) => id ===String(userid?.result?._id)); 
  if(follow_number>-1){
    setshowfollow(true) ; 
  }
  else{
    setshowfollow(false) ; 
  } 
}, [followbtn,unfollowbtn])


    return (
        <header>
        <div className="container">
          <div className="profile">
            <div className="profile-image">
              <img
                src={profile_pic?profile_pic:profilepic}
                alt=""
              ></img>
            </div>

            <div className="profile-user-settings">
            {props.userinfo ?
              <h1 style={{marginBottom:"20px"}} className="profile-user-name">{ props.userinfo["0"].fullname} </h1>
             : null  }
{ showfollow ? 
              <button className="btn profile-edit-btn" 
              onClick={unfollowbtn}
              // onClick={followbtn}
              >
              unfollow

              </button>  :   
              <button className="btn profile-edit-btn" 
              onClick={followbtn}
              // onClick={followbtn}
              >
              follow

              </button>
}
              <button
                className="btn profile-settings-btn"
                aria-label="profile settings"
              > 
               
              </button>
            </div>

            <div className="profile-stats">
              <ul>
                <li>
                  <span className="profile-stat-count">{props.numberOfPost}</span> posts
                </li>
                <li>
                  <span className="profile-stat-count">{props.followers.length}</span> followers
                </li>
                <li>
                  <span className="profile-stat-count">{props.following.length}</span> following
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

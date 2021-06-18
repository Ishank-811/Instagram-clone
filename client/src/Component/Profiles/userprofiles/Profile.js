import React, {useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Profilepost from "./Profilepost";
import Header from "./Header";
 
import { userprofile } from "../../../redux/actions/post";
import Navbar from "../../Navbar/Navbar"; 
import InternetConn from "../../InternetConn/InternetConn";
 
const Profile = () => {
    const dispatch = useDispatch();
    const location = useLocation();
 
    const { id } = useParams();
    const isloading = useSelector(state => state.auth.isloading)
    let posts = useSelector((state) => state.profile.userprofile);
     let userinfo ;
   
    if(posts){
     userinfo=posts["1"]?posts["1"]:null ;
    }
  
    let userpsot ;
    let numberOfPost;   
    if(posts){
    userpsot = posts["0"];
    numberOfPost=userpsot?.length;  
    }   

    useEffect(() => {
        dispatch(userprofile(id));
    }, [location , id , dispatch]);

const submit = ()=>{
    console.log(id); 
    dispatch(userprofile(id));
 }
 const content = "Please wait while we redirect you "
 if (isloading) {
    return (
      <>
       <InternetConn text={content}></InternetConn>
      </>
    );
  }
   
    return (
        <>
      
        <Navbar></Navbar>
       
         {
            userinfo?
            <Header numberOfPost={numberOfPost} isloading={isloading} following={userinfo["0"]?.following} followers= {userinfo["0"]?.followers} userinfo={userinfo} onselect={submit}></Header>
            :null
        }
            <main>
                <div style={{ width: "100%" }} className="container">
                    <div className="gallery">
                 {  userpsot? 
                      userpsot.map(userpso => 
                     <Profilepost posts={userpso}></Profilepost> )
                 :null}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Profile;

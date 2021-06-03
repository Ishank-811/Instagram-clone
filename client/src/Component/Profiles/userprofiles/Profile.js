import React, {useEffect } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Profilepost from "./Profilepost";
import Header from "./Header";
import {  Paper , CircularProgress} from "@material-ui/core";
import { userprofile } from "../../../redux/actions/post";
import useStyles from '../../UpdateForm/Style';
import Navbar from "../../Navbar/Navbar"; 
const Profile = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const classes = useStyles();
    const { id } = useParams();
    const isloading = useSelector(state => state.auth.isloading)
    let posts = useSelector((state) => state.profile.userprofile);
     let userinfo ;
   
    if(posts){
     userinfo=posts["1"]?posts["1"]:null ;
    }
    if(userinfo){
    console.log(userinfo["0"]?.followers?.length); 
    }
    let userpsot ;
    let numberOfPost;   
    if(posts){
    userpsot = posts["0"];
    numberOfPost=userpsot?.length;  
    }   

    useEffect(() => {
        dispatch(userprofile(id));
    }, [location]);

const submit = ()=>{
    console.log(id); 
    dispatch(userprofile(id));
 }

  if(isloading){
      return <>
    <CircularProgress style={{color:"red", position:"relative" , top:"50%" ,left:"50%"}} size="7em"  />
      </>
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

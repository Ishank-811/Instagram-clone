import React, {useState,  useEffect } from 'react'
import "./Home.css"
import {CircularProgress} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import PrimarySearchAppBar from '../Navbar/Navbar';
import Post from './Post/Post';
import { getposts ,  removeuserprofile } from "../../redux/actions/post";
import Infintescroll from "react-infinite-scroll-component";

import Aside from "./Aside_Post/Aside";
const Home = () => {
    const dispatch = useDispatch();
 
    const isloading = useSelector(state => state.auth.isloading)
    useEffect(() => {
        dispatch(getposts());
        dispatch(removeuserprofile()) ; 
    }, [dispatch]);

    let posts = useSelector(state => state.posts);
    const [page, setpage] = useState(1);
    console.log(posts) ; 
    // console.log(isloading) ; 
  
    return (
        <>
        <Aside></Aside>
            <PrimarySearchAppBar />          
            <div className="Home">
            
             {
                 isloading? <> 
    <CircularProgress style={{color:"red", position:"relative" , top:"50%" , left:"40%"}} size="7em" />
  </>:
                 
                 posts.map(post => {
                 return(
                 <>
                 
               
               
               <Post key={post._id} post={post} comments={posts.comments}/>
             
               </>
              ) })}
        </div>

        </>
    )
}

export default Home

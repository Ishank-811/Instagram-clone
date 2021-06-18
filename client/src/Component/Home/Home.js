import React, {useEffect } from 'react'
import "./Home.css"
import { useDispatch, useSelector } from "react-redux";
import PrimarySearchAppBar from '../Navbar/Navbar';
import Post from './Post/Post';
import { getposts ,  removeuserprofile } from "../../redux/actions/post";
import Aside from "./Aside_Post/Aside";
import InternetConn from '../InternetConn/InternetConn';
const Home = () => {
    const dispatch = useDispatch();
    const isloading = useSelector(state => state.auth.isloading)
    useEffect(() => {
        dispatch(getposts());
        dispatch(removeuserprofile()) ; 
    }, [dispatch]);

    let posts = useSelector(state => state.posts);
 
  

    return (
        <>
      
        <Aside></Aside>
            <PrimarySearchAppBar />          
            <div className="Home">
            
             {
                 isloading? <> 
                 <InternetConn text={"please wait , fetching the posts"}></InternetConn>
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

import React, { useState } from "react";
import "./Post.css";
import moment from "moment";
import {
  likeposts,
  unlikeposts,
  comments,
  deleteposts,
} from "../../../redux/actions/post";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Post = (props) => {
 
  const [comment, setcomment] = useState("");
  const user = JSON.parse(localStorage.getItem("profile"));
  
  const [liked , setliked] = useState("") ; 
  const Likes = () => {
    if (props.post.likes.length > 0) {
      return props.post.likes.find(
        (like) => like === (user?.result?.id || user?.result?._id)
      ) ? ( 
        <>
      
          
          &nbsp;
        {setliked(true)}
          {props.post.likes.length > 2
      
            ? ` You and ${props.post.likes.length - 1} others`
            : `${props.post.likes.length} like${
                props.post.likes.length > 1 ? "s" : ""
              }`

              }
        </>
      ) : (
        <>
        {setliked(false)}
          
          &nbsp;{props.post.likes.length}{" "}
          {props.post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }
    

    return (
      <>
        {setliked(false)}
        &nbsp;
      </>
    );
  };

  const dispatch = useDispatch();

  const submitcomment = (e) => {
    e.preventDefault();
    let username;

    if (user?.result?.name === undefined) {
      username = user?.result?.fullname;
    } else {
      username = user?.result?.name;
    }

    console.log(username);
    dispatch(comments(props.post._id, { comment, name: username }));
  };
  const name = user?.result?.id || user?.result?._id;

  return (
    <>
        <div className="full-post">
        <div className="post">
            <div className="post-head">
                <div>
                    <img className="profile-pic" src={props.post.image} alt="profile-pic"></img>
                </div>
                <h3 className="profilename" style={{marginLeft:"10px"}}>
                {name === props.post.creator ? (
                <Link to={`/profile`}>{props.post.name}</Link>
              ) : (
                <Link to={`userprofile/${props.post.creator}`}>
                  {props.post.name}
                </Link>
              )}
                </h3>
                {name === props.post.creator &&
                <button  onClick={()=> dispatch(deleteposts(props.post._id))} 
                
                className="user-action deletebutton">Delete</button>
                
                }
            </div>
            <div className="post-image">
                <img src={props.post.image} alt="post-pic"></img>
            </div>
            <div className="post-actions">
            {
              !liked?
                <i style={ {   marginTop:"10px",fontSize:"25px", marginLeft:"10px" , cursor:"pointer"}} 
                   onClick={() => {console.log("clicked") ; dispatch(likeposts(props.post._id))}}
                class="far fa-heart">
                </i>:
                <i style={{color:"red",  marginTop:"10px",fontSize:"25px", marginLeft:"10px", cursor:"pointer"}} 
              
              onClick={() => {console.log("clicked") ; dispatch(unlikeposts(props.post._id))}}
                class="fas fa-heart">
             
                </i>
            }

            </div>
            <Likes ></Likes>
            <div className="Postdescription">
            <div className="descriptionUsername">
              <h1>@{props.post.name}</h1>
            </div>
            <div className="descriptionContent">
              <h1>{props.post.message}</h1>
            </div>
            </div>
            <div class= "viewcomments">
                <a class=" allcomment" >View all <span>{props?.post?.comments?.length}</span> comments</a>
            </div>

            <div className="Comments">
            
            {props.post.comments
              ? props.post.comments.map((record) => (
                <>
                <div className="comment">
                <p className="username">{record.name}</p>
                <p>{record.text}</p>
                </div>
                </>
                ))
              : null}
              </div>
           
            
            <p className="time">  {moment(props.post.createdAt).fromNow()}</p>
            <form  onSubmit={submitcomment}>
                <input 
                 type="text"
              name="text"
               value={comment}
              onChange={(e) => setcomment(e.target.value)}
               placeholder="Add a Comment" class="commentOnpost">
                
            </input>
            <button type="submit">
                POST
            </button>
            </form>
        </div>
    

    </div>






    </>
  );
};

export default Post;

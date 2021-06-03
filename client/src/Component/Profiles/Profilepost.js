import React from "react";
import "./index.css";
const Profilepost = (props) => {
  
console.log(props.posts);
    return (
        
        <div className="gallery-item" tabIndex="0">
        <img style={{width:"300px" , height:"400px"}}
      
          src={props.posts.image}
          className="gallery-image"
          alt=""
        ></img>
        <div className="gallery-item-type">
          <span className="visually-hidden">Video</span>
        
        </div>

        <div className="gallery-item-info">
          <ul>
            <li className="gallery-item-likes">
              <span className="visually-hidden">Likes:</span>
              <i className="fas fa-heart" aria-hidden="true"></i> {props?.posts?.likes?.length}
            </li>
            <li className="gallery-item-comments">
              <span className="visually-hidden">Comments:</span>
              <i className="fas fa-comment" aria-hidden="true"></i>  {props?.posts?.comments?.length}
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Profilepost

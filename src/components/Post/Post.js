import React from "react";
import CommentBtn from "../CommentBtn/CommentBtn";
import CommentsSection from "../CommentsSection/CommentsSection";
import ImgWrapper from "../ImgWrapper/ImgWrapper";
import LikeBtn from "../LikeBtn/LikeBtn";
import getTimeSVG from "./other/getTimeSVG";

import "./post.css";

const MAIN_CLASS = "post-wrapper flex f-column  x-margin-auto";
function Post({
  userInfo={
    name:"empty",
    imgSrc:"empty",
    userID:"empty ID"
  },
  postID,
  hashtags = [],
  content={text:"",imgSrc:""},
  likes = [],
  comments = [],
  date="**-**-****"
}) {
  
 


  
  return (
    <div className={MAIN_CLASS}>
      <div className="post-header flex ">
        <div className="profile-infos flex">

          <ImgWrapper imgSrc={userInfo.imgSrc}/>
          {/* <div className="img-wrapper">
            <img src={profileInfos.imgSRC}/>
          </div> */}
          <div className="text-infos">
            <h4 className="profile-name">{userInfo.name}</h4>
            <h4 className="profile-id">{userInfo.userID}</h4>
            <h4 className="subject">{hashtags}</h4>
          </div>
        </div>

        <div className="time-wrapper flex-center">
          <span
            className="ib icon-wrapper"
            dangerouslySetInnerHTML={getTimeSVG()}
          />
          <span className="text"> posted : {date} </span>
        </div>
      </div>
      <div className="post-content">
        <p className="post-description">{content.text}</p>

        <ImgWrapper imgSrc={content.imgSrc} className={"center-text"}/>
      </div>

      <div className="post-btns flex">
        <LikeBtn className="like-btn" />
        <CommentBtn className="comment-btn" />
      </div>
      <CommentsSection />
    </div>
  );
}

export default Post;

import React, { useCallback, useEffect, useState, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FormsContext } from "../../pages/mainPage";

import "./profileDescriptionBtns.css";

const MAIN_CLASS = "profile-btns btns-wrapper flex-center";



function ProfileDescriptionBtns({
  userID,postsButtonNeeded=true,nbPosts
}) {

  let ctx=useContext(FormsContext)



 
  let isItMyProfile=ctx.isItMyProfile(userID);
  let followBtnLabel = ctx.isAfollowing(userID)? "Unfollow" : "Follow";


  return (
    <div className={MAIN_CLASS}>
       {postsButtonNeeded&&  
       
       <NavLink to={ctx.getPathToPosts(userID)}>
   <button  className="posts btn flex-center">
        <span className="text">Posts</span>
        <span className="icon-wrapper">
          <span>{nbPosts}</span>
        </span>
      </button>
       </NavLink>
       
    }
       
     
     
      {!isItMyProfile && (
        <button className={`${followBtnLabel} btn flex-center`}>
          {followBtnLabel}
        </button>
      )}
    </div>
  );
}

export default ProfileDescriptionBtns;

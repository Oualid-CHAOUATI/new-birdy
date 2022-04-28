import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../components/formPost/PostForm";
import LinksSection from "../components/LinksSection/LinksSection";
import ProfileDescription from "../components/ProfileDescription/ProfileDescription";
import ProfileDescriptionBtns from "../components/ProfileDescriptionBtns/ProfileDescriptionBtns";
import { FormsContext } from "./mainPage";

function PostsPage() {
  let userID = useParams().id;
  let ctx = useContext(FormsContext);
  let isItMyProfile = ctx.isItMyProfile(userID);

  let userInfo = ctx.getUserInfo(userID);

  return (
    <div>
      <ProfileDescription imgSrc={userInfo.imgSrc} />
      <ProfileDescriptionBtns
        userID={userInfo.userID}
        
      />
       {isItMyProfile && (
        <PostForm imgSrc={userInfo.imgSrc} userID={userInfo.userID} />
      )}
      
      <PostsWrapper postsIDs={}/>
    </div>
  );
}

export { PostsPage as ProfilePage };

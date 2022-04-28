import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PostForm from "../components/formPost/PostForm";
import LinksSection from "../components/LinksSection/LinksSection";
import ProfileDescription from "../components/ProfileDescription/ProfileDescription";
import ProfileDescriptionBtns from "../components/ProfileDescriptionBtns/ProfileDescriptionBtns";
import Relations from "../components/relations/Relations";
import { FormsContext } from "./mainPage";

function ProfilePage() {
  let userID = useParams().id;
  let ctx = useContext(FormsContext);
  let isItMyProfile = ctx.isItMyProfile(userID);

  let userInfo = ctx.getUserInfo(userID);
  let nbPosts=userInfo.postsIDs.length;

  let nbFollowers=userInfo.followersIDs.length
  let nbFollowings=userInfo.followingsIDs.length

  return (
    <div>
      <ProfileDescription imgSrc={userInfo.imgSrc} />
      <ProfileDescriptionBtns
        userID={userInfo.userID}
        nbPosts={nbPosts}
        
      />
      <Relations nbFollowings={nbFollowings} nbFollowers={nbFollowers} />
     
      <LinksSection allowEdit={isItMyProfile} links={userInfo.links} />
    </div>
  );
}

export { ProfilePage };

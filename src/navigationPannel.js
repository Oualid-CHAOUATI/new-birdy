import React from "react";
import { FormsContext } from "./pages/mainPage";
import { useContext } from "react";

import "./navigationPannel.css";
import { NavLink } from "react-router-dom";
function NavigationPannel({ userID }) {
  let ctxValue = useContext(FormsContext);

  return (
    <nav className="main-nav ">
      <ul className="menu flex  f-gap-1">
        <NavLink to={ctxValue.getPathToProfile(ctxValue.getUserID())}>profile</NavLink>
        <NavLink to={ctxValue.getPathToPosts(userID)}>posts</NavLink>
        <NavLink to={ctxValue.getPathToSearchBar()}>searchbar</NavLink>
        <NavLink to={ctxValue.getPathToFollowers(userID)}>followers</NavLink>
        <NavLink to={ctxValue.getPathToFollowings(userID)}>followings</NavLink>
        <NavLink to={ctxValue.getPathToConnectionForm()}>connection</NavLink>
        <NavLink to={ctxValue.getPathToInscriptionForm()}>inscription</NavLink>
        <NavLink to={ctxValue.getPathToLlinksEditForm()}>NavLinknksEditForm</NavLink>
      </ul>
    </nav>
  );
}

export default NavigationPannel;

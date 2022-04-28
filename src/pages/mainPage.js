import React, { createContext } from "react";
import NavigationPannel from "../navigationPannel";
import LinkModifyForm from "../components/LinkAddForm/LinkAddForm";
import LinksUpdateSection from "../components/LinksUpdateSection/LinksUpdateSection";
import PersonsList from "../components/PersonsList/PersonsList";
import ProfileDescription from "../components/ProfileDescription/ProfileDescription";
import ProfileDescriptionBtns from "../components/ProfileDescriptionBtns/ProfileDescriptionBtns";
import Person from "../data/Person";
import PostForm from "../components/formPost/PostForm";
import PostsWrapper from "../components/PostsWrapper/PostsWrapper";
import LinksSection from "../components/LinksSection/LinksSection";
import FormConnexion from "../components/FormConnexion/FormConnexion";
import FormInscription from "../components/FormInscription/FormInscription";
import SearchBar from "../components/SearchBar/SearchBar";
import {LinksEditPage} from "./LinksEditPage"
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import {ProfilePage} from "../pages/ProfilePage"

export const FormsContext = createContext();

const PAGE_POSTS = "pge psts";
const PAGE_CONNECTION = "pge cnction";
const PAGE_INSCRIPTION = "pge inscription";
const PAGE_LINKSEDIT = "pge lnk edit";
const PAGE_PROFILE = "pge prfl";
const PAGE_FOLLOWERS = "pge fflwsrrprfl";
const PAGE_FOLLOWINGS = "pge fflwsgssrrprfl";
const PAGE_SEARCHBAR = "pge search";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    // this.bindMethods();

   

   
    this.state = {
      userInfo: {
        userID: 0,
        userName:"Empty name",
        imgSrc: `https://images.pexels.com/photos/11554404/pexels-photo-11554404.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`,
        description: "hello its me ! I'm new here ^^",
        links: ["https://www.facebook.com", "https://www.facebook.com/", "linked.fgfg"],
        postsIDs:[],
        followersIDs:[],
        followingsIDs:[]

      },
      followers: [
        new Person(1, "leila").getInfosForPersonsList(),
        new Person(1, "lilo").getInfosForPersonsList(),
      ],
      followings: [
        new Person(1, "laila").getInfosForPersonsList(),
        new Person(1, "laila").getInfosForPersonsList(),
      ],
      showNotification: false,
      notificationMessage: "",
      
    };
    this.setCTXValue()
  }

  setCTXValue(){
  
    this.ctxValue = {}

    this.addToCTXValue("data_addLink")
    
    this.addToCTXValue("data_removeLink")
    
    this.addToCTXValue("data_updateLink");
    
    this.addToCTXValue("isItMyProfile")
    
    this.addToCTXValue("isAfollowing")
    
    this.addToCTXValue("getUserInfo")
    
    this.addToCTXValue("getUserID")

// ?---------------------------------------------
    this.addToCTXValue("getPathToLlinksEditForm")    
    this.addToCTXValue("getPathToConnectionForm")
    this.addToCTXValue("getPathToInscriptionForm")

    this.addToCTXValue("getPathToProfile")
    this.addToCTXValue("getPathToPosts")
    this.addToCTXValue("getPathToSearchBar")
    this.addToCTXValue("getPathToFollowers")
    this.addToCTXValue("getPathToFollowings")
    
     
    
 
    

  }
 
  addToCTXValue(methodName){
    this[methodName]=this[methodName].bind(this);
    this.ctxValue[methodName]=this[methodName];
  }
  bindMethods() {

  
  
  }
  bindMethod(method){
    this.method=method.bind(this)
  }

  getLinks() {
    return this.state.links;
  }
  data_removeLink(link) {
    link = link.trim();
    if (link == "") return;

    let index = this.state.links.indexOf(link);

    if (index < 0) return;

    this.state.links.splice(index, 1);

    this.state.links = [...this.state.links];
    this.saveState();
  }

  data_addLink(link) {
    link = link.trim();
    if (link == "") return;

    let index = this.state.links.indexOf(link);
    if (index > 0) return;

    this.state.links.push(link);
    this.saveState();
  }
  data_updateLink(linkValue, newLinkValue) {
    newLinkValue = newLinkValue.trim();
    if (newLinkValue == "") return;
    if (newLinkValue == linkValue) return;

    let index = this.state.links.indexOf(linkValue);
    if (index < 0) return;

    this.state.links[index] = newLinkValue;

    this.showNotification("link updated succesfully");
    this.hideNotification(500);
    this.saveState()

  }

  
  saveState() {
    this.setState(this.state);
  }

  showNotification(msg) {
    this.state.notificationMessage = msg;
    this.state.showNotification = true;
    this.saveState();
  }
  hideNotification(time = 700) {
    setTimeout(() => {
      this.state.showNotification = false;
      this.saveState();
    }, time);
  }

getPathToProfile(userID){
  return `/profile/${userID}`
}
getPathToPosts(userID){
  return `/profile/${userID}/posts`
}
getPathToSearchBar(){
  return `/searchBar`
}
getPathToFollowers(userID){
  return `/followers/${userID}`
}
getPathToFollowings(userID){
  return `/followings/${userID}`
}

getPathToConnectionForm(){
  return `/connectionForm`
}
getPathToInscriptionForm(){
  return `/inscriptionForm`
}
getPathToLlinksEditForm(){
  return `/linksEditForm`
}
isItMyProfile(userID){
  return userID==this.state.userInfo.userID;
}

isAfollowing(userID){
  return this.state.userInfo.followingsIDs.includes(userID)

}


getUserInfo(userID){
 let isItMyProfile= (this.isItMyProfile(userID))
 
 
 if(isItMyProfile)return this.state.userInfo;
 return  this.state.userInfo
}


getUserID(){
  return this.state.userInfo.userID;
}

  render() {
    const ctxValue = this.ctxValue;
    return (
      <BrowserRouter>
        <FormsContext.Provider value={ctxValue}>
          <div
            className={
              `notification flex-center ` +
              ((!this.state.showNotification && " hide ") || "")
            }
          >
            {this.state.notificationMessage}
          </div>
          <NavigationPannel userID={this.state.userInfo.ID} />

          <div className="container-max-width x-margin-auto">
            <Routes>
              <Route
                path="/profile/:id"
                element={ <ProfilePage/> }
              />
              <Route path="/" element={<ProfileDescription/>}/>
              
              <Route
                path="/profile/:id/posts"
                element={(() => {
                  // let {id}=useParams();
                  let id=0;
                  let isItMyProfile = id == this.state.userInfo.ID;

                  let imgSrc = isItMyProfile
                    ? this.state.userInfo.imgSrc
                    : "https://images.pexels.com/photos/7452049/pexels-photo-7452049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
                  return (
                    <div>
                      <ProfileDescription imgSrc={imgSrc} />
                      <ProfileDescriptionBtns
                        userID={id}
                        postsButtonNeeded={false}
                      />
                      {isItMyProfile && (
                        <PostForm imgSrc={imgSrc} userID={id} />
                      )}
                      <PostsWrapper />
                    </div>
                  );
                })()}
              />

              <Route path="/searchBar" element={<SearchBar />} />
              <Route
                path="/followers/:id"
                element={
                  <PersonsList list={this.state.followers} title="Followers" />
                }
              />
              <Route
                path="/followings/:id"
                element={
                  <PersonsList
                    list={this.state.followings}
                    title="Followings"
                  />
                }
              />
              <Route path="/connectionForm" element={<FormConnexion />} />
              <Route path="/inscriptionForm" element={<FormInscription />}/>
              <Route
                path="/linksEditForm"
                element={<LinksEditPage/>
                }
              />
            </Routes>
          </div>
        </FormsContext.Provider>
      </BrowserRouter>
    );
  }
}
export default MainPage;

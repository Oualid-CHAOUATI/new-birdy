import React, { useCallback, useEffect, useState ,useRef} from "react";
import ImgWrapper from "../ImgWrapper/ImgWrapper";

import "./relations.css";


const MAIN_CLASS="relations flex-center center-text"


function Relations({nbFollowers=-1,nbFollowings=-1,followersImgs3=[],followingsImgs3=[]}) {




  let followerssImgsUI=arrToUi(followersImgs3);
  let followingssImgsUI=arrToUi(followingsImgs3);

  function arrToUi(arr){
    return arr.map(imgSrc=>
    
      //taile définie dans le css
      <ImgWrapper overflow="visible" imgSrc={imgSrc}/>

  );

  }
  
  return (
    <div className={MAIN_CLASS}>

<div class="col">
<p>
  following
  <div className="numbers">+{nbFollowings}</div>
</p>
<div className="imgs-wrapper flex-center">
{followingssImgsUI}

</div>

</div>

<div class="col"> 

<p>
  followers
  <div className="numbers">+{nbFollowers}</div>
</p>
<div className="imgs-wrapper flex-center">

{followerssImgsUI}
</div>


</div>

    </div>
  )
}

export default Relations
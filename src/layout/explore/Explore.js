import "./Explore.scss"

import { CiSearch } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import For from "../For/Forus";
import Trending from "../trending/Trending";
import Sports from "../sports/Sports";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";




function Explore (){
  const [showBackBtn, setShowBackBtn] = useState(false)
    return (
        <div className="explore">
          
        <div className="inpu_div">
       <div>{ showBackBtn && <button className="back" onClick={() => setShowBackBtn(false)}><IoArrowBack />
       </button>}
       </div> 
          <div className={`search_div ${showBackBtn ? 'focused' : ''} }` }>
    <CiSearch className="search_icon" />
    < input onClick={() => setShowBackBtn(true)} type="text"  className="input" placeholder="Search"/>
    </div>
    
<div className="setting_div">
  <span className="setting"> <CiSettings /></span> 
  </div>
  </div>
  


<div className="nav_div">
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">For You</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Trending</button>
    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Sports</button>
    <button class="nav-link" id="nav-able-tab" data-bs-toggle="tab" data-bs-target="#nav-able" type="button" role="tab" aria-controls="nav-able" aria-selected="false" >News</button>
    <button class="nav-link" id="nav-disabled-tab" data-bs-toggle="tab" data-bs-target="#nav-disabled" type="button" role="tab" aria-controls="nav-disabled" aria-selected="false" >Entertainment</button>
  </div>
</div>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> <For/> </div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> <Trending/> </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><Sports/></div>
  <div class="tab-pane fade" id="nav-able-tab" role="tabpanel" aria-labelledby="nav-able-tab"> </div>
  <div class="tab-pane fade" id="nav-disabled-tab" role="tabpanel" aria-labelledby="nav-contact-tab"></div>
</div>


</div>

    )
}

export default Explore;



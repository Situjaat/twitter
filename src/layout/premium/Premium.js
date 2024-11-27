import "./Premium.scss"
import { IoMdCheckmark } from "react-icons/io";



function Premium() {
  return (
<div className="pre_div">

  <h1>Upgrade to Premium</h1>
  <p className="pp">Get access to exclusive features and content</p>
  <div className="tin_div">
    <button> Annual</button>
    <button>Monthly</button>
  </div>
<div className="card_div">
<div class="card text-white bg-dark mb-3" >
  <div class="card-header">Basic</div>
  <div class="card-body">
    <h4 class="card-title"> 273.5/ <span>month</span></h4>
    <p class="card-text">billed Post </p>
    <p><IoMdCheckmark />  Small reply boost</p>
    <p> <IoMdCheckmark />  Edit post</p>
    <p> <IoMdCheckmark />  Longer post</p>
    <p> <IoMdCheckmark /> Bookmark folder</p>
    <p> <IoMdCheckmark /> Highlight tab</p>
  </div>
  </div>

  <div class="card text-white bg-dark mb-3" >
  <div class="card-header">Premium</div>
  <div class="card-body">
    <h4 class="card-title"> 520/ <span>month</span></h4>
    <p class="card-text">For first 3 month</p>
    <p> Everything in basic and,</p>
    <p><IoMdCheckmark /> Half ads in for you and following </p>
    <p> <IoMdCheckmark /> Larger reply boost </p>
    <p> <IoMdCheckmark /> Get paid to post  </p>
    <p> <IoMdCheckmark /> Checkmark </p>
    <p> <IoMdCheckmark /> X-pro , analytics </p>
  </div>
  </div>

  <div class="card text-white bg-dark mb-3" >
  <div class="card-header">Premium +</div>
  <div class="card-body">
    <h4 class="card-title"> 1040/ <span>month</span></h4>
    <p class="card-text">For first 3 month </p>
    <p> Everything in premium and,</p>
    <p><IoMdCheckmark />  Fully ad-free</p>
    <p> <IoMdCheckmark />  Largest reply</p>
    <p> <IoMdCheckmark />  Write Article</p>
   
  </div>
  </div>

</div>
  
  </div>
  )
}

export default Premium;
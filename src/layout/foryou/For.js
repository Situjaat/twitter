 
import { Route, Link, Routes } from 'react-router-dom'
import { BiWorld } from "react-icons/bi";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
 import { MdVerified } from "react-icons/md";
 import { MdMoreHoriz } from "react-icons/md";
 import { BiMessage } from "react-icons/bi";
 import { IoHeartOutline } from "react-icons/io5";
 import { BiRepost } from "react-icons/bi";
 import { BiBarChart } from "react-icons/bi";
 import { CiBookmark } from "react-icons/ci";
 import { TbShare2 } from "react-icons/tb";
 
 
 const postData = [
     {
         profile: "https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png",
         name: "Virat Kohli",
         tick: <MdVerified />,
         id: "@viratkohli",
         time: "20h",
         dot: <MdMoreHoriz />,
         text: "RCB Forever.",
         post: "https://biet.ac.in/images/events/womensday/wp-content/uploads/2023/11/virat-kohli-hd-wallpapers-2016_7fcc78ae5.jpg",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
 
     {
         profile: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/385700/385794.png",
         name: "Will Smith",
         tick: <MdVerified />,
         id: "@willsmith",
         time: "22h",
         dot: <MdMoreHoriz />,
         text: "Bad Boyz Guys.",
         post: "https://cdnph.upi.com/ph/st/th/2871717478818/2024/i/17174796043897/v1.2/Movie-review-Bad-Boys-4-fails-to-recapture-Will-Smith-Martin-Lawrence-glory.jpg?lg=5&=1",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
     {
         profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/465px-Dwayne_Johnson_2%2C_2013.jpg",
         name: "The Rock",
         tick: <MdVerified />,
         id: "@therock",
         time: "15h",
         dot: <MdMoreHoriz />,
         text: "Gym Time .",
         post: "https://wallpapercave.com/wp/wp1990689.jpg",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
   
 
  
   
 
     {
         profile: "https://oshoworld.com/wp-content/uploads/2022/03/06.jpg",
         name: "Osho Vichar",
         tick: <MdVerified />,
         id: "@osho",
         time: "23h",
         dot: <MdMoreHoriz />,
         text: "Gyan Ki Baat.",
         post: "https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2020/09/17/osho-quotes2_1600317449.jpg",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
 
 
     {
         profile: "https://www.careerpower.in/blog/wp-content/uploads/2024/09/03133136/Rajasthan-Police-Constable-Result-2024.webp",
         name: "Rajasthan Police Official",
         tick: <MdVerified />,
         id: "@rajpolice",
         time: "05h",
         dot: <MdMoreHoriz />,
         text: "Pratapgarh Police Cyber Team.",
         post: "https://cf-img-a-in.tosshub.com/lingo/ithi/images/story/202309/amit_2-sixteen_nine.jpg?size=940:529",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     }
 ]
 
 
 
 
 function For (){

    return(
        <div>  

        {postData.map((ele) => {
            return (
                <div className="post_div">
                    <div className="up_div">
                        <div className="profile_div">
                            <img src={ele.profile} alt="post" className="userimg" />
                        </div>
                        <div className="name_div">
                            <h5>{ele.name}</h5>
                            <span>{ele.tick}</span>
                            <h6>{ele.id} .</h6>
                            <p>{ele.time}</p>
                        </div>

                        <div className="more_div">
                            <p>{ele.dot}</p>

                        </div>

                    </div>
<div className="mid_div">
<p className="text"> {ele.text}</p>

<img src={ele.post} alt="pp"  className="userpost"/>


 </div>

 <div className="bottom_div">
<div> 
<p> {ele.reply} 500</p>
 </div>
<div>
<p> {ele.repost} 11k</p>
 </div>
<div>
<p> {ele.like} 4.5m</p>
 </div>
<div> 
<p> {ele.view} 17m</p>
</div>
<div className="share"> 
<p> {ele.bookmark}</p>
<p> {ele.share}</p>
</div>


 </div>


                </div>
                
            )
        })}



</div>
   )

 }

 export default For
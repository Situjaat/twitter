
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
         profile: "https://play-lh.googleusercontent.com/akcfY9xjKKerrtI473Cq7o6ZfWp-vAl7661QdcYfgcnlu0Gcb-FCDo8Mk6dEnAeNmAQ",
         name: "Dainik Bhaskar",
         tick: <MdVerified />,
         id: "@dainikbhaskar",
         time: "20h",
         dot: <MdMoreHoriz />,
         text: "Today News",
         post: "https://images.bhaskarassets.com/web2images/521/2023/05/23/dainik-bhaskar-1_1684839812.jpg",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
 
     {
         profile: "https://yt3.googleusercontent.com/gDef0xET_AtWczwH1-3WVoUQvZFLRow_Nx8zM3AXwWJwx9Wh8R9ht_WSGi30s6KA9hMnNyeTKlg=s900-c-k-c0x00ffffff-no-rj",
         name: "Rajasthani Kaka",
         tick: <MdVerified />,
         id: "@rajasthanikaka",
         time: "22h",
         dot: <MdMoreHoriz />,
         text: "Let's laughs.",
         post: "https://i.ytimg.com/vi/2G0xhx_zerM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDc8oVaJgU7NoRVrZRTkhdoyQkumg",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
     {
         profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4JHWcsq1gQBf425PATTHAfORG9I5VxnCGQ&s",
         name: "Best Motivation",
         tick: <MdVerified />,
         id: "@motivation",
         time: "15h",
         dot: <MdMoreHoriz />,
         text: " Go and Do it.",
         post: "https://img.freepik.com/free-photo/negative-mind-will-never-give-you-positive-life-motivation-attitude-graphic-words_53876-124501.jpg",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
     {
         profile: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320600/320632.png",
         name: "Smriti Mandhana",
         tick: <MdVerified />,
         id: "@Mandhana",
         time: "11h",
         dot: <MdMoreHoriz />,
         text: "WTC 2024 .",
         post: "https://www.bollywoodshaadis.com/img/article-202437714080350883000.webp",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
     {
         profile: "https://play-lh.googleusercontent.com/7foNw0MJCmF1p2-a-AYxcgppowPUM27UkNht1VjV7QVcVDog0pWs0Djmbx0ufluarss",
         name: "Rashmika ",
         tick: <MdVerified />,
         id: "@rashmikamandana",
         time: "17h",
         dot: <MdMoreHoriz />,
         text: "Fun Time .",
         post: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/h/m/z/small-rashmika-mandanna-5-rashmika-mandanna-poster-multicolor-original-imaghvgzhzjgn3bt.jpeg?q=90&crop=false",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 

 
     
 
     {
         profile: "https://image.winudf.com/v2/image/Y29tLmNyaXN0aWFub3JvbmFsZG8uaGR3YWxscGFwZXJzX2ljb25fMTUyMDc3NTUyN18wMjQ/icon.png?w=&fakeurl=1",
         name: " Cristino Ronaldo",
         tick: <MdVerified />,
         id: "@cr7",
         time: "19h",
         dot: <MdMoreHoriz />,
         text: "Game on Change.",
         post: "https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480454921.jpg",
         reply: <BiMessage /> ,
         repost: <BiRepost />,
         like: < IoHeartOutline />,
         view: <BiBarChart />,
         bookmark: <CiBookmark />,
         share: <TbShare2 />
     },
 
     
 ]
 
 
 
 
 const FollowIng=()=>{

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

 export default FollowIng


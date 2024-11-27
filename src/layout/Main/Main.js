import "./Main.scss"
import { GoHomeFill } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsSlashSquare } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { RiGroupLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TiFlashOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { CgMoreAlt } from "react-icons/cg";
import {  Link, useLocation} from 'react-router-dom'



const logo = [
   {
      name: "Home",
      img: <GoHomeFill />,
      route: "/"
   },
   {
      name: "Explore",
      img: <IoSearchOutline />,
      route: "/explore"
   },
   {
      name: "Notifications",
      img: <IoNotificationsOutline />,
      route:"/notifications"
   },
   {
      name: " Messages",
      img: <MdOutlineEmail />,
      route: "/messages"
   },
   {
      name: "Grok",
      img: <BsSlashSquare />,
      route:"/grok"
   },
   {
      name: "Bookmarks",
      img: <CiBookmark />,
      route:"/bookmark"
   },
   {
      name: "Communities",
      img: <RiGroupLine />,
      route:"/communities"

   },
   {
      name: "Premium",
      img: <FaXTwitter />,
      route:"/premium"

   },
   {
      name: "Verified Orgs",
      img: <TiFlashOutline />,
      route:"/verified_orgs"
   },
   {
      name: "Profile",
      img: <CgProfile />,
      route: "/profile"
   },
   {
      name: "More",
      img: <CgMoreO />,
      route: "/more"
   }
]



function Main() {
   // const params =useParams ();
   const location= useLocation ();
   
   return (
      <main>
         <span><FaXTwitter /></span>
         {logo.map((ele) => {
            return (
               <div className= {`child_div ${location.pathname === ele.route && 'active' }`}>
                  
                  <Link to={ele.route} className="route"> <p className="logo">{ele.img} </p> <p className="name" > {ele.name}</p> </Link>
                  
               </div>

            )
         })}



         <button className="post_button" >
            Post
         </button>



         <div className="profile">
            <div> <img src="https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093" alt="ss" className="img" />
            </div>
            <div className="mid">
               <span className="sita"> Sitaram</span>
               <span className="ram">@sitaram7841245</span>
            </div>
            <span className="dot"><CgMoreAlt />
            </span>

         </div>

         

      </main>
   )
}

export default Main
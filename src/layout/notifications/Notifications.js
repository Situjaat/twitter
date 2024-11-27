import { CiSettings } from "react-icons/ci";
import "./Notifications.scss"
import { IoIosMore } from "react-icons/io";
import { Link, Outlet, Route,Routes } from "react-router-dom";
import All from "../all/All";



// let noti =[
//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"AajTak is LIVE -हरियाणा में कांग्रेस को बड़ी बढ़त",
//         more:<IoIosMore />

//     },
//     {
//         logo:"https://rssb.rajasthan.gov.in/images/logo_img.png",
//         text:"RSMSSB कर्मचारी चयन आयोग जयपुर आज जारी किया जा सकता हैं RSMSSB का नया परीक्षा कैलेंडर ✌️✌️🤟🤟🤟",
//         more:<IoIosMore />

//     },
//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"AajTak is LIVE देखिये इस वक्त की बड़ी ख़बर",
//         more:<IoIosMore />

//     },
   
//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"बधाई हो जी आज माननीय जोगाराम पटेल जी ने 90 हजार नियुक्तियां पूरी कर दी है !",
//         more:<IoIosMore />

//     },

//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"AajTak is LIVE -हरियाणा में कांग्रेस को बड़ी बढ़त",
//         more:<IoIosMore />

//     },
//     {
//         logo:"https://rssb.rajasthan.gov.in/images/logo_img.png",
//         text:"RSMSSB कर्मचारी चयन आयोग जयपुर आज जारी किया जा सकता हैं RSMSSB का नया परीक्षा कैलेंडर ✌️✌️🤟🤟🤟",
//         more:<IoIosMore />

//     },
//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"AajTak is LIVE देखिये इस वक्त की बड़ी ख़बर",
//         more:<IoIosMore />

//     },
   
//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"बधाई हो जी आज माननीय जोगाराम पटेल जी ने 90 हजार नियुक्तियां पूरी कर दी है !",
//         more:<IoIosMore />

//     },
//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"AajTak is LIVE -हरियाणा में कांग्रेस को बड़ी बढ़त",
//         more:<IoIosMore />

//     },
//     {
//         logo:"https://rssb.rajasthan.gov.in/images/logo_img.png",
//         text:"RSMSSB कर्मचारी चयन आयोग जयपुर आज जारी किया जा सकता हैं RSMSSB का नया परीक्षा कैलेंडर ✌️✌️🤟🤟🤟",
//         more:<IoIosMore />

//     },
//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"AajTak is LIVE देखिये इस वक्त की बड़ी ख़बर",
//         more:<IoIosMore />

//     },
   
//     {
//         logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
//         text:"बधाई हो जी आज माननीय जोगाराम पटेल जी ने 90 हजार नियुक्तियां पूरी कर दी है !",
//         more:<IoIosMore />

//     },

// ]

function Notifications (){
    return(
<div className="noti_div">
    <div className="position">
    <div className="noti_div1">
        <h5>Notifications</h5>
        <span><CiSettings />
        </span>
    </div>
    <div className="noti_div2">
     < Link to="all" className="link"> All</Link>
        <Link to="verified"  className="link">Verified</Link>
        <Link to="mention"  className="link">Mentions</Link>
    </div>
    </div>
  
<Outlet/>

</div>
    )
}

export default Notifications
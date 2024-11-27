
import { IoIosMore } from "react-icons/io";

let noti =[
    
    {
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
        text:"AajTak is LIVE देखिये इस वक्त की बड़ी ख़बर",
        more:<IoIosMore />

    },
   
    {
        logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Aaj_tak_logo.png/640px-Aaj_tak_logo.png",
        text:"बधाई हो जी आज माननीय जोगाराम पटेल जी ने 90 हजार नियुक्तियां पूरी कर दी है !",
        more:<IoIosMore />

    },


]

function Mention (){
    return(
<div>
        {noti.map((ele) => {
            return(
                <div className="noti_div3">
                    <div className="dis_div">
                    <img src={ele.logo} alt="logo"/>
                    <span>{ele.more}</span>
                    </div>
                    <p>{ele.text}</p>
                    
                </div>
            )
          })}
</div>
    )
}

export default Mention
import "./Messages.scss"
import { CiSettings } from "react-icons/ci";
import { MdOutlineLocalPostOffice } from "react-icons/md";


function Messages (){
    return(
        <div className="mess_div">
            <div className="mess_header">
                <h3>Messages</h3>
                <div className="ss">
                <span><CiSettings />
                </span>
                <span><MdOutlineLocalPostOffice />
                </span>
                </div>
            </div>
<div className="inbox_div">
            <h2>Welcome to your inbox!</h2>
            <p>Drop a line, share posts and more with private conversations between you and others on X. </p>
            <button className="mess_button">Write messages here</button>
            </div>
        </div>
    )

    
}

export default Messages
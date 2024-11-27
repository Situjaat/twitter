import "./Communities.scss"
import { FaArrowLeft } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { GrGroup } from "react-icons/gr";
import { IoIosArrowRoundUp } from "react-icons/io";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";


function Communities (){
    const [showBackBtn, setShowBackBtn] = useState(false)
    return(
        <div className="comm_div">
            <div className="comm_header">
            <div className="comm1_div">
           <span> <FaArrowLeft /></span> 
           <p> Communities</p>

            </div>

            <div className="comm2_div">
                <span><IoIosSearch />
                </span>
                <p><GrGroup />
                </p>
            </div>
            </div>
            <hr></hr>

            <div className="com_lower" >
            { showBackBtn && <button className="back" onClick={() => setShowBackBtn(false)}> <IoIosArrowRoundUp /> 
            </button>}
                <p onClick={() => setShowBackBtn(true)}>Technology</p>
                <p>Art</p>
                <p>Gaming</p>
                <p>Sports</p>
                <p>Entertainment</p>
                <p onClick={() => setShowBackBtn(true) }>Politics</p>
                { showBackBtn && <button className="back" onClick={() => setShowBackBtn(false)}> <GoArrowRight />
                
                </button>}
                <p >Art</p>
                <p>Gaming</p>



            </div>

        </div>

        
    )
}

export default Communities
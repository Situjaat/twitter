import "./Bookmark.scss"
import { CiSearch } from "react-icons/ci";
function Bookmark (){
    return(
        <div className="Bm_div">
            <h4>Bookmarks</h4>
            <p>@sitaram73038757</p>
            <div className="input_div">
            <CiSearch className="search_icon" />
            < input type="text"  className="input" placeholder="Search Bookmark"/>
            </div>
            <div className="save_div">
            <h2>Save posts for later</h2>
            <span> Bookmark posts to easily find them again in the future.</span>
            </div>
        </div>
    )
}

export default Bookmark
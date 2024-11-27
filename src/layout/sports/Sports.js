import "./Sports.scss"


const sportsdata = [

    { 
        img:"https://img.republicworld.com/all_images/india-vs-new-zealand-first-test-1729049649275-16_9.webp",
        text:"",
        time:" 3 Hour ago"

    },
    {
        id1:" 1. Trending in India",
        id2:"Virat Kohli",
        id3:"6461 posts",

    },
    {
        id1:"2. Trending in India",
        id2:"IPL Auction",
        id3:"7569 posts",

    },
    {
        id1:"3. Trending in India",
        id2:"Womens World Cup",
        id3:"85.1k posts",

    },
    {
        id1:"4. Trending",
        id2:"#Jaiswal",

    },
    {
        id1:"5. Trending",
        id2:"IND Vs NZ Test",
        id3:"47.6k posts",

    },

    {
        id1:"6. Trending",
        id2:"PAK Vs ENG",
        id3:"40.6k posts",

    },


]
function Sports() {
    return (
        <div>
{sportsdata.map ((ele)=> {
        return(
            <div className="trend0">
            <div className="trend1">
                    <img className="trump" src={ele.img} />
                    <h2>{ele.text}</h2>
                    <p>{ele.time}</p>
                   </div>
            <div className="trend2">
                <p>{ele.id1}</p>
                <h4>{ele.id2}</h4>
                <p>{ele.id3}</p>
                 </div>
                 </div>
        )
         
        
    })}

        </div>

    )
}

export default Sports 
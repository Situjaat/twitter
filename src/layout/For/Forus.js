import "./For.scss"

const fordata = [

    { 
        img:"https://media.vanityfair.com/photos/6371861f57377e33b6f57199/16:9/w_2992,h_1683,c_limit/1431869535",
        text:"Univision Town hall: Latinos Ask… Donald Trump Responds",
        time:" 1 Hour ago"

    },
    {
        id1:"Trending in India",
        id2:"#ArrestRheaChakraborty",
        id3:"6461 posts",

    },
    {
        id1:"Trending in India",
        id2:"#BahraichRiots",
        id3:"7569 posts",

    },
    {
        id1:"Trending in India",
        id2:"Mumbai",
        id3:"85.1k posts",

    },
    {
        id1:"Trending",
        id2:"#DiljitDosanjh",

    },
    {
        id1:"Trending",
        id2:"6 Canadian",
        id3:"47.6k posts",

    },

    {
        id1:"Trending",
        id2:"Rajasthan",
        id3:"40.6k posts",

    },
    {
        id1:"Trending",
        id2:"#Suriya44",
        id3:"25.6k posts",

    },
    {
        id1:"Trending",
        id2:"Khalistani",
        id3:"47.6k posts",
        

    },


]

const Obj=[
    {
        url:"www.vecteezy.com/video/10292352-sun-light-on-log-and-plants-in-the-forest-floor"
    }
]

function For (){
    return(
        <div>

    {fordata.map ((ele)=> {
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

    <div className="video_div">
        {Obj.map((ele)=>{
            return(
                <div className="child_div">
                    <h3> Videos For You</h3>
                    <p>Check out these popular and trending videos for you</p>
                <div className="video">
    <video className="vid" src={ele.url} type="video/mp4"   loop autoPlay muted/>
    
</div>
</div>
            )
        })}

    </div>

</div>


    )
}

export default For
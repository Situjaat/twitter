import "./Trending.scss"


const fordata = [

    { 
        img:"https://navbharattimes.indiatimes.com/thumb/114207875/lawranc-bishnoi-114207875.jpg?imgsize=1524795&width=1600&height=900&resizemode=75",
        text:"Salman Khan Again in panic Condition And meat the Mumbai Police.",
        time:" 3 Hour ago"

    },
    {
        id1:" 1. Trending in India",
        id2:"APJabdulkalam",
        id3:"6461 posts",

    },
    {
        id1:"2. Trending in India",
        id2:"Canada",
        id3:"7569 posts",

    },
    {
        id1:"3. Trending in India",
        id2:"पूर्व राष्ट्रपति",
        id3:"85.1k posts",

    },
    {
        id1:"4. Trending",
        id2:"#DiljitDosanjh",

    },
    {
        id1:"5. Trending",
        id2:"महान वैज्ञानिक",
        id3:"47.6k posts",

    },

    {
        id1:"6. Trending",
        id2:"Congress",
        id3:"40.6k posts",

    },
    {
        id1:"7. Trending",
        id2:"मुस्लिम एरिया",
        id3:"25.6k posts",

    },
    {
        id1:"8.Trending",
        id2:"झारखंड विधानसभा चुनाव",
        id3:"47.6k posts",

    },


]

function Trending (){
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

</div>
    )
}

export default Trending
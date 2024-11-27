import { useMemo, useState } from "react";
import "./Other.scss"
import { CiSearch } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";




let trending = [
    {
        id1: "Politics · Trending",
        id2: "#Lebano",
        id3: "71.4K posts",
        more: <IoIosMore />
    },

    {
        id1: "Politics · Trending",
        id2: "#Israel",
        id3: "86.3K posts",
        more: <IoIosMore />
    },

    {
        id1: "Trending in India",
        id2: "Only 1%",
        id3: "Trending with #AishwaryaRaiBachchan",
        more: <IoIosMore />
    },

    {
        id1: "Trending in India",
        id2: "#AIMIM",
        id3: "30.4K posts",
        more: <IoIosMore />
    }
]


let follow = [
    {
        pic: "https://s.ndtvimg.com/images/entities/300/sachin-ramesh-tendulkar-14.png",
        name: "Sachin Tendulkar",
        id: "@sachin551",
        button: "follow"

    },

    {
        pic: "https://upload.wikimedia.org/wikipedia/commons/8/86/Salman_Khan_at_Renault_Star_Guild_Awards.jpg",
        name: "Salman Khan",
        id: "@sallumiyan",
        button: "follow"

    },
    {
        pic: "https://tripuratoday.com//img_lib/large/39344c79ee4ed125d9f9b5a00fabf99e.jpg",
        name: "Janhvi Kapoor",
        id: "@jaankapoor",
        button: "follow"
    },
    {
        pic: "https://s.ndtvimg.com/images/entities/300/sachin-ramesh-tendulkar-14.png",
        name: "Sachin Tendulkar",
        id: "@sachin551",
        button: "follow"

    },

    {
        pic: "https://upload.wikimedia.org/wikipedia/commons/8/86/Salman_Khan_at_Renault_Star_Guild_Awards.jpg",
        name: "Salman Khan",
        id: "@sallumiyan",
        button: "follow"

    },
    {
        pic: "https://tripuratoday.com//img_lib/large/39344c79ee4ed125d9f9b5a00fabf99e.jpg",
        name: "Janhvi Kapoor",
        id: "@jaankapoor",
        button: "follow"
    },
    {
        pic: "https://s.ndtvimg.com/images/entities/300/sachin-ramesh-tendulkar-14.png",
        name: "Sachin Tendulkar",
        id: "@sachin551",
        button: "follow"

    },

    {
        pic: "https://upload.wikimedia.org/wikipedia/commons/8/86/Salman_Khan_at_Renault_Star_Guild_Awards.jpg",
        name: "Salman Khan",
        id: "@sallumiyan",
        button: "follow"

    },
    {
        pic: "https://tripuratoday.com//img_lib/large/39344c79ee4ed125d9f9b5a00fabf99e.jpg",
        name: "Janhvi Kapoor",
        id: "@jaankapoor",
        button: "follow"
    }
]
function Other() {

    const [showMoreFollow, SetShowMoreFollow] = useState(0)
    const _followArr = useMemo(() => {
        let counter = showMoreFollow + 1;
        let _follow = follow.slice(0, 3 * counter)
        return _follow
    }, [showMoreFollow]);

    const _followStatus = _followArr?.length >= follow?.length





    return (
        <other>
            <div className="other_div">
                <div className="input_div">
                    <CiSearch className="search_icon" />
                    < input type="text" className="input" placeholder="Search" />

                </div>

                <div className="sub_div">
                    <h3> Subscribe to Premium</h3>
                    <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                    <button className="sub_button"> Subscribe</button>

                </div>

                <div className="trend_div">
                    <h4>What's Happening</h4>
                    <div className="im_div">
                        <img src="https://hips.hearstapps.com/hmg-prod/images/milanfashioweek-looks-1551129903.jpg" alt="ss" />

                        <div>
                            <p>Milan Fashion Week 2024 Womenswear SS25</p>
                            <span>Fashion. 1 hour ago</span>
                        </div>
                    </div>


                    {trending.map((ele) => {


                        return (
                            <div className="trend2_div">

                                <div className="trend_div2">
                                    <p> {ele.id1}</p>
                                    <span>{ele.id2}</span>
                                    <p>{ele.id3}</p>
                                </div>
                                <div className="more">
                                    <p>{ele.more}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <div className="follow_div">
                    <h3>Who to follow</h3>



                    {_followArr.map((ple) => {
                        return (
                            <div className="f_div">
                                <img src={ple.pic} alt="ll" />

                                <div className="e_div">
                                    <div className="n_div">
                                        <h6>{ple.name}</h6>
                                        <p>{ple.id}</p>
                                    </div>
                                    <div className="b_div">
                                        <button>{ple.button}</button>
                                    </div>
                                </div>

                            </div>



                        )
                    })}

                    <button className="see_button" onClick={() =>
                        SetShowMoreFollow((prev) => (_followStatus ? 0 : prev + 1))
                    }>
                        {_followStatus ? "see less" : "see more"}
                    </button>




                </div>

                <div className="tc_div">
                    <p className="tc"> Terms of Service
                        Privacy Policy
                        Cookie Policy
                        Accessibility
                        Ads info

                        More
                        © 2024 X Corp.</p>

                </div>
            </div>
        </other>
    )
}

export default Other
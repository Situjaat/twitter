import "./Side.scss"
import { Route, Link, Routes } from 'react-router-dom'
import Home from "../home/Home";
import Explore from "../explore/Explore";
import For from "../foryou/For";
import FollowIng from "../following/Following";
import Notifications from "../notifications/Notifications";
import Messages from "../messages/Messages";
import Grok from "../grok/Grok";
import Bookmark from "../bookmark/Bookmark";
import Communities from "../communities/Communities";
import Premium from "../premium/Premium";
import All from "../all/All";
import Verified from "../verified/Verified";
import Mention from "../mention/Mention";

// const postData = [
//     {
//         profile: "https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png",
//         name: "Virat Kohli",
//         tick: <MdVerified />,
//         id: "@viratkohli",
//         time: "20h",
//         dot: <MdMoreHoriz />,
//         text: "RCB Forever.",
//         post: "https://biet.ac.in/images/events/womensday/wp-content/uploads/2023/11/virat-kohli-hd-wallpapers-2016_7fcc78ae5.jpg",
//         reply: <BiMessage /> ,
//         repost: <BiRepost />,
//         like: < IoHeartOutline />,
//         view: <BiBarChart />,
//         bookmark: <CiBookmark />,
//         share: <TbShare2 />
//     },

//     // {
//     //     profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Official_portrait_of_prime_minister_of_India%2C_Narendra_Modi.jpg/1200px-Official_portrait_of_prime_minister_of_India%2C_Narendra_Modi.jpg",
//     //     name: "Narendra Modi",
//     //     tick: <MdVerified />,
//     //     id: "@modinarendra",
//     //     time: "02h",
//     //     dot: <MdMoreHoriz />,
//     //     text: "नमस्कार मित्रों.",
//     //     post: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla",
//     //     reply: <BiMessage /> ,
//     //     repost: <BiRepost />,
//     //     like: < IoHeartOutline />,
//     //     view: <BiBarChart />,
//     //     bookmark: <CiBookmark />,
//     //     share: <TbShare2 />
//     // },

//     {
//         profile: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/385700/385794.png",
//         name: "Will Smith",
//         tick: <MdVerified />,
//         id: "@willsmith",
//         time: "22h",
//         dot: <MdMoreHoriz />,
//         text: "Bad Boyz Guys.",
//         post: "https://cdnph.upi.com/ph/st/th/2871717478818/2024/i/17174796043897/v1.2/Movie-review-Bad-Boys-4-fails-to-recapture-Will-Smith-Martin-Lawrence-glory.jpg?lg=5&=1",
//         reply: <BiMessage /> ,
//         repost: <BiRepost />,
//         like: < IoHeartOutline />,
//         view: <BiBarChart />,
//         bookmark: <CiBookmark />,
//         share: <TbShare2 />
//     },

//     {
//         profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/465px-Dwayne_Johnson_2%2C_2013.jpg",
//         name: "The Rock",
//         tick: <MdVerified />,
//         id: "@therock",
//         time: "15h",
//         dot: <MdMoreHoriz />,
//         text: "Gym Time .",
//         post: "https://wallpapercave.com/wp/wp1990689.jpg",
//         reply: <BiMessage /> ,
//         repost: <BiRepost />,
//         like: < IoHeartOutline />,
//         view: <BiBarChart />,
//         bookmark: <CiBookmark />,
//         share: <TbShare2 />
//     },

//     {
//         profile: "https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/320600/320632.png",
//         name: "Smriti Mandhana",
//         tick: <MdVerified />,
//         id: "@Mandhana",
//         time: "11h",
//         dot: <MdMoreHoriz />,
//         text: "WTC 2024 .",
//         post: "https://www.bollywoodshaadis.com/img/article-202437714080350883000.webp",
//         reply: <BiMessage /> ,
//         repost: <BiRepost />,
//         like: < IoHeartOutline />,
//         view: <BiBarChart />,
//         bookmark: <CiBookmark />,
//         share: <TbShare2 />
//     },

//     {
//         profile: "https://play-lh.googleusercontent.com/7foNw0MJCmF1p2-a-AYxcgppowPUM27UkNht1VjV7QVcVDog0pWs0Djmbx0ufluarss",
//         name: "Rashmika ",
//         tick: <MdVerified />,
//         id: "@rashmikamandana",
//         time: "17h",
//         dot: <MdMoreHoriz />,
//         text: "Fun Time .",
//         post: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/h/m/z/small-rashmika-mandanna-5-rashmika-mandanna-poster-multicolor-original-imaghvgzhzjgn3bt.jpeg?q=90&crop=false",
//         reply: <BiMessage /> ,
//         repost: <BiRepost />,
//         like: < IoHeartOutline />,
//         view: <BiBarChart />,
//         bookmark: <CiBookmark />,
//         share: <TbShare2 />
//     },

//     // {
//     //     profile: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/465px-Dwayne_Johnson_2%2C_2013.jpg",
//     //     name: "ETV Rajasthan",
//     //     tick: <MdVerified />,
//     //     id: "@therock",
//     //     time: "15h",
//     //     dot: <MdMoreHoriz />,
//     //     text: "Gym Time .",
//     //     post: "https://wallpapercave.com/wp/wp1990689.jpg",
//     //     reply: <BiMessage /> ,
//     //     repost: <BiRepost />,
//     //     like: < IoHeartOutline />,
//     //     view: <BiBarChart />,
//     //     bookmark: <CiBookmark />,
//     //     share: <TbShare2 />
//     // },

//     {
//         profile: "https://oshoworld.com/wp-content/uploads/2022/03/06.jpg",
//         name: "Osho Vichar",
//         tick: <MdVerified />,
//         id: "@osho",
//         time: "23h",
//         dot: <MdMoreHoriz />,
//         text: "Gyan Ki Baat.",
//         post: "https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2020/09/17/osho-quotes2_1600317449.jpg",
//         reply: <BiMessage /> ,
//         repost: <BiRepost />,
//         like: < IoHeartOutline />,
//         view: <BiBarChart />,
//         bookmark: <CiBookmark />,
//         share: <TbShare2 />
//     },

//     {
//         profile: "https://image.winudf.com/v2/image/Y29tLmNyaXN0aWFub3JvbmFsZG8uaGR3YWxscGFwZXJzX2ljb25fMTUyMDc3NTUyN18wMjQ/icon.png?w=&fakeurl=1",
//         name: " Cristino Ronaldo",
//         tick: <MdVerified />,
//         id: "@cr7",
//         time: "19h",
//         dot: <MdMoreHoriz />,
//         text: "Game on Change.",
//         post: "https://www.shutterstock.com/image-photo/leipzig-germany-june-18-2024-600nw-2480454921.jpg",
//         reply: <BiMessage /> ,
//         repost: <BiRepost />,
//         like: < IoHeartOutline />,
//         view: <BiBarChart />,
//         bookmark: <CiBookmark />,
//         share: <TbShare2 />
//     },

//     {
//         profile: "https://www.careerpower.in/blog/wp-content/uploads/2024/09/03133136/Rajasthan-Police-Constable-Result-2024.webp",
//         name: "Rajasthan Police Official",
//         tick: <MdVerified />,
//         id: "@rajpolice",
//         time: "05h",
//         dot: <MdMoreHoriz />,
//         text: "Pratapgarh Police Cyber Team.",
//         post: "https://cf-img-a-in.tosshub.com/lingo/ithi/images/story/202309/amit_2-sixteen_nine.jpg?size=940:529",
//         reply: <BiMessage /> ,
//         repost: <BiRepost />,
//         like: < IoHeartOutline />,
//         view: <BiBarChart />,
//         bookmark: <CiBookmark />,
//         share: <TbShare2 />
//     }
// ]



function Side() {
    return (
        <aside>
            <div className="side-div">

                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="" element={<For />} />
                        <Route path="foryou" element={<For />} />
                        <Route path="following" element={<FollowIng />} />
                    </Route>

                    <Route path="/explore" element={<Explore />} />
                    <Route path="/notifications/" element={<Notifications />} >
                        <Route path="" element={<All />} />
                        <Route path="all" element={<All />} />
                        <Route path="verified" element={<Verified />} />
                        <Route path="mention" element={<Mention />} />

                    </Route>

                    <Route path="/messages" element={<Messages />} />
                    <Route path="/grok" element={<Grok />} />
                    <Route path="/bookmark" element={<Bookmark />} />
                    <Route path="/communities" element={<Communities />} />
                    <Route path="/premium" element={<Premium />} />
                </Routes>



            </div>

        </aside>
    )
}

export default Side
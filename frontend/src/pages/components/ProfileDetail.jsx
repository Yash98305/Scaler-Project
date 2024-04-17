// import React, { useEffect, useState } from "react";
// import "../../css/profile.css";
// import Edit from "./Edit.jsx";
// import { useAuth } from "../../context/auth.js";
// import axios from "axios";
// const ProfileDetail = () => {
//   const props = JSON.parse(localStorage.getItem("auth")).user
//   const avatar = props.avatar;
//   const [edit,setEdit] = useState(false);
//   const {auth} = useAuth()
//   const EditHandle = ()=>{
// setEdit(!edit)
//   }
// //   useEffect(()=>{
// // const photo = async()=>{
// //   let img = await axios.get(`http://localhost:8000/api/v1/user/photo/${props._id}`)
// // setImg(img.request.responseURL)
// // console.log(img)
// // }
// // photo()
// //   },[auth?.user])
//   return (
//     <>
//       {/* <div className="container">
//         <div className="cover-photo">
//           <img src= {!props.photo?img: `http://localhost:8000/api/v1/user/photo/${props._id}`} className="profile" alt='#'/>
//         </div>
//         <div className="edit" >
//         <div className="profile-name">{props.name}</div>
//         <button >Edit</button>
//         </div>

//         <p className="about">{props.about===""||!props.about?<>Write about yourself...</>:props.about}</p>
//         <h3>Contact Details</h3>
//         <div className="contact">
//             <div><div>Email</div>
//         <div>{props.email}</div></div>

//         <div><div>Phone</div>
//         <div>{props.phone}</div></div>
//         <Edit/>
//     </div>

//       </div> */}

//       <div className="container">
//         <div className="cover-photo">
//           <img
//             src={
//               !props.photo
//                 ? avatar
//                 : `http://localhost:8000/api/v1/user/photo/${props._id}`
//             }
//             className="profile"
//             alt="#"
//           />
//         </div>
//         <div className="edit">
//         <div className="profile-name">{props.name}</div>
//             <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>

//           <button class="Btn1" onClick={EditHandle}>Edit 
//       <svg class="svg" viewBox="0 0 512 512">
//         <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
//     </button>

//         </div>

//         <p className="about">
//           {props.about === "" || !props.about ? (
//             <>Write about yourself...</>
//           ) : (
//             props.about
//           )}
//         </p>
//         <h3>Contact Details</h3>
//         <div className="contact">
//           <div>
//             <div>Email</div>
//             <div>{props.email}</div>
//           </div>

//           <div>
//             <div>Phone</div>
//             <div>{props.phone}</div>
//           </div>
//         </div>
//       </div>
//       <div>
// {/* {edit?<Edit/>:""} */}

//       </div>

//     </>
//   );
// };

// export default ProfileDetail;




import React, { useEffect, useState } from "react";
import "../../css/profile.css";
import Pro from "./Pro.jsx"
import { useAuth } from "../../context/auth.js";
import axios from "axios";
const ProfileDetail = () => {
  const props = JSON.parse(localStorage.getItem("auth")).user
  const avatar = props.avatar;
  const [edit,setEdit] = useState(false);
  const {auth} = useAuth()
  const EditHandle = ()=>{
setEdit(!edit)
  }
//   useEffect(()=>{
// const photo = async()=>{
//   let img = await axios.get(`http://localhost:8000/api/v1/user/photo/${props._id}`)
// setImg(img.request.responseURL)
// console.log(img)
// }
// photo()
//   },[auth?.user])
  return (
    <>
    {edit?<Pro setEdit={setEdit}/>:""}
    
      <div className="space"></div>
      <div className="pro_con">
        <div>
          <img
src={
              !props.photo
                ? avatar
                : `http://localhost:8000/api/v1/user/photo/${props._id}`
            }            alt=""
          />
        </div>
        <div class="notedit container">
          <div class="text">Your Profile</div>
          <div className="btn1_con">
            <button class="Btn1" onClick={EditHandle}>Edit
              <svg class="svg" viewBox="0 0 512 512">
                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path></svg>
            </button></div>
          <form action="#">
            <div class="form-row">
              <div className="input-data">
                <div className="up_con">Your Name</div>
                <div className="mid_con">{props.name}</div>
                <div className="underline_1"></div>
              </div>

            </div>
            <div class="form-row">
              <div class="input-data">
                <div className="up_con">Email</div>
                <div className="mid_con">{props.email}</div>
                <div className="underline_1"></div>
              </div>


              <div class="input-data">
                <div className="up_con">Contact No.</div>
                <div className="mid_con">{props.phone}</div>
                <div className="underline_1"></div>

              </div>
              </div>

              <div class="form-row">
                <div class="input-data">
                  <div className="up_con">About</div>
                  <div className="mid_con">{props.about}</div>
                  <div className="underline_1"></div>
                </div>
              </div>
             
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;

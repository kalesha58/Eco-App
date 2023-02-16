// import React, { Fragment, useEffect, useState } from "react";
// import "./Profile.css"
// import MetaData from "../layout/MetaData";
// import { Link } from "react-router-dom";
// import {useDispatch,useSelector} from "react-redux"
// import { loadUser } from "../../Redux/Actions/userAction";


// const Profile = () => {
//     const [load,setLoad]=useState(false)
//     const dispatch=useDispatch()
//     const {user} =useSelector(state=>state.user)
//     console.log("p",user)
//     useEffect(()=>{
//      setLoad(true)
//        },[])
//     useEffect(()=>{
//         dispatch(loadUser())
//        },[load])
//   return (
//     <Fragment>
//       {user?.length>0 &&  <div>
//         <MetaData title={`${user.name}'s profile`} />
//       <div className="profileContainer">
//         <div>
//           <h1>My Profile</h1>
//           <img src={user?.avatar.url} alt={user?.name} />
//           <Link to="/me/update">Edit Profile</Link>
//         </div>
//         <div>
//           <div>
//             <h4>Full Name</h4>
//             <p>{user?.name}</p>
//           </div>
//           <div>
//             <h4>Email</h4>
//             <p>{user?.email}</p>
//           </div>
//           <div>
//             <h4>Joined On</h4>
//             <p>{String(user?.createdAt).substr(0, 10)}</p>
//           </div>

//           <div>
//             <Link to="/orders">My Orders</Link>
//             <Link to="/password/update">Change Password</Link>
//           </div>
//         </div>
//       </div>
//       </div> }
//     </Fragment>
//   );
// };

// export default Profile;
import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../Components/MetaData";
import Loader from "../Pages/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate=useNavigate()
console.log(user)
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name}'s Profile`} />
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
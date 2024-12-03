import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
  const { user, signOutNow } = useContext(AuthContext);
  const Link = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      {user && (
        <>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </>
      )}
    </>
  );
  const handleSignOut = () => {
    signOutNow()
      .then(() => {
        console.log("singOut successfull");
      })
      .catch(error, console.log(error));
  };
  // console.log(user);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {Link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5 font-bold">
          {Link}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        {user ? (
          <>
            <a className="">{user?.email}</a>
            <a onClick={handleSignOut} className="btn">
              {"Sign Out"}
            </a>
          </>
        ) : (
          <>
            <NavLink to="/login" className="btn">
              {"Login"}
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navber;

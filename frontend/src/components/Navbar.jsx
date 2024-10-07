import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className=" flex items-center justify-between text-sm py-2 mb-5 border-b border-b-gray-400">
      <Link to={"/"}>
        {" "}
        <img
          className="ml-[-2rem] w-[15rem] cursor-pointer"
          src={assets.logo}
          alt=""
        />
      </Link>
      <ul className=" hidden md:flex items-start font-medium  gap-6">
        <NavLink to="/">
          <li className=" py-1">HOME</li>
          <hr className=" border-none outline-none h-0.5  bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className=" py-1">ALL DOCTORS</li>
          <hr className=" border-none outline-none h-0.5  bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="about">
          <li className=" py-1">ABOUT</li>
          <hr className=" border-none outline-none h-0.5  bg-primary w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className=" border-none outline-none h-0.5  bg-primary w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className=" flex items-center gap-4">
        {token ? (
          <div className=" flex items-center gap-2  cursor-pointer group relative">
            <img
              className=" w-10 rounded-full"
              src={assets.profile_pic}
              alt=""
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />

            <div className=" absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 hidden z-20 group-hover:block">
              <div className=" min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className=" hover:text-black cursor-pointer"
                >
                  Myprofile
                </p>
                <p
                  onClick={() => navigate("my-appointments")}
                  className=" hover:text-black cursor-pointer"
                >
                  MyAppointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className=" hover:text-black cursor-pointer"
                >
                  LogOut
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className=" bg-primary  text-white px-8 py-3  rounded-full font-light  hidden md:block"
          >
            Create account
          </button>
        )}

        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
       {/* ---------------mobile menu--------------- */}
        <div className={`${showMenu?'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`} >
          <div className=" flex  items-center justify-between px-5 py-6">
            <img  className=" w-44" src={assets.logo} alt="" />
            <img className=" w-8 bg-red-600 p-1" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className=" flex flex-col items-center gap-2 px-5 text-lg font-medium">
            <NavLink  onClick={()=>setShowMenu(false)} to="/">       <p className="px-4 py-2 rounded inline-block">HOME</p> </NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to="/doctors"><p className="px-4 py-2 rounded inline-block">All Doctors</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to="/about">  <p className="px-4 py-2 rounded inline-block">About</p> </NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to="/contact"><p className="px-4 py-2 rounded inline-block">Contact</p> </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

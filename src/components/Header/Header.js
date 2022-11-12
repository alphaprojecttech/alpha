import React from "react";
import user_img from "../../images/user_img.jpg";
import { HiOutlineLogout } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";

export default function Header(props) {
  let { Logout, currentUser } = useAuth();
  return !currentUser ? null : (
    <>
      <nav className="bg-black text-white rounded-xl py-4 px-6 flex items-center justify-between border border-[#ffffffa8]">
        <div className="flex items-center">
          <AiOutlineMenu size={22} className="mr-4 cursor-pointer lg:hidden" onClick={()=> props.setNavbar(true)} />
          <img
            src={currentUser.photoURL}
            className="w-12 h-12 rounded-full"
            alt="user-img"
          />
          <h3 className="ml-3">
            Hello,<span className="ml-1">{currentUser.displayName}</span>
          </h3>
        </div>

        {/* LOGOUT */}
        <button className="flex items-center" onClick={Logout}>
          <HiOutlineLogout size={22} />
        </button>
      </nav>
    </>
  );
}

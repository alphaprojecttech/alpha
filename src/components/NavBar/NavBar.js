import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import { BiHomeAlt } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function NavBar(){
    
    return(
      <>
      <aside
        className={
          props.navbar
            ? "bg-black translate-x-0 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 border border-[#ffffffa8] xl:translate-x-0"
            : "bg-black translate-x-[-110%] fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 border border-[#ffffffa8] xl:translate-x-0"
        }
      >
        <div className="relative border-b border-white/20 border-blue-gray-50">
          <a className="flex items-center justify-center gap-4 py-6 px-8">
            <img
              alt="logo"
              src={logo}
              className="inline-block relative object-center w-9 h-9"
            />
            <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
              Alpha Project
            </h6>
          </a>

          <button
            className="my-3 mx-2.5 text-white absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
            type="button"
            onClick={()=> props.setNavbar(false)}
          >
            <AiOutlineClose/>
          </button>
        </div>

        <div className="my-4">
          <ul className="mb-4 flex flex-col gap-1">
            <li>
              <NavLink
                exact
                activeClassName="active"
                to="/home"
                className="flex items-center gap-4 px-8 py-3 text-white capitalize w-full border-r-2 border-transparent"
              >
                <BiHomeAlt size={22} className="fill-white" />
                <p className="font-medium capitalize">Home</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                activeClassName="active"
                className="flex items-center gap-4 px-8 py-3 text-white capitalize w-full border-r-2 border-transparent"
                to="/projects"
              >
                <MdWorkOutline size={22} className="fill-white" />
                <p className="font-medium capitalize">Projects</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                activeClassName="active"
                className="flex items-center gap-4 px-8 py-3 text-white capitalize w-full border-r-2 border-transparent"
                to="/profile"
              >
                <FaRegUserCircle size={22} className="fill-white" />
                <p className="font-medium capitalize">Profile</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                activeClassName="active"
                className="flex items-center gap-4 px-8 py-3 text-white capitalize w-full border-r-2 border-transparent"
                to="/task"
              >
                <FaRegUserCircle size={22} className="fill-white" />
                <p className="font-medium capitalize">Task</p>
              </NavLink>
            </li>

            <li>
              <NavLink
                exact
                activeClassName="active"
                className="flex items-center gap-4 px-8 py-3 text-white capitalize w-full border-r-2 border-transparent"
                to="/view_task"
              >
                <FaRegUserCircle size={22} className="fill-white" />
                <p className="font-medium capitalize">View task</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
    )
}

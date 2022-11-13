import { useState } from "react";
import { useProject } from "../../context/ProjectContext";
import { BiEditAlt, BiCoin } from "react-icons/bi";
import { MdOutlineCategory, MdOutlineDescription } from "react-icons/md";
import { VscTypeHierarchySub } from "react-icons/vsc";
import { HiCalendar, HiCalendarDays } from "react-icons/hi2";
import { AiFillGithub } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { BsCheck2 } from "react-icons/bs";

export default function AllProjects() {
  const [showTasks, setShowTasks] = useState(false);

  let { allProjects } = useProject();

    const handleSelectProject = (pid)=> {
        console.log(pid)
    }


    return (
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2">
      {allProjects.map((project) => {
        return (
          <div key={project.pid} className="bg-black text-white rounded-xl py-5 px-6 space-y-3 border border-[#ffffffa8]">

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <BiEditAlt size={22} className="fill-black" />
                </span>
                <span className="break-words">Title:</span>
              </span>
              <span className="w-1/2 break-all">{project.title}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <BiEditAlt size={22} className="fill-black" />
                </span>
                <span className="break-words">Pid:</span>
              </span>
              <span className="w-1/2 break-all">{project.pid}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <MdOutlineCategory size={22} className="fill-black" />
                </span>
                <span className="break-words">Category:</span>
              </span>
              <span className="w-1/2 break-all">{project.category}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <VscTypeHierarchySub size={22} className="fill-black" />
                </span>
                <span className="break-words">Type:</span>
              </span>
              <span className="w-1/2 break-all">{project.type}</span>
            </div>

            
            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <MdOutlineDescription size={22} className="fill-black" />
                </span>
                <span className="break-words">Description:</span>
              </span>
              <span className="w-1/2 break-all">{project.description}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <BiCoin size={22} className="fill-black" />
                </span>
                <span className="break-words">Budget:</span>
              </span>
              <span className="w-1/2 break-all">${project.budget}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <HiCalendar size={22} className="fill-black" />
                </span>
                <span className="break-words">Start Date:</span>
              </span>
              <span className="w-1/2 break-all">{project.startdate}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <HiCalendarDays size={22} className="fill-black" />
                </span>
                <span className="break-words">Deadline:</span>
              </span>
              <span className="w-1/2 break-all">{project.deadline}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <AiFillGithub size={22} className="fill-black" />
                </span>
                <span className="break-words">Github Repo:</span>
              </span>
              <span className="w-1/2 break-all">{project.github}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <RiUser3Line size={22} className="fill-black" />
                </span>
                <span className="break-words">Number Of People:</span>
              </span>
              <span className="w-1/2 break-all">{project.participants.length}</span>
            </div>

            <div className="flex items-center">
              <span className="w-1/2 flex items-center">
                <span className="flex items-center w-8 h-8 rounded-md justify-center bg-white mr-3">
                  <BsCheck2 size={22} className="fill-black" />
                </span>
                <span className="break-words">Complete:</span>
              </span>
              <span className="w-1/2 break-all">{project.complete? "true" : "false"}</span>
            </div>
          </div>
        );
      })}
    </div>
    )
}

import { useState } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import AllProjects from "../components/Projects/AllProjects";


export default function Home() {

  const [navbar, setNavbar] = useState(false)

  return (
    <>
    {/* BACKGROUND COLOR #1e1e1e */}
      <div className="bg-[#161616]">
        <NavBar navbar={navbar} setNavbar={setNavbar}/>
        <div className="p-4 xl:ml-80">
          <Header setNavbar={setNavbar}/>
          <div className="mt-12">

            
            <AllProjects />
            
          
          </div>
        </div>
      </div>
    </>
  );
}

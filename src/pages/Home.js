import { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { MdRadioButtonUnchecked } from 'react-icons/md'
import NavBar from '../components/NavBar/NavBar'
import { useAuth } from '../context/AuthContext'
import { useProject } from '../context/ProjectContext'




export default function Home() {

    let [project,setProject]=useState('')

    let { Logout,currentUser } = useAuth();
    let {addProjects,fetchProjects,allprojects}=useProject();
  

    const projectHandler=(e)=>{
        e.preventDefault();
        if(currentUser && project){
            console.log(currentUser.uid);
            addProjects(currentUser.uid,project);
            setProject('')
        }
        else{
            console.log("Todo required!");
        }
    }



    useEffect(() => {
        fetchProjects(currentUser.uid);
    }, [currentUser.uid, fetchProjects]);
    

    
 
   

    return (
        <>
        <NavBar/>
    
            <div className="flex flex-col justify-center items-center h-screen">
                {/* todo  */}
                <div className="flex items-center justify-center w-screen h-screen font-medium">
                    <div className="flex flex-grow items-center justify-center h-full text-gray-600">
                        {/* Component Start */}
                        <div className="max-w-full bg-white shadow-lg px-2 border-t-0 w-[60em]">
                            <form onSubmit={projectHandler}>
                            <div className='flex justify-start items-center px-3 space-x-5'>
                                <BsChevronDown />
                                <input type="text" className='w-full py-3' placeholder='Write a todo' onChange={(e)=>setProject(e.target.value)} value={project} />
                            </div>
                            </form>

                            {allprojects && Object.keys(allprojects)?.map((project,idx) =>
                                {
                                    return(
                                        <div className="flex justify-start items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100 border-t border-b py-6" key={idx}>
                                    <MdRadioButtonUnchecked className='w-7 h-7 text-gray-300' />
                                    <span className="ml-4 text-lg font-normal">{allprojects[project]}</span>
                                </div>
                                    )
                                }
                            )}

                            <div className='flex justify-between items-center py-3'>
                                <div>
                                    <p>3 items added</p>
                                </div>
                                <div className='flex space-x-3'>
                                    <button className='border px-2 py-1 rounded-sm border-gray-400'>All</button>
                                    <button>Active</button>
                                    <button>Completed</button>
                                </div>
                                <div>
                                    <button>Clear Completed</button>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
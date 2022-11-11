import { useState } from 'react';
import AddProject from "../components/Projects/AddProject";
import EditProject from "../components/Projects/EditProject";
import { useProject } from '../context/ProjectContext';

export default function Projects(){
    const { allProjects, deleteProject } = useProject()
    const [ showEdit, setShowEdit ] = useState(false)


    const handleShowEdit = () =>{
            if(showEdit) return setShowEdit(false)
            if(!showEdit) return setShowEdit(true)
    }
 
    return(
        <div>
           <AddProject />
        {allProjects.map(project => {
            return(
                <div key={project.pid} style={{border: '1px solid black', margin: 5, padding: 5}}>
                    <h3>{project.title}</h3>
                    <button onClick={handleShowEdit}>Edit</button>
                    <button onClick={()=> deleteProject(project.pid)}>Delete</button>
                    {!showEdit? null :
                        <EditProject project={project} setShowEdit={setShowEdit}/>
                    }
                </div>
            )
        })}
        </div>
    )
}
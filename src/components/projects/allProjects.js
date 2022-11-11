import { useEffect, useState } from 'react'
import { useProject } from '../../context/ProjectContext'




export default function AllProjects() {
    const [ showTasks, setShowTasks ] = useState(false)

    let { allProjects } = useProject();

    const handleSelectProject = (pid)=> {
        console.log(pid)
    }


    return (
        <div>
            {allProjects.map(project => {
                return(
                    <div key={project.pid} style={{border: '1px solid black', padding: 5, margin: 10}}>
                        <h3>Title: {project.title}</h3>
                        <h4>Pid: {project.pid}</h4>
                        <p>Category: {project.category}</p>
                        <p>Type: {project.type}</p>
                        <p>Description: {project.description}</p>
                        <p>Budget: ${project.budget}</p>
                        <p>Start Date: {project.startdate}</p>
                        <p>Deadline: {project.deadline}</p>
                        <p>Github Repo: {project.github}</p>
                        <p>Number Of People: {project.participants.length}</p>
                        <p>Complete: {project.complete? "true" : "false"}</p>
                    </div>
                )
            })}
    
        </div>
    )
}
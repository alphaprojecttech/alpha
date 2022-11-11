import { useState } from 'react';
import { useProject } from '../../context/ProjectContext';


export default function EditProject({project, setShowEdit}){
    const [ title, setTitle ] = useState(project.title)
    const [github, setGithub ] = useState(project.github)
    const [ description, setDescription ] = useState(project.description)
    const [ budget, setBudget ] = useState(project.budget)
    const [ category, setCategory ] = useState(project.category)

    let { editProject } = useProject();


    const handleEditProject = ()=>{
        editProject(project.pid, {
            title: title,
            github: github,
            description: description,
            budget: budget,
            category: category
        })
        setShowEdit(false)
    }




    return(
        <div style={{display: 'flex', flexDirection: 'column', width: 400, margin: 10, padding: 5, border: '2px solid green'}}>
            <h3>Edit Project</h3>
            <input value={title} placeholder='Name' onChange={(e)=> setTitle(e.target.value)} />
            <input value={description} placeholder='Description' onChange={(e)=> setDescription(e.target.value)} />
            <input value={github} placeholder='Github link' onChange={(e)=> setGithub(e.target.value)} />
            <input value={category} placeholder='Category' onChange={(e)=> setCategory(e.target.value)} />
            <label htmlFor="projectBudget">Project Budget:</label>
            <input id="projectBudget" type="number" name="projectBudget" value={budget} onChange={(e)=> setBudget(e.target.value)} />   
            <button onClick={handleEditProject}>Save Changes</button>
        </div>
    )
}
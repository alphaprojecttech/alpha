import { useState } from 'react';
import { useProject } from '../../context/ProjectContext'


export default function EditProject(){
    const [ name, setName ] = useState('')
    const [github, setGithub ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ budget, setBudget ] = useState(0)
    const [ category, setCategory ] = useState('')

    let { editProject } = useProject();


    const handleEditProject = ()=>{
            editProject({
                name: name,
                github: github,
                description: description,
                budget: budget,
                category: category
            })
    }




    return(
        <div style={{display: 'flex', flexDirection: 'column', width: 400, margin: 10, padding: 5, border: '2px solid green'}}>
            <h3>Edit Project</h3>
            <input value={name} placeholder='Name' onChange={(e)=> setName(e.target.value)} />
            <input value={description} placeholder='Description' onChange={(e)=> setDescription(e.target.value)} />
            <input value={github} placeholder='Github link' onChange={(e)=> setGithub(e.target.value)} />
            <input value={category} placeholder='Category' onChange={(e)=> setCategory(e.target.value)} />
            <label htmlFor="projectBudget">Project Budget:</label>
            <input id="projectBudget" type="number" name="projectBudget" value={budget} onChange={(e)=> setBudget(e.target.value)} />   
            <button onClick={handleEditProject}>Add Project</button>
        </div>
    )
}
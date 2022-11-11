import { useState } from 'react';
import { useProject } from '../../context/ProjectContext'


export default function AddProject(){
    const [ title, setTitle ] = useState('')
    const [github, setGithub ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ budget, setBudget ] = useState(0)
    const [ category, setCategory ] = useState('')
    const [ type, setType ] = useState('')
    let { addProject } = useProject();


    const handleAddProject = ()=>{
        console.log(type)
            addProject({
                title,
                github,
                description,
                budget,
                category,
                type
            })
    }




    return(
        <div style={{display: 'flex', flexDirection: 'column', width: 400, margin: 10, padding: 5, border: '1px solid black'}}>
            <h3>Add Project</h3>
            <input value={title} placeholder='Title' onChange={(e)=> setTitle(e.target.value)} />
            <textarea value={description} onChange={(e)=> setDescription(e.target.value)} name="Text1" cols="40" rows="5"></textarea>
            <input value={github} placeholder='Github link https://projectlink.git' onChange={(e)=> setGithub(e.target.value)} />
            <input value={category} placeholder='Category' onChange={(e)=> setCategory(e.target.value)} />
            <input value={type} placeholder='Type' onChange={(e)=> setType(e.target.value)} />
            <label htmlFor="projectBudget">Project Budget:</label>
            <input id="projectBudget" type="number" name="projectBudget" value={budget} onChange={(e)=> setBudget(e.target.value)} />   
            <button onClick={handleAddProject}>Add Project</button>
        </div>
    )
}
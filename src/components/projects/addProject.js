import { useState } from 'react';
import { useProject } from '../../context/ProjectContext'


export default function AddProject(){
    const [ title, setTitle ] = useState('')
    const [github, setGithub ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ budget, setBudget ] = useState(0)
    const [ category, setCategory ] = useState('blog')
    const [ type, setType ] = useState('website')
    let { addProject } = useProject();

    //Add project to database
    const handleAddProject = ()=>{
        console.log(category)
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
            <input style={{margin: 5, padding: 5}} value={title} placeholder='Title' onChange={(e)=> setTitle(e.target.value)} />
            <textarea style={{margin: 5, padding: 5}} value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Enter project description" cols="40" rows="5"></textarea>
            <input style={{margin: 5, padding: 5}} value={github} placeholder='Github link https://projectlink.git' onChange={(e)=> setGithub(e.target.value)} />
            <select style={{margin: 5, padding: 5}} value={category} onChange={(e)=> setCategory(e.target.value)}>
                <option value="blog">Blog</option>
                <option value="ecommerce">Ecommerce</option>
            </select>
            <select style={{margin: 5, padding: 5}} value={type} onChange={(e)=> setType(e.target.value)}>
                <option value="website">Website</option>
                <option value="api">Api</option>
            </select>
            <label style={{margin: 5, padding: 5}} htmlFor="projectBudget">Project Budget:</label>
            <input style={{margin: 5, padding: 5}} id="projectBudget" type="number" name="projectBudget" value={budget} onChange={(e)=> setBudget(e.target.value)} />   
            <button style={{margin: 5, padding: 5}} onClick={handleAddProject}>Add Project</button>
        </div>
    )
}
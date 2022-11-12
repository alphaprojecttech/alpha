import { useState } from "react"
import { useProject } from "../../context/ProjectContext"
import { useTask } from "../../context/TaskContext"


export default function AddTask() {
    
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [type, setType] = useState('')
    const [project, setProject] = useState('')
    const [deadline, setDeadline] = useState('')
    const [amount, setAmount] = useState('')
    const [image, setImage] = useState('')
    const [active, setActive] = useState(false)
    const [complete, setComplete] = useState(false)

    let { addTask } = useTask();

    let { allProjects } = useProject();
    // console.log(allProjects);

    const createTask = (e) => {
        e.preventDefault();
        console.log(name, text, type, project, deadline, amount, image, active, complete);
        addTask({
            name, text, type, project, deadline, amount, image, active, complete
        });
    }
    
    return (
        <>
            <form className="w-1/2 border border-dotted flex flex-col space-y-3">
                <div className="mb-5">
                    <h1 className="text-2xl font-bold">Task Create Form</h1>
                </div>
                <div>
                    <h1>Task Name</h1>
                    <input type="text" className="border" name="" placeholder="Task Name" onChange={(e)=>setName(e.target.value)} />       
                </div>
                <div>
                    <h1>Task Text</h1>
                    <input type="text" className="border" name="" placeholder="Task Text" onChange={(e) => setText(e.target.value)} />
                </div>
                <div className="border">
                    <h1>Task Type</h1>
                    <select name="" id="" className="border" onChange={(e) => setType(e.target.value)}>
                        <option value="">Choose One</option>
                        <option value="Development">Development</option>
                        <option value="Marketing">Marketing</option>
                    </select>
                </div>
                <div className="border">
                    <h1>Project</h1>
                    <select name="" id="" className="border" onChange={(e) => setProject(e.target.value)}>
                        <option value="">Choose One</option>
                        {allProjects?.map((projectItem) => {
                            return (
                                <>
                                    <option value={projectItem.pid}>{projectItem.title }</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div className="border">
                    <h1>Deadline</h1>
                    <input type="date" className="border" name="" placeholder="Task Name" onChange={(e) => setDeadline(e.target.value)} />
                </div>
                <div className="border">
                    <h1>Amount</h1>
                    <input type="number" className="border" name="" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="border">
                    <h1>Upload Image</h1>
                    <input type="file" className="border" name="" placeholder="Upload File" onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="border">
                    <input type="checkbox" name="" id="" onChange={(e) => setActive(e.target.value)} /> Active
                </div>
                <div className="border">
                    <input type="checkbox" name="" id="" onChange={(e) => setComplete(e.target.value)} /> Complete
                </div>
                <div className="border">
                    <button className="bg-blue-200 px-2 py-1" onClick={(e)=>createTask(e)}>Create Task</button>
                </div>
            </form>
        </>
    )
}
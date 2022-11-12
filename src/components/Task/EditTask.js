import { useState } from 'react';
import { useTask } from '../../context/TaskContext';


export default function EditTask({task, setShowEdit}){
    const [name, setName] = useState(task.name)
    const [text, setText] = useState(task.text)
    const [type, setType] = useState(task.type)
    const [project, setProject] = useState(task.project)
    const [deadline, setDeadline] = useState(task.deadline)
    const [amount, setAmount] = useState(task.amount)
    const [image, setImage] = useState(task.image)
    const [active, setActive] = useState(task.active)
    const [complete, setComplete] = useState(task.complete)

    let { editTask } = useTask();


    const handleEditProject = ()=>{
        editTask(task.pid, {
            name: name,
            text: text,
            deadline: deadline,
            amount: amount,
        })
        setShowEdit(false)
    }




    return(
        <div style={{display: 'flex', flexDirection: 'column', width: 400, margin: 10, padding: 5, border: '2px solid green'}}>
            <h3>Edit Task</h3>
            <input value={name} placeholder='Task Name' onChange={(e)=> setName(e.target.value)} />
            <input value={text} placeholder='Task Description' onChange={(e)=> setText(e.target.value)} />
            <input value={amount} placeholder='Amount' type='number' onChange={(e)=> setAmount(e.target.value)} />
            <input value={deadline} placeholder='Deadline' type='date' onChange={(e)=> setDeadline(e.target.value)} />
         
            <button onClick={handleEditProject}>Save Changes</button>
        </div>
    )
}
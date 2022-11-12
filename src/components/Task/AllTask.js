import { useState } from 'react';
import { useTask } from '../../context/TaskContext';



export default function AllTask() {
    const [showTasks, setShowTasks] = useState(false)

    let { allTasks } = useTask();


    const handleSelectTask = (pid) => {
        console.log(pid)
    }



    return (
        <div>
            {allTasks?.map(task => {
                return (
                    <div key={task.pid} style={{ border: '1px solid black', padding: 5, margin: 10 }}>
                        <h3>Name: {task.name}</h3>
                        <h4>Pid: {task.pid}</h4>
                        <p>Text: {task.text}</p>
                        <p>Type: {task.type}</p>
                        <p>Amount: {task.amount}</p>
                        <p>Image: ${task.image}</p>
                        <p>Active: {task.active}</p>
                        <p>Complete: {task.complete}</p>
                        <p>Project: {task.project}</p>
                    </div>
                )
            })}

        </div>
    )
}
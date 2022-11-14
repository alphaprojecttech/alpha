import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTask } from '../context/TaskContext';


export default function ViewTask() {
    const [showTasks, setShowTasks] = useState(false);
    let [allProjects, setAllProjects] = useState([]);

    let { allTasks } = useTask();

    // console.log(taskId);

    const handleSelectTask = (pid) => {
        console.log(pid)
    }

    function getProject(pid){
        // console.log(pid);
        axios.get(`https://alpha-project-405b5-default-rtdb.firebaseio.com/projects/${pid}.json`).then(res=>res.data).then(data=>setAllProjects((prev)=>[
            ...prev,
            data
    ]))
    
    }

    console.log(allProjects);

    // axios.get(`https://alpha-project-405b5-default-rtdb.firebaseio.com/projects/d36e0ff1-052b-4c4a-bd19-268ea11475d8.json`).then(res=>console.log(res))
    


    return (
        <div>
            {allTasks?.map((task) => {
                // console.log(task);
                getProject(task?.project)
                return (
                    <div className='text-white border !border-white' key={task.pid} style={{ border: '1px solid black', padding: 5, margin: 10 }}>
                        <h3>Name: {task?.name}</h3>
                        <h4>Pid: {task?.pid}</h4>
                        <p>Text: {task?.text}</p>
                        <p>Type: {task?.type}</p>
                        <p>Amount: {task?.amount}</p>
                        <p>Image: ${task?.image}</p>
                        <p>Active: {task?.active}</p>
                        <p>Complete: {task?.complete}</p>
                        <p>Project: {task?.project}</p>
                    </div>
                )
            })}

        </div>
    )
}
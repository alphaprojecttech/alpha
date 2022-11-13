import { useState } from 'react';
import { useTask } from '../context/TaskContext';


export default function ViewTask() {
    const [showTasks, setShowTasks] = useState(false);
    let [allProjects, setAllProjects] = useState([])

    let { allTasks } = useTask();

    // console.log(taskId);

    const handleSelectTask = (pid) => {
        console.log(pid)
    }

    // const getProject = (tid) => {
    //     const projectsRef = ref(rtDb, `projects/${tid}`);
    //     onValue(projectsRef, (snapshot) => {
    //         let array = []
    //         snapshot.forEach(project => {
    //             array.push(project.val())
    //         })
    //         setAllProjects(array)
    //     });
    // }


    return (
        <div>
            {allTasks?.map((task) => {
                // getProject(task?.tid)
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
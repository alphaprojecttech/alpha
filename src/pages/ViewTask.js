import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTask } from '../context/TaskContext';


export default function ViewTask() {
    const [showTasks, setShowTasks] = useState(false);
    let [allProjects, setAllProjects] = useState([]);
    let [rel,setRel]=useState([{
        task:null,
        project:null
    }])

    let { allTasks } = useTask();

    // console.log(taskId);

    const handleSelectTask = (pid) => {
        console.log(pid)
    }

    useEffect(() => {
        function getProject() {
            // console.log(pid);
            allTasks.map((item) =>
            // setRel((prev)=>)
                axios.get(`https://alpha-project-405b5-default-rtdb.firebaseio.com/projects/${item.project}.json`).then(res => res.data).then(data => setAllProjects((prev) => [
                    ...prev,
                    data
                ]))

            )

        }
        getProject()
    }, [allTasks])

    console.log(allProjects);

    // axios.get(`https://alpha-project-405b5-default-rtdb.firebaseio.com/projects/d36e0ff1-052b-4c4a-bd19-268ea11475d8.json`).then(res=>console.log(res))



    return (
        <div>
            lol
        </div>
    )
}
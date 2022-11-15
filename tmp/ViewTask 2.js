import { async } from '@firebase/util';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTask } from '../context/TaskContext';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ViewTask() {
    let [show, setShow] = useState(false);
    let [rel, setRel] = useState([{
        task: null,
        project: null
    }])




    useEffect(() => {
        async function getTask() {
            await axios.get(`https://alpha-project-405b5-default-rtdb.firebaseio.com/tasks.json`).then(res => res.data).then(data => {
                getProject(data);
            })
        }

        async function getProject(data) {
            console.log("click");
            console.log(Object.keys(data));
            // let mainTask = data[Object.keys(data)];
            // console.log(mainTask);
            // await axios.get(`https://alpha-project-405b5-default-rtdb.firebaseio.com/projects/${mainTask.project}.json`).then(res => res.data).then(item => {

            //     setRel((prev) => [
            //         ...prev,
            //         {
            //             task: mainTask,
            //             project: item
            //         }
            //     ])
            // })
        }

        getTask();

    }, [])


    // console.log("rel", rel);

    return (
        <div>
            {
                rel.map((relItem) => {
                    // console.log(relItem);
                    let project = relItem?.project;
                    let taskItem = relItem?.task;
                    // let taskKey=Object.keys(task);
                    console.log(Object.keys(taskItem));
                    if (relItem.project !== null) {
                        return (
                            <>
                                <div className='flex flex-col border border-black'>
                                    <h1 className='text-xl'>Project title: {project?.title}</h1>
                                    <div>
                                        {/* <button onClick={() => setShow(!show)}>{task?.type}</button> */}
                                        <ul className={classNames(show ? "block" : "hidden", "border border-green-400 m-4")}>
                                            {/* <li>task name : {task[taskKey]?.name}</li>
                                            <li>task amount : {task[taskKey]?.amount}</li>
                                            <li>task active : {task[taskKey]?.active}</li>
                                            <li>task complete : {task[taskKey]?.complete}</li>
                                            <li>task tid : {task[taskKey]?.tid}</li> */}
                                        </ul>
                                    </div>
                                </div>
                            </>
                        )
                    }
                })
            }
        </div>
    )
}
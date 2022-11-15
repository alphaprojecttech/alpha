
import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTask } from "../context/TaskContext";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ViewTask() {
    let [show, setShow] = useState(false);
    let [rel, setRel] = useState([
        {
            task: '',
            project: '',
        },
    ]);


    useEffect(() => {
        async function getTask() {
           await axios
                .get(
                    `https://alpha-project-405b5-default-rtdb.firebaseio.com/tasks.json`
                )
                .then((res) => res.data)
                .then((data) => {
                    if(data){
                        getProject(data);
                    }
                });
        }

        async function getProject(data) {
            let mainTask = data[Object.keys(data)];
            
            Object.keys(data)?.map(async (key)=>{
                let mainTask = data[key];
                console.log(mainTask);
                await axios
                .get(
                    `https://alpha-project-405b5-default-rtdb.firebaseio.com/projects/${mainTask.project}.json`
                )
                .then((res) => res.data)
                .then((item) => {

                    setRel((prev) => [
                        ...prev,
                        {
                            task: mainTask,
                            project: item,
                        },
                    ]);
                });
            })
        }

        getTask();
    }, []);

    console.log("rel", rel);

    return (
        <div>
        {
            rel?.map((relItem) => {
                // console.log("hi",relItem);
                let project = relItem?.project;
                let taskItem = relItem?.task;
                // let taskKey=Object.keys(task);
                // console.log(Object.keys(taskItem));
                if (relItem.project !== '') {
                    return (
                        <>
                            <div className='flex flex-col border border-black'>
                                <h1 className='text-xl'>Project title: {project?.title}</h1>
                                <div>
                                    <button onClick={() => setShow(!show)}>{taskItem?.type}</button>
                                    <ul className={classNames(show ? "block" : "hidden", "border border-green-400 m-4")}>
                                        <li>task name : {taskItem?.name}</li>
                                        <li>task amount : {taskItem?.amount}</li>
                                        <li>task active : {taskItem?.active}</li>
                                        <li>task complete : {taskItem?.complete}</li>
                                        <li>task tid : {taskItem?.tid}</li>
                                    </ul>
                                </div>
                            </div>
                        </>
                    )
                }
            })
        }
    </div>
    );
}

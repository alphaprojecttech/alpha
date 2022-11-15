
import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";
import ShowTask from "../components/Task/ShowTask";
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

    // console.log("rel", rel);

    return (
        <div>
        {
            rel?.map((relItem) => {
                let project = relItem?.project;
                let taskItem = relItem?.task;
                if (relItem.project !== '') {
                    return (
                        <>
                            <div className='flex flex-col border border-black'>
                                <h1 className='text-xl'>Project title: {project?.title}</h1>
                                <div>
                                    <button onClick={() => setShow(!show)}> {'>'} {taskItem?.type}</button>
                                    <ShowTask taskItem={taskItem} show={show}/>
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

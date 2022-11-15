import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTask } from '../context/TaskContext';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function ViewTask() {
    let [show,setShow]=useState(false);
    let [rel,setRel]=useState([{
        task:null,
        project:null
    }])

    let { allTasks } = useTask();


    useEffect(() => {
        function getProject() {
            // console.log(pid);
            allTasks.map((item) =>
                axios.get(`https://alpha-project-405b5-default-rtdb.firebaseio.com/projects/${item.project}.json`).then(res => res.data).then(data => {
                    
                    setRel((prev)=>[
                        ...prev,
                        {
                            task:item,
                            project:data
                        }
                    ])
                })

            )

        }
        getProject()
    }, [allTasks])

    // console.log(rel);


    return (
        <div>
            {
                rel.map((relItem)=>{
                    // console.log(relItem);
                    let project=relItem?.project;
                    let task=relItem?.task;
                    if(relItem.project!==null){
                        return(
                            <>
                            <div className='flex flex-col border border-black'>
                                <h1 className='text-xl'>Project title: {project?.title}</h1>
                                <div>
                                <button onClick={()=>setShow(!show)}>{task?.type}</button>
                                <ul className={classNames(show?"flex flex-col":"hidden","border border-green-400")}>
                                    <li>task name : {task?.name}</li>
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
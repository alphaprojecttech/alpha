import { useState } from "react";
import AddTask from "../components/Task/AddTask";
import EditTask from "../components/Task/EditTask";
import { useTask } from "../context/TaskContext";

export default function Task() {
    let { allTasks,deleteTask } = useTask();
    const [showEdit, setShowEdit] = useState(false)


    const handleShowEdit = () => {
        if (showEdit) return setShowEdit(false)
        if (!showEdit) return setShowEdit(true)
    }

    console.log(allTasks);

    return (
        <>
            <AddTask />
            {allTasks?.map(task => {
                console.log(task);
                return (
                    <div key={task.pid} style={{ border: '1px solid black', margin: 5, padding: 5 }}>
                        <h3>{task.name}</h3>
                        <button onClick={handleShowEdit}>Edit</button>
                        <button onClick={() => deleteTask(task.pid)}>Delete</button>
                        {!showEdit ? null :
                            <EditTask task={task} setShowEdit={setShowEdit} />
                        }
                    </div>
                )
            })}
        </>
    )
}
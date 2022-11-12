import { onValue, ref, remove, set, update } from "firebase/database";
import React, { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { auth, rtDb } from '../firebase';

const TaskContext = React.createContext()

export const useTask = () => {
  return useContext(TaskContext)
}

export const TaskProvider = ({ children }) => {

    let [ allTasks, setAllTasks ] = useState([])

  useEffect(() => {
    const taskRef = ref(rtDb, 'projects/');
    onValue(taskRef, (snapshot) => {
      let array = []
      snapshot.forEach(task => {
        array.push(task.val())
      })
      setAllTasks(array)
    });
  }, []);

      //Add project 
  function addTask(config) {
    console.log(config);
    let pid = v4();
      set(ref(rtDb, 'tasks/' + pid), {
        name: config.name,
        text: config.text,
        type: config.type,
        deadline: config.deadline,
        amount: config.amount,
        image: config.image,
        active: config.active,
        complete: config.complete,
        project: config.project,
        participants: [ auth.currentUser.uid ],
      });
  }

  function editTask(pid, updates){
    update(ref(rtDb, 'task/' + pid), updates)
  }

  function deleteTask(pid){
    remove(ref(rtDb, 'task/' + pid))
  }

    const value = {
        addTask,
        editTask,
        deleteTask,
      allTasks
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}
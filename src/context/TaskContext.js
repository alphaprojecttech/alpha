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
    const projectsRef = ref(rtDb, 'projects/');
    onValue(projectsRef, (snapshot) => {
      let array = []
      snapshot.forEach(project => {
        array.push(project.val())
      })
      setAllTasks(array)
    });
  }, []);

      //Add project 
  function addTask(config){
    let pid = v4();
      set(ref(rtDb, 'tasks/' + pid), {
        name: config.name,
        text: config.text,
        type: config.type,
        deadline: config.date,
        amount: config.amount,
        image: config.image,
        active: config.active,
        complete: config.complete,
        participants: [ auth.currentUser.uid ],
      });
  }

  function editProject(pid, updates){
    update(ref(rtDb, 'projects/' + pid), updates)
  }

  function deleteProject(pid){
    remove(ref(rtDb, 'projects/' + pid))
  }

    const value = {
        addTask,
        editProject,
        deleteProject,
      allTasks
    }

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    )
}
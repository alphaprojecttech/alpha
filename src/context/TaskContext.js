import { onValue, ref, remove, set, update } from "firebase/database";
import React, { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { auth, rtDb } from '../firebase';

const TaskContext = React.createContext()

export const useTask = () => {
  return useContext(TaskContext)
}

export const TaskProvider = ({ children }) => {

  let [allTasks, setAllTasks] = useState([])
  let [taskId, setTaskId] = useState([])

  useEffect(() => {
    const taskRef = ref(rtDb, 'tasks/');
    onValue(taskRef, (snapshot) => {
      let array = []
      snapshot.forEach(task => {
        array.push(task.val())
      })
      setAllTasks(array)
    });

    
  }, [onValue]);

  //Add project 
  function addTask(config) {
    console.log(config);
    let tid = v4();
    set(ref(rtDb, 'tasks/' + tid), {
      tid: tid,
      name: config.name,
      text: config.text,
      type: config.type,
      deadline: config.deadline,
      amount: config.amount,
      image: config.image,
      active: config.active,
      complete: config.complete,
      project: config.project,
      participants: [auth.currentUser.uid],
    });
  }

  function editTask(tid, updates) {
    update(ref(rtDb, 'tasks/' + tid), updates)
  }

  function deleteTask(tid) {
    remove(ref(rtDb, 'tasks/' + tid))
  }

  function taskById(tid) {
    // console.log(tid);
    const taskRef = ref(rtDb, 'tasks/');
    onValue(taskRef, (snapshot) => {
      // snapshot.forEach(task => console.log(task.val()))
      snapshot.forEach(task => {
        if (task.val().tid===tid) {
          // console.log("true");
          // return task.val();
          setTaskId(task.val());
          return 0;
        }
      })
    });
  }

  const value = {
    addTask,
    editTask,
    deleteTask,
    taskById,
    taskId,
    allTasks
  }

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}
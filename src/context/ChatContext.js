import { onValue, ref, remove, set, update } from "firebase/database";
import React, { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { auth, rtDb } from '../firebase';

const ChatContext = React.createContext()

export const useChat = () => {
  return useContext(ChatContext)
}

export const ChatProvider = ({ children }) => {

  let [allConversations, setAllConversations] = useState([])

  useEffect(() => {
    const messagesRef = ref(rtDb, 'messages/');
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
    let pid = v4();
    set(ref(rtDb, 'tasks/' + pid), {
      pid: pid,
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

  function editTask(pid, updates) {
    update(ref(rtDb, 'tasks/' + pid), updates)
  }

  function deleteTask(pid) {
    remove(ref(rtDb, 'tasks/' + pid))
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
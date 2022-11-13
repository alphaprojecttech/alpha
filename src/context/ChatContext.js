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
    const conversationsRef = ref(rtDb, 'conversations/');
    onValue(conversationsRef, (snapshot) => {
      let array = []
      snapshot.forEach(conversation => {
        array.push(conversation.val())
      })
      setAllConversations(array)
    });
  }, [onValue]);

  //Add project 
  function startConversation(config) {
    let cid = v4();
    set(ref(rtDb, 'conversations/' + cid), {
      cid: cid,
      pid: config.pid,
      timestamp: new Date().getTime(),
      creator: auth.currentUser.uid,
      participants: [auth.currentUser.uid]
    });
  }

  // function editTask(pid, updates) {
  //   update(ref(rtDb, 'tasks/' + pid), updates)
  // }

  // function deleteTask(pid) {
  //   remove(ref(rtDb, 'tasks/' + pid))
  // }

  const value = {
      startConversation,
      allConversations
  }

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  )
}
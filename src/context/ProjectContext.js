import { child, get, getDatabase, onValue, push, ref, remove, set, update } from "firebase/database";
import React, { useContext, useEffect, useState } from 'react';
import {auth, rtDb} from '../firebase';
import { v4 } from 'uuid'
import { useChat } from "./ChatContext";

const ProjectContext = React.createContext()

export const useProject = () => {
    return useContext(ProjectContext)
}

export const ProjectProvider = ({ children }) => {

    let [ allProjects, setAllProjects ] = useState([])
    const { startConversation } = useChat()


      useEffect(()=>{
        const projectsRef = ref(rtDb, 'projects/');
        onValue(projectsRef, (snapshot) => {
          let array = []
          snapshot.forEach(project => {
            array.push(project.val())
          })
          setAllProjects(array)
        });
      }, [onValue])

      //Add project 
  function addProject(config){
    let pid = v4()
    let date = new Date().getTime()
    let projectDetails = {
        created: date,
        deadline: date + 1000000,
        startdate: date,
        user: auth.currentUser.uid,
        pid: pid,
        category: config.category,
        type: config.type,
        title: config.title,
        github: config.github,
        description: config.description,
        complete: false,
        participants: [ auth.currentUser.uid ],
        budget: config.budget,
      }
      set(ref(rtDb, 'projects/' + pid), projectDetails);
      startConversation({
        pid: projectDetails.pid
      })
  }

  function editProject(pid, updates){
    update(ref(rtDb, 'projects/' + pid), updates)
  }

  function deleteProject(pid){
    remove(ref(rtDb, 'projects/' + pid))
  }

    const value = {
        addProject,
        editProject,
        deleteProject,
        allProjects
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}
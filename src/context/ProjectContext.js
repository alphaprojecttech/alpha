import { child, get, getDatabase, onValue, push, ref, set, update } from "firebase/database";
import React, { useContext, useEffect, useState } from 'react';
import {auth, rtDb} from '../firebase';
import { v4 } from 'uuid'

const ProjectContext = React.createContext()

export const useProject = () => {
    return useContext(ProjectContext)
}

export const ProjectProvider = ({ children }) => {

    let [ allprojects, setAllprojects ] = useState([])

      useEffect(()=>{
        const projectsRef = ref(rtDb, 'projects/');
        onValue(projectsRef, (snapshot) => {
          let array = []
          snapshot.forEach(project => {
            array.push(project.val())
          })
          setAllprojects(array)
        });
      }, [onValue])


  function addProject(config){
    let pid = v4()
    let date = new Date().getTime()
    const db = getDatabase();
      set(ref(rtDb, 'projects/' + pid), {
        created: date,
        deadline: date + 1000000,
        startdate: date,
        user: auth.currentUser.uid,
        pid: pid,
        category: config.category,
        title: config.name,
        github: config.github,
        description: config.description,
        complete: false,
        participants: [auth.currentUser.uid],
        budget: config.budget,
      });
  }

  function editProject(pid, updates){
    update(ref(rtDb, 'projects/' + pid), updates)
  }

    const value = {
        addProject,
        editProject,
        allprojects
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}
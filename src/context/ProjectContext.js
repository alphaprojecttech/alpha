import { child, get, getDatabase, push, ref, set } from "firebase/database";
import React, { useContext, useState } from 'react';
import '../firebase';

const ProjectContext = React.createContext()

export const useProject = () => {
    return useContext(ProjectContext)
}

export const ProjectProvider = ({ children }) => {

    let [allprojects,setAllprojects]=useState()

    // Logout function 
    function addProjects(userId,todo) {
        const db = getDatabase();
        const key = push(child(ref(db), 'projects')).key;
        if(userId){
            set(ref(db, 'projects/'+userId+"/"+key), todo);
        }
    }

    function fetchProjects(userId){
        const dbRef = ref(getDatabase());
        get(child(dbRef, `projects/${userId}`)).then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.val());
            setAllprojects(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
    }
    
    const value = {
        addProjects,
        fetchProjects,
        allprojects
    }

    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    )
}
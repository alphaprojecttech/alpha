import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { ref as sRef, uploadBytes, getDownloadURL } from 'firebase/storage'
import React, { useContext, useEffect, useState } from 'react';
import { auth, storage } from '../firebase';

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [ allUsers, setAllUsers ] = useState()


    useEffect(() => {
        //Fetch all users from admin api
        fetch('http://3.18.103.163/')
        .then((res)=> res.json())
        .then((json)=> setAllUsers(json))
        const auth = getAuth()
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false)
        })
        return unsubscribe;
    }, [setCurrentUser])

    // Sign up function
    async function Signup(email, password, username) {
        let auth = getAuth()
        // console.log(auth);
        await createUserWithEmailAndPassword(auth, email, password);
        // auth = getAuth();
        let user = auth.currentUser
        await updateProfile(user, {
            displayName: username
        })
        setCurrentUser({
            ...user,
        })
        setLoading(false)
    }
    // login function 
    async function Login(email, password) {
        const auth = getAuth();
        // console.log(auth);
        await signInWithEmailAndPassword(auth, email, password)
        setLoading(false)
    }

    // Logout function 
    function Logout() {
        const auth = getAuth();
        signOut(auth)
    }

    //Edit display name
    function editDisplayName(name){
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    //Edit profile image
    async function editPhotoURL(fileTarget){
        const imageRef = sRef(storage, 'profileImages/' + auth.currentUser.uid);
        await uploadBytes(imageRef, fileTarget)
              .then(()=>{
                    getDownloadURL(imageRef)
                        .then((url)=>{
                            updateProfile(auth.currentUser, {
                                photoURL: url
                            })
                        })
                  })  
    } 

  

    const value = {
        currentUser,
        editDisplayName,
        editPhotoURL,
        allUsers,
        Signup,
        Login,
        Logout,
        loading
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
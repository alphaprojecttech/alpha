import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { auth } from '../firebase';

export default function Profile(){
    const [ displayName, setDisplayName ] = useState('')
    const [ previewImage, setPreviewImage ] = useState('')
    const { editDisplayName, editPhotoURL } = useAuth()

    const handleEditProfile = (e)=>{
        editDisplayName(displayName)
    }

    const handleEditPhotoURL = (e)=> {
        editPhotoURL(previewImage)
    }

    return(
        <div>
            <div style={{padding: 10}}>
                <p>UID</p>
                <input type="text" readOnly={true} value={auth.currentUser?.uid} />
            </div>
            <div style={{padding: 10}}>
                <p>Edit Display Name</p>
                <input type="text" value={displayName} onChange={(e)=> setDisplayName(e.target.value)} placeholder='Username'  />
                <button onClick={handleEditProfile}>Save</button>
            </div>
            <div style={{padding: 10}}>
                <p>Edit Profile Image</p>
                <input type="file" onChange={(e)=> setPreviewImage(URL.createObjectURL(e.target.files[0]))} />
                <button onClick={handleEditPhotoURL}>Save</button>
                {/* <button onClick={()=> setPreviewImage('')}>Clear</button> */}
                <img style={{width: 50, height: 50}} src={previewImage} />
            </div>
        </div>
    )
}
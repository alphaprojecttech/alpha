import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { auth } from '../firebase';

export default function Profile(){
    const [ displayName, setDisplayName ] = useState('')
    const [ previewImage, setPreviewImage ] = useState('');
    const [ fileTarget, setFileTarget ] = useState('')
    const { editDisplayName, editPhotoURL } = useAuth()
    //Edit username
    const handleEditProfile = (e)=>{
        editDisplayName(displayName)
    }
    //Get image file
    const fileInput = (e) => {
        setFileTarget(e.target.files[0]);
        setPreviewImage(URL.createObjectURL(e.target.files[0]));

    };
    //Upload profile image
    const handleEditPhotoURL = ()=> {
        editPhotoURL(fileTarget)
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
                <input type="file" onChange={fileInput} />
                <button onClick={handleEditPhotoURL}>Save</button>
                {!previewImage? null :
                    <img style={{width: 50, height: 50}} src={previewImage} />
                }
            </div>
        </div>
    )
}
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { auth } from "../firebase";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

export default function Profile() {
    const [navbar, setNavbar] = useState(false)
  const [displayName, setDisplayName] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [fileTarget, setFileTarget] = useState("");
  const { editDisplayName, editPhotoURL } = useAuth();
  //Edit username
  const handleEditProfile = (e) => {
    editDisplayName(displayName);
  };
  //Get image file
  const fileInput = (e) => {
    setFileTarget(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };
  //Upload profile image
  const handleEditPhotoURL = () => {
    editPhotoURL(fileTarget);
  };

  return (
    <>
    {/* BACKGROUND COLOR #1e1e1e */}
    <div className="bg-[#161616]">
    <NavBar navbar={navbar} setNavbar={setNavbar}/>
        <div className="p-4 xl:ml-80">
          <Header navbar={navbar} setNavbar={setNavbar}/>
          <div className="mt-12">

            
          <div>
        <div style={{ padding: 10 }}>
          <p>UID</p>
          <input type="text" readOnly={true} value={auth.currentUser?.uid} />
        </div>
        <div style={{ padding: 10 }}>
          <p>Email</p>
          <input type="text" readOnly={true} value={auth.currentUser?.email} />
        </div>
        <div style={{ padding: 10 }}>
          <p>Edit Display Name</p>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Username"
          />
          <button onClick={handleEditProfile}>Save</button>
        </div>
        <div style={{ padding: 10 }}>
          <p>Edit Profile Image</p>
          <input type="file" onChange={fileInput} />
          <button onClick={handleEditPhotoURL}>Save</button>
          {!previewImage ? null : (
            <img style={{ width: 50, height: 50 }} src={previewImage} />
          )}
        </div>
      </div>
            
          
          </div>
        </div>
      </div>

      
    </>
  );
}

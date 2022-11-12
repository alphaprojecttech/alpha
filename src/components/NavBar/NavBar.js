import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function NavBar(){
    let { Logout, currentUser } = useAuth();
    return(
        !currentUser? null :
            <nav>
            <div>
                <h1>Alpha Project</h1>
                <h3>{currentUser.displayName}</h3>
                <img src={currentUser.photoURL} style={{width: 50, height: 50}} />
            </div>
            <div>
                <Link style={{padding: 10}} to="/">Home</Link>
                <Link style={{padding: 10}} to="/projects">Projects</Link>
                <Link style={{padding: 10}} to="/profile">Profile</Link>
                <Link style={{padding: 10}} to="/task">Task</Link>
                <Link style={{padding: 10}} to="/view_task">View Task</Link>
                <Link style={{padding: 10}} to="/chat">Chat</Link>
                <button onClick={Logout}>Logout</button>
            </div>
        </nav>
    )
}
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function NavBar(){
    let { Logout } = useAuth();
    return(
        <>
            <nav className='bg-gray-100 text-black py-4 px-5 flex justify-between items-center'>
            <div>
                <h1 className='text-4xl font-bold'>Project List</h1>
            </div>
            <div className='flex justify-end items-center space-x-3'>
                <Link to="/">Home</Link>
                <Link to="/chat">Chat</Link>
                <button onClick={Logout}>Logout</button>
            </div>
        </nav>
        </>
    )
}
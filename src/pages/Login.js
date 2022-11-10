import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import logo from '../logo.svg';

export default function Login() {

    const navigates = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [errorType, setErrorType] = useState("")
    const [show, setShow] = useState(false)

    console.log(error,errorType,show);


    const authContext = useAuth();

    const { Login, loading } = authContext;

    async function onFormSubmit(e) {

        e.preventDefault();
        console.log(email, password);

        try {

            await Login(email, password)

            navigates('/home')
            setShow(true)
            setError("Loading");
            setErrorType("success")


        } catch (error) {
            // console.log(error.message);
            setError("Failed to Login!");
            setErrorType("warning");
            setShow(true)
        }


    }


    return (

        <>
            {loading && <p>Loading ...</p>}
            <div className="flex flex-col justify-center items-center h-screen">
                <img src={logo} width='185' alt='logo' />

                <form className="flex flex-col space-y-2 mt-4">
                    <input type="email" className="rounded-[4px] border-[#6b6a6a] border hover:border-white px-3 py-2 bg-transparent" placeholder="username" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="rounded-[4px] border-[#6b6a6a] border hover:border-white px-3 py-2 bg-transparent" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                    <div className="flex justify-center items-center">
                        <button onClick={onFormSubmit} className="dark:bg-[#212121] bg-gray-300 text-white inline-flex px-4 py-1 rounded-[4px] uppercase">Enter</button>
                    </div>
                </form>
            </div>
        </>
    )
}
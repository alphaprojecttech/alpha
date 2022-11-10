import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Chat from "./pages/Chat";

import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {

  const { currentUser } = useAuth();


  return (
    <>
      <Routes>
        {currentUser ?
          (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
            </>
          ) :
          (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
        <Route path="*" element={<Navigate replace to={currentUser ? "/" : "login"} />} />
      </Routes>
    </>
  )

}

export default App;
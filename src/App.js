import { Navigate, Route, Routes } from "react-router-dom";
import AllTask from "./components/Task/AllTask";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Task from "./pages/Task";


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
              {/* <Route path="/chat" element={<Chat />} /> */}
              <Route path="/projects" element={<Projects />}/>
              <Route path="/profile" element={<Profile />} />
              <Route path="/task" element={<Task />} />
              <Route path="/view_task" element={<AllTask />} />
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
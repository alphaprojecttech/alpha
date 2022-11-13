import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Task from "./pages/Task";
import ViewTask from "./pages/ViewTask";


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
              <Route path="/chat" element={<Chat />} />
              <Route path="/task" element={<Task />} />
              <Route path="/view_task" element={<ViewTask />} />
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
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import App from './App';
import NavBar from './components/NavBar/NavBar';
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
import { ProjectProvider } from './context/ProjectContext';
import { TaskProvider } from './context/TaskContext';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <TaskProvider>
      <ChatProvider>
      <ProjectProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
      </ProjectProvider>
      </ChatProvider>
    </TaskProvider>
  </BrowserRouter>
);
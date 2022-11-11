import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter
} from "react-router-dom";
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from './context/ProjectContext';
import './index.css';
import NavBar from './components/nav/navBar'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProjectProvider>
      <AuthProvider>
        <NavBar />
        <App />
      </AuthProvider>
    </ProjectProvider>
  </BrowserRouter>
);
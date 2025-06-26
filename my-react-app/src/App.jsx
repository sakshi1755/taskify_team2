/***import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Newnote from './Pages/NewNotes';


function App() {
  return (
    <>
    <Newnote/>

      <Notespage/>
      
      </>
      )
      }
      
      export default App***/
      import React from 'react';
      import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
      import Register from './Pages/Register';
      import Login from './Pages/Login';
      import Taskform from './Components/Taskform';
      import Notespage from './Components/Notespage'
      import Newnote from './Pages/NewNotes'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/taskform" element={<Taskform />} />
        <Route path="/notespage" element={<Notespage/>} />
        <Route path="/newnote" element={<Newnote/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;


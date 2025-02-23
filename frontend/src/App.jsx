import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Home from './Components/Pages/Home';
import FloatingChatIcon from './Components/FloatingChatIcon';
import Footer from './Components/Layouts/Footer';
import ListForm from './Components/Home/ListForm';
import Dashboard from './Components/Pages/Dashboard';
import FinAssist from './Components/Pages/FinAssist';

import  {AuthProvider}  from './AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-business" element={<ListForm />} />
          <Route path="/list-form" element={<ListForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fin-assist" element={<FinAssist />} />
        </Routes>
        <FloatingChatIcon />

      </div>
     
    </Router>
    </AuthProvider>
  );
}

export default App;

import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/protected" element={<ProtectedPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </Router>

  );
}

export default App;

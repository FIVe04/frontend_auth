import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/LoginPage";
import ProtectedPage from "./pages/ProtectedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/protected" element={<ProtectedPage/>}/>
      </Routes>
    </Router>

  );
}

export default App;

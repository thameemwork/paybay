import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [] = useState(0)

  return (
    <>
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </MainLayout>
    </Router>
    </>
  )
}

export default App

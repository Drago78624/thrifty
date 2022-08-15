import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Error from "./pages/Error"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App

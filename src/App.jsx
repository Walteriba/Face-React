import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'

import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Home } from "./components/Home"
import { ProtectedRoute } from "./components/auth/ProtectedRoute"

import { AuthProvider } from "./context/authContext"


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home" element={<ProtectedRoute> <Home/> </ProtectedRoute>} />
            {/* <Route path="/home" element={<Home/>} />*/}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App

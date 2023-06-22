import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Record from './pages/Record'

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />

    <Route path="/sign-in" element={<Signin />} />

    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/my-record" element={<Record />} />
  </Routes>
)

export default App

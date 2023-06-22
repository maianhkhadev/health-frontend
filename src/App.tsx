import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Welcome from './pages/Welcome'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Record from './pages/Record'

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Welcome />} />

    <Route path="/sign-in" element={<Signin />} />

    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />

    <Route
      path="/my-record"
      element={
        <PrivateRoute>
          <Record />
        </PrivateRoute>
      }
    />
  </Routes>
)

export default App

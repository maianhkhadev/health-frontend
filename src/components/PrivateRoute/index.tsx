import React from 'react'
import { Navigate } from 'react-router-dom'

type IParams = {
  children: React.ReactNode
}

const PrivateRoute: React.FC<IParams> = ({ children }) => {
  const token = window.sessionStorage.getItem('token')

  if (!token) {
    return <Navigate to="/sign-in" replace />
  }

  return <>{children}</>
}

export default PrivateRoute

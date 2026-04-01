import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RequireAdmin({ children }) {
    const { isAdmin } = useAuth()
    const location = useLocation()

    if (!isAdmin) {
        return <Navigate to="/admin-login" state={{ from: location }} replace />
    }

    return children
}

import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'

const AuthContext = createContext(null)
const TOKEN_KEY = 'manavaseva_admin_token'
const USER_KEY = 'manavaseva_admin_user'

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem(USER_KEY)
        return saved ? JSON.parse(saved) : null
    })
    const [error, setError] = useState(null)

    useEffect(() => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token)
            api.defaults.headers.common.Authorization = `Bearer ${token}`
        } else {
            localStorage.removeItem(TOKEN_KEY)
            delete api.defaults.headers.common.Authorization
        }
    }, [token])

    useEffect(() => {
        if (user) localStorage.setItem(USER_KEY, JSON.stringify(user))
        else localStorage.removeItem(USER_KEY)
    }, [user])

    const login = async (credentials) => {
        setError(null)
        const res = await api.post('/auth/login', credentials)
        const loggedUser = res.data.user
        if (loggedUser.role !== 'admin') {
            setError('Only administrators can access this area.')
            throw new Error('Not an admin')
        }
        setToken(res.data.token)
        setUser(loggedUser)
        return loggedUser
    }

    const logout = () => {
        setToken(null)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, token, login, logout, authError: error, isAdmin: user?.role === 'admin' }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

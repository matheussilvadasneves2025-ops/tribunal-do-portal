import { createContext, useContext, useState, type ReactNode } from 'react'
import * as authService from '@/services/authService'
import type { SessionUser } from '@/services/authService'

interface AuthContextValue {
  user: SessionUser | null
  signUp: (email: string, password: string) => authService.AuthResult
  logIn: (email: string, password: string) => authService.AuthResult
  logOut: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(() => authService.getSession())

  const signUp = (email: string, password: string) => {
    const result = authService.signUp(email, password)
    if (result.success && result.user) setUser(result.user)
    return result
  }

  const logIn = (email: string, password: string) => {
    const result = authService.logIn(email, password)
    if (result.success && result.user) setUser(result.user)
    return result
  }

  const logOut = () => {
    authService.clearSession()
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

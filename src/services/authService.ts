const USERS_STORAGE_KEY = 'tribunal-portal:users'
const SESSION_STORAGE_KEY = 'tribunal-portal:session'

export interface StoredUser {
  name: string
  email: string
  password: string
}

export interface SessionUser {
  name: string
  email: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function readUsers(): StoredUser[] {
  try {
    const raw = localStorage.getItem(USERS_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as StoredUser[]) : []
  } catch {
    return []
  }
}

function writeUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users))
}

export function getSession(): SessionUser | null {
  try {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY)
    return raw ? (JSON.parse(raw) as SessionUser) : null
  } catch {
    return null
  }
}

function setSession(user: SessionUser) {
  sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user))
}

export function clearSession() {
  sessionStorage.removeItem(SESSION_STORAGE_KEY)
}

export interface AuthResult {
  success: boolean
  error?: string
  user?: SessionUser
}

export function validateName(name: string): string | null {
  if (!name.trim()) return 'Informe seu nome ou apelido.'
  if (name.trim().length < 2) return 'O nome precisa ter ao menos 2 caracteres.'
  return null
}

export function validateEmail(email: string): string | null {
  if (!email.trim()) return 'Informe um e-mail.'
  if (!EMAIL_REGEX.test(email.trim())) return 'E-mail inválido.'
  return null
}

export function validatePassword(password: string): string | null {
  if (!password) return 'Informe uma senha.'
  if (password.length < 6) return 'A senha precisa ter ao menos 6 caracteres.'
  return null
}

export function signUp(name: string, email: string, password: string): AuthResult {
  const nameError = validateName(name)
  if (nameError) return { success: false, error: nameError }

  const emailError = validateEmail(email)
  if (emailError) return { success: false, error: emailError }

  const passwordError = validatePassword(password)
  if (passwordError) return { success: false, error: passwordError }

  const normalizedEmail = email.trim().toLowerCase()
  const trimmedName = name.trim()
  const users = readUsers()

  if (users.some((u) => u.email === normalizedEmail)) {
    return { success: false, error: 'Este e-mail já está cadastrado.' }
  }

  users.push({ name: trimmedName, email: normalizedEmail, password })
  writeUsers(users)

  const sessionUser: SessionUser = { name: trimmedName, email: normalizedEmail }
  setSession(sessionUser)
  return { success: true, user: sessionUser }
}

export function logIn(email: string, password: string): AuthResult {
  const emailError = validateEmail(email)
  if (emailError) return { success: false, error: emailError }

  if (!password) return { success: false, error: 'Informe sua senha.' }

  const normalizedEmail = email.trim().toLowerCase()
  const users = readUsers()
  const found = users.find((u) => u.email === normalizedEmail)

  if (!found || found.password !== password) {
    return { success: false, error: 'E-mail ou senha incorretos.' }
  }

  const sessionUser: SessionUser = { name: found.name, email: found.email }
  setSession(sessionUser)
  return { success: true, user: sessionUser }
}

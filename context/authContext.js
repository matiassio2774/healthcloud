import { createContext, useState, useCallback, useMemo, useContext, useEffect } from "react";


const MY_AUTH_APP = 'MY_AUTH_APP_1'
const ROL = 'ROL'
const USERNAME = 'USERNAME'

export const AuthContext = createContext()

export function AuthContextProvider({children}) {
  const [isAuthenticated, setIsAuthenticated] = useState(typeof window !== 'undefined' && window.sessionStorage.getItem(MY_AUTH_APP))
  const [userRol, setUserRol] = useState(typeof window !== 'undefined' && window.sessionStorage.getItem(ROL))
  const [userName, setUserName] = useState(typeof window !== 'undefined' && window.sessionStorage.getItem(USERNAME))


  useEffect(() => {
    setUserRol(typeof window !== 'undefined' && window.sessionStorage.getItem(ROL))
    setUserName(typeof window !== 'undefined' && window.sessionStorage.getItem(USERNAME))
  }, [])
  

  const login = useCallback(function(){
    console.log('a')
    typeof window !== 'undefined' && window.localStorage.setItem(MY_AUTH_APP, 'true')
    setIsAuthenticated(true)
  }, [])

  const saveInfo = useCallback(function(user_rol, user_name){
    window.sessionStorage.setItem(ROL, user_rol)
    setUserRol(user_rol)
    window.sessionStorage.setItem(USERNAME, user_name)
    setUserName(user_name)
  }, [])

  const logout = useCallback(function(){
    console.log('logout')
    window.sessionStorage.removeItem(MY_AUTH_APP)
    window.sessionStorage.removeItem(ROL)
    window.sessionStorage.removeItem(USERNAME)
    setUserRol(false)
    setUserName(false)
  }, [])

  const value = useMemo(()=>({
    login,
    logout,
    isAuthenticated,
    userRol,
    saveInfo,
    userName
  }), [login, logout, isAuthenticated, userRol, saveInfo, userName])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  return useContext(AuthContext)
}
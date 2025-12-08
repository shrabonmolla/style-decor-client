import React, { useContext } from 'react'
import AuthContext from '../Provider/AuthProvider/AuthContext'

export default function useAuthHook() {
    const userData = useContext(AuthContext)
  return userData
}

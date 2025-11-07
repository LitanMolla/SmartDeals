import React, { useContext } from 'react'
import { AuthContex } from '../contex/ContexProvider'

const useAuth = () => {
  const authInfo = useContext(AuthContex);
  return authInfo
}

export default useAuth
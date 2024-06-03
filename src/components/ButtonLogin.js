import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className="btn btn-primary border-dark m-2"
      type="submit"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  )
}

export default LoginButton

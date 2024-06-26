import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Button } from 'react-bootstrap'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      variant="secondary"
      size="sm"
      style={{ marginRight: '10px' }}
      type="submit"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  )
}

export default LoginButton

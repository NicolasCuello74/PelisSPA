import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Button } from 'react-bootstrap'

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      variant="secondary"
      size="lg"
      type="submit"
      onClick={() =>
        loginWithRedirect({
          authorizationParams: { screen_hint: 'signup' },
          // This will redirect to the home page after login

          appState: { returnTo: '/home' }, // Redirect to home after login
        })
      }
    >
      Registrarse
    </Button>
  )
}

export default RegisterButton

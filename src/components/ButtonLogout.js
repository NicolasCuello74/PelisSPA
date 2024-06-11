import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Button } from 'react-bootstrap'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button
      variant="secondary"
      size="sm"
      type="submit"
      style={{ marginRight: '2em' }}
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: window.location.origin + process.env.PUBLIC_URL + '/',
          },
        })
      }
    >
      Log Out
    </Button>
  )
}

export default LogoutButton

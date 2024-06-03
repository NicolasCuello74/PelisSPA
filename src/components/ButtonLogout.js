import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const LogoutButton = () => {
  const { logout } = useAuth0()

  return (
    <button
      className="btn btn-primary border-dark m-2"
      type="submit"
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: window.location.origin + process.env.PUBLIC_URL + '/',
          },
        })
      }
    >
      Log Out
    </button>
  )
}

export default LogoutButton

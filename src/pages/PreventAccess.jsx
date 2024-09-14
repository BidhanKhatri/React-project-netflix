import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function PreventAccess() {

    const auth = localStorage.getItem("loginStatus");

  return (
    auth ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PreventAccess

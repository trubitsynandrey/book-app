import React from 'react'
import { Link } from "react-router-dom";    

export const NavItem = ({children, path}) => {
  return (
    <Link to={path}>{children}</Link>
  )
}

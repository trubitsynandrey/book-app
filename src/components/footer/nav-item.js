import React from 'react'
import { NavLink } from "react-router-dom";    

export const NavItem = ({children, path}) => {
  return (
    <NavLink to={path}>{children}</NavLink>
  )
}

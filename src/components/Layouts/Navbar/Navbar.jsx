import React from 'react'
import { Items } from '../../UI/Items'

export const Navbar = ({children}) => {
  return (
    <nav class= "flex justify-center items-center h-full">
      {children}
    </nav>
  )
}

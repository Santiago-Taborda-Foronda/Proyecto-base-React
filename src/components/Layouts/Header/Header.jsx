import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'
import { Items } from '../../UI/Items'

export const Header = () => {
  return (
    <header className='header' class="w-full flex justify-around h-26 text-indigo-600 bg-blue-950">  
    <h1 class="text-3xl font-medium  t m-10 ">Introduccion a React 2025</h1> 
    
    <Navbar>
      <ul>
        <Items children="Home"/>
        <Items children="Case1"/>
        <Items children="Case2"/>
      </ul>
    </Navbar>
    
  </header>
  )
}

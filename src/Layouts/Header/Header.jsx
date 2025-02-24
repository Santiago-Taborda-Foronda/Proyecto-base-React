import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'

export const Header = () => {
  return (
    <header className='header' class="w-full flex justify-around h-auto text-stone-950 bg-cyan-700"> 
     
    <h1 class="text-6xl font-medium  t m-10 ">Introduccion a React 2025</h1>
    <Navbar />  
  </header>
  )
}

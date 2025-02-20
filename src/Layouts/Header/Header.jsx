import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import './Header.css'

export const Header = () => {
  return (
    <header className='header'>
        
    <h1 class="text-sky-300 dark:text-white mt-5 text-6xl font-medium tracking-tight t m-10 ">Introduccion a React 2025</h1>
    <Navbar />  
  </header>
  )
}

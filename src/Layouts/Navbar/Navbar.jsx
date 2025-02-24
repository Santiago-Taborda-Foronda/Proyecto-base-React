import React from 'react'
import { Items } from '../../components/Items/Items'

export const Navbar = () => {
  return (
    <nav>
      <ul className='flex m-10  text-1xl space-x-15 justify-items-center text-white'>
        <Items 
          myStyles="flex m-10  text-1xl space-x-15 justify-items-center text-white"
          contentItem="Home"
        />
        <Items 
          myStyles="flex m-10  text-1xl space-x-15 justify-items-center text-white"
          contentItem="Clase 1"
        />
        <Items 
          myStyles="flex m-10  text-1xl space-x-15 justify-items-center text-white"
          contentItem="Clase 2"
        />
      </ul>
     
    </nav>
  )
}

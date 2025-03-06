import React from 'react'
import myImage from '../../../assets/images/home.png.png'

export const Main = () => {
  return (
    <>
        <h2 className="text-3xl t m-10 text-yellow-400">La idea es que acá construiremos nuestro curso de cada tema</h2>
        <img src={myImage} alt="" className='w-100 h-200'/>
    </>
  )
}

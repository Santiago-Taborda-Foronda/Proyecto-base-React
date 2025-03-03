import React from 'react'
import { Items } from '../../UI/Items'
import { FaFacebook } from "react-icons/fa"
import { Navbar } from '../Navbar/Navbar'

export const Footer = () => {
  return (
    <>
    <Footer className="w-full flex justify-around h-26 text-indigo-600 bg-blue-950">
        <Navbar>
            <ul>
                <Items children={<FaFacebook />}/>
            </ul>
        </Navbar>
    </Footer>
    
    </>
    
  )
}
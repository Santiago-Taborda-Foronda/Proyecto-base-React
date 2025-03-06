import React from 'react'
import { Items } from '../../UI/Items'
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Navbar } from '../Navbar/Navbar'

export const Footer = () => {
  return (
    <footer class="w-full flex justify-around h-50 text-indigo-600 bg-blue-950">
      <Navbar>
        <ul class="flex space-x-4">
          <Items content={<FaFacebook />}/>
          <Items content={<FaInstagram />} />
          <Items content={<FaTwitter  />} />
          <Items content={<FaLinkedin />} />
        </ul>
      </Navbar>
    </footer>
  )
}

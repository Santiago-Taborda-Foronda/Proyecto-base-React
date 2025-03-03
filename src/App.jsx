import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Pages/Home/Home'
import { NotFound } from './components/Pages/NotFound/NotFound'
import { Class1 } from './components/Pages/Class1/Class1'

export const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Class1' element={<Class1 />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    
    </>
    
  )
}

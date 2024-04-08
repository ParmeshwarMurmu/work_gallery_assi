import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddNewProject from '../Components/AddNewProject'
import Home from './Home'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/upload' element={<AddNewProject />} />
    </Routes>
  )
}

export default AllRoutes

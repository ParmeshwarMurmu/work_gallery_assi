import React from 'react'
import AllRoutes from './AllRoutes'
import Home from './Home'
import AddNewProject from '../Components/AddNewProject'
import style from '../CSS/Home.module.css'

const Main = () => {
  return (
    <div className={style.main}>
      <AllRoutes />
      {/* <Home /> */}
      {/* <AddNewProject /> */}
      
    </div>
  )
}

export default Main

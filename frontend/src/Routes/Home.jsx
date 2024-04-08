import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAllProjects } from '../Redux/AllProjectReducer/action';
import axios from 'axios';
import Navbar from './Navbar';
import Profile from '../Components/Profile';
import ProjectComp from '../Components/ProjectComp';
import style from '../CSS/Home.module.css'
import { getMoreProjects } from '../Redux/MoreProjectReducer/action';
import MoreProject from '../Components/MoreProject';

const Home = () => {

  const dispatch = useDispatch();
  const { data } = useSelector((store) => {
    return {
      data: store.allProjectReducer.data
    }
  }, shallowEqual)

  const { moreProjects } = useSelector((store) => {
    return {
      moreProjects: store.MoreProjectReducer.moreProjects
    }
  }, shallowEqual)

  // console.log(data)

  // console.log("moreProducts", moreProjects)

  useEffect(() => {
    dispatch(getAllProjects())
    dispatch(getMoreProjects())
  }, [])




  return (
    <div className={style.homeContainer}>

      <div>
        <Navbar />
      </div>

      <div className={style.parentContainer}>


      <div>
        <Profile />
      </div>

      <div>
        {
          data.length > 0 && <div>
            {
              data.map((el) => (
                <ProjectComp {...el} />
              ))
            }
          </div>
        }
      </div>


      <div className={style.moreProjectCont}>
        <p>More Projects</p>
        <div>
          {
             moreProjects.length > 0 && <div className={style.moreProject}>
              {
                moreProjects.map((el)=>(
                  <MoreProject {...el} />
                ))
              }
             </div>
          }
        </div>

      </div>


      <div className={style.footer}>
        <p>Artstation</p>
        <p>Linkedin</p>
        <p>Twitter</p>
      </div>

      </div>


    </div>
  )
}

export default Home

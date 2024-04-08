import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import style from '../CSS/Home.module.css'

const MoreProject = ({title, description, additionalDetails, image}) => {

    const dispatch = useDispatch();

   

  return (
    <div className={style.more}>
      <div className={style.imgCont}>
      <img className={style.image}   src={`http://localhost:8000/uploads/${image}`} alt="" />
      </div>

      <div className={style.moreProjectTitle}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default MoreProject
